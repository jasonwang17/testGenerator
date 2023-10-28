import React, { useState  } from 'react';
import LaTeXFormula from './mathlatex';
import { MathJax, MathJaxContext } from "better-react-mathjax";


function renderTextAndLatex(inputString) {
  const latexRegex = /\$(.*?)\$/g;
  const matches = inputString.match(latexRegex);
  const segments = inputString.split(latexRegex);
  console.log("all segments:", segments);
  console.log("all matches:", matches);

  if (!matches) {
    // No LaTeX code found in the input, it's entirely regular text
    return <span>{inputString}</span>;
  }

  const processedSegments = segments.map((segment, index) => {
    if (matches.includes('$'+segment+'$')) {
      console.log("inside if segment:", segment)
      const latexCode = segment.slice(1, -1);
      return (
        <React.Fragment key={index}>
          {/* Render the LaTeX code using your LaTeX rendering component */}
          <MathJax.Provider>
            <MathJax.Node inline formula={latexCode} />
          </MathJax.Provider>
        </React.Fragment>        
      );
    } else {
      // Render regular text
      console.log("regaul text:", segment)
      return <span key={index}>{segment}</span>;
    }
  });

  return <>{processedSegments}</>;
}

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
    const config = {
      loader: { load: ["[tex]/html"] },
      tex: {
        packages: { "[+]": ["html"] },
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"]
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"]
        ]
      }
    };
    
    return (
      <div>
        {test.questions.map((question, index) => (
          <div key={index}>
            <p>
            <MathJaxContext version={3} config={config}>
              <MathJax hideUntilTypeset={"first"}>
              {question.question}
              </MathJax>
            </MathJaxContext>
            </p>
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