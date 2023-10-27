import React, { useState } from 'react';
import axios from 'axios';

function OpenAI_Test() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const callAPI = async () => {
    try {
      const result = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{"role": "user",
        "content": "Create a practice test in JSON format on: " + input +
        "it should consist of questions with answer options as A, B, C, or D, and an answer key " + 
        "with questions notated as 'question_<number goes here>'. Remember units"}],
        temperature: 0.9,
        max_tokens: 500
      }, {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        }
      });
      setResponse(result.data.choices[0].message.content);
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
