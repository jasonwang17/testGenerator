import React, { useState } from 'react';
import axios from 'axios';

function OpenAI_Test({ onValueChange }) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const callAPI = async () => {
    try {
      const result = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": input}],
        temperature: 0.7,
        max_tokens: 150
      }, {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        }
      });
      const retrievedResponse = result.data.choices[0].message.content;
      onValueChange(retrievedResponse)
      setResponse(retrievedResponse);
    } catch (error) {
      console.error('There was an error calling the API', error);
    }
  };

  return (
    <div className="App">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask ChatGPT something..."
      />
      <button onClick={callAPI}>Ask</button>
      <div>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default OpenAI_Test;
