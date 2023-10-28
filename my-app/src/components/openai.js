import React, { useState } from 'react';
import axios from 'axios';

function OpenAI_Test({ onValueChange }) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const gptinput = `
  Generate a practice test with 5 questions about ${input} for AP calculus BC. Overall result should be JSON format. For each question provide 4 choices (A,B,C,D) with only one of them is correct answer.
  For each question return a correct answer key, and use latex code to describe math formula.
  make sure each latex code section is wrapped with $
  Below is a sample response format for you to follow:
  "questions": [
  {
  "question": "body of the question",
  "choices": {
  "A": "1 ft/s",
  "B": "2 ft/s",
  "C": "3 ft/s",
  "D": "4 ft/s"
  },
  "correct_answer": "A"
  }
`


    const callAPI = async () => {
        try {
            setShowLoader(true);
            const result = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [{ "role": "user", "content": gptinput }],
                temperature: 0.7,
            },
                {
                    headers: {
                        'Authorization': 'Bearer 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',
                        'Content-Type': 'application/json'
                    }
                });
            setShowLoader(false);
            const retrievedResponse = result.data.choices[0].message.content;
            onValueChange(retrievedResponse)
            setResponse(retrievedResponse);
        } catch (error) {
          setShowLoader(false);
            console.error('There was an error calling the API', error);
        }
    };
    return (
      <div className="App">
        <div className="input-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter any AP calculus subject ..."
          />
          <button onClick={callAPI}>Generate Test</button>
          {showLoader && <div className="loader"></div>}
        </div>
      </div>
    );
    
}

export default OpenAI_Test;
