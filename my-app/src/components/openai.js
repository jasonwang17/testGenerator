import React, { useState } from 'react';
import axios from 'axios';

function OpenAI_Test({ onValueChange }) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const gptinput = `
  You are a math teacher that wants to ensure that your students understand the concepts you have been teaching.
  Generate a practice test with 5 questions about ${input} for AP calculus. The overall result should be JSON format. For each question provide 4 choices (A,B,C,D) with only one of them as correct answer.
  For each question return a correct answer key, using latex code to describe any mathematical expressions or formulas in both questions and answers.
  make sure each latex code section is wrapped with '$', and keeps in mind units and constants such as pi. Finally, make sure all questions are correct and revelevant.
  Below is a sample response format to follow:
  "questions": [
  {
  "question": "$body of the question$",
  "choices": {
  "A": "$1$ ft/s",
  "B": "$2$ ft/s$",
  "C": "$3$ ft/s$",
  "D": "$4$ ft/s$"
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
        <h1>Enter any AP calculus subject and AI will generate a practice test for you!</h1>
        <div className="input-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter any AP calculus subject and AI will generate it for you!"
          />
          <button onClick={callAPI}>Generate Test</button>
          {showLoader && <div className="loader"></div>}
        </div>
      </div>
    );
    
}

export default OpenAI_Test;
