import React, { useState } from 'react';
import axios from 'axios';



const TextboxQuery = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const fetchData = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: `${userInput}`,
        max_tokens: 50,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );
  
    setResponse(response.data.choices[0].text);
  };

  const downloadResponseJSON = () => {
    if (response) {
      const json = JSON.stringify(response, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'gpt_response.json';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <h1>Textbox Query</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your input"
          value={userInput}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={fetchData}>Generate Response</button>
      <button onClick={downloadResponseJSON} disabled={!response}>
        Download Response as JSON
      </button>
      {response && (
        <div>
          <h2>Response from GPT:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TextboxQuery;
