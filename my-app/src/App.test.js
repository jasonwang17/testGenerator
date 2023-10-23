import React from 'react';

const PracticeTest = ({ test }) => {
  return (
    <div>
      {test.questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.graph_problem ? (
            <div dangerouslySetInnerHTML={{ __html: question.graph_latex }}></div>
          ) : null}
          <ul>
            {Object.entries(question.choices).map(([choice, text]) => (
              <li key={choice}>
                <label>
                  <input
                    type="radio"
                    name={`question_${index}`}
                    value={choice}
                  />
                  {text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const test = {
  "questions": [
    {
      "question": "Find the derivative of the function f(x) = 2x^3 - 4x^2 + 3x - 1.",
      "choices": {
        "A": "f'(x) = 6x^2 - 8x + 3",
        "B": "f'(x) = 6x^2 - 8x - 3",
        "C": "f'(x) = 6x^2 - 8x + 1",
        "D": "f'(x) = 6x^2 - 4x + 3"
      },
      "correct_answer": "A"
    },
    {
      "question": "Solve the equation ∫(2x^2 - 4x + 3)dx from x = 1 to x = 4.",
      "choices": {
        "A": "7",
        "B": "13",
        "C": "11",
        "D": "9"
      },
      "correct_answer": "C"
    },
    {
      "question": "What is the limit lim(x -> 0) (sin(3x)/3x)?",
      "choices": {
        "A": "1",
        "B": "0",
        "C": "3",
        "D": "2"
      },
      "correct_answer": "A"
    },
    {
      "question": "Which of the following represents the graph of y = e^x - 1?",
      "graph_problem": true,
      "graph_latex": "\\begin{tikzpicture}\n\\begin{axis}[\n    xlabel=$x$,\n    ylabel=$y$,\n    domain=-2:2,\n    samples=100\n]\n\\addplot[color=blue]{exp(x)-1};\n\\end{axis}\n\\end{tikzpicture}",
      "choices": {
        "A": "Graph A",
        "B": "Graph B",
        "C": "Graph C",
        "D": "Graph D"
      },
      "correct_answer": "A"
    },
    {
      "question": "What is the value of the second derivative of f(x) = x^4 - 4x^3 + 6x^2 - 2x + 1?",
      "choices": {
        "A": "f''(x) = 12x^2 - 24x + 12",
        "B": "f''(x) = 4x^3 - 12x^2 + 12x - 2",
        "C": "f''(x) = 12x^3 - 24x^2 + 12x - 2",
        "D": "f''(x) = 4x^2 - 12x + 6"
      },
      "correct_answer": "B"
    }
  ]
}


function App() {
  return (
    <div className="App">
      <PracticeTest test={test} />
    </div>
  );
}

export default App;
