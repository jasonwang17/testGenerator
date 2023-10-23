import React, { useState } from 'react';

const TextboxQuery = ({ apiKey }) => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleGenerateResponse = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: userInput,
          max_tokens: 300, // Adjust based on your needs
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(data);
      } else {
        console.error('Error:', response.statusText);
        setResponse({ error: 'Error occurred while calling the OpenAI API.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'Error occurred while processing the request.' });
    }
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
      <button onClick={handleGenerateResponse}>Generate Response</button>
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
