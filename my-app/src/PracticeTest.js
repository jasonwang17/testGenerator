import React from 'react';

const PracticeTest = ({ test }) => {
    return (
      <div>
        {test.questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
            <ul>
              {Object.entries(question.choices).map(([choice, text]) => (
                  <p>
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={choice}
                    />
                    {text}
                  </p>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  export default PracticeTest;