import React, { useState } from 'react';
import LaTeXDiagram from './components/latex';


const PracticeTest = ({ test }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleAnswerChange = (questionIndex, selectedAnswer) => {
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionIndex]: selectedAnswer,
      }));
    };
  
    const validateAnswers = () => {
      let score = 0;
      test.questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correct_answer) {
          score++;
        }
      });
      alert(`You scored ${score} out of ${test.questions.length} questions.`);
    };

    return (
      <div>
        {test.questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
            <LaTeXDiagram/>
            <ul>
              {Object.entries(question.choices).map(([choice, text]) => (
                  <p>
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={choice}
                      checked={selectedAnswers[index] === choice}
                      onChange={() => handleAnswerChange(index, choice)}                      
                    />
                    {text}
                  </p>
              ))}
            </ul>
          </div>
        ))}
        <button onClick={validateAnswers}>Submit Answers</button>
      </div>
    );
  };

  export default PracticeTest;