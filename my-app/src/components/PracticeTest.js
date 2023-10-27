import React, { useState  } from 'react';
import TikzGraph from './latex';
import LaTeXFormula from './mathlatex';

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

    //below is just a math formula to test
    const testFormula = "{'\\int_0^\\infty \\frac{e^{-x}}{x!}dx'}";

    //below is a tikz diagram to test (will delete later)
    const tikzCode = `
    \\begin{tikzpicture}
      \\draw[->] (-1,0) -- (3,0) node[right] {$x$};
      \\draw[->] (0,-1) -- (0,3) node[above] {$y$};
      \\draw[blue,thick] (-0.5,0) -- (1,2) -- (2.5,0);
      \\fill[red] (-0.5,0) circle (2pt);
      \\fill[red] (1,2) circle (2pt);
      \\fill[red] (2.5,0) circle (2pt);
    \\end{tikzpicture}
    `;

    return (
      <div>
        {test.questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
            <LaTeXFormula formula={testFormula}/>
            <TikzGraph latexCode={tikzCode}/>
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