import React from 'react';

const PracticeTest = ({ test }) => {
  return (
    <div>
      {test.questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
};

const test = {
  "questions": [
    {
      "question": "A ladder is leaning against a wall. If the base of the ladder is sliding away from the wall at a rate of 2 feet per second and the top of the ladder is sliding down the wall at a rate of 1 foot per second, how fast is the angle between the ladder and the wall changing when the ladder is 10 feet long?",
      "options": [
        "0.15 radians per second",
        "0.20 radians per second",
        "0.25 radians per second",
        "0.30 radians per second"
      ]
    },
    {
      "question": "A spherical balloon is being inflated with helium. If the radius of the balloon is increasing at a rate of 4 inches per minute, how fast is the volume of the balloon increasing when the radius is 6 inches?",
      "options": [
        "32π cubic inches per minute",
        "48π cubic inches per minute",
        "64π cubic inches per minute",
        "96π cubic inches per minute"
      ]
    },
    {
      "question": "A right circular cone is being filled with water. If the radius of the base is decreasing at a rate of 2 inches per minute and the height is increasing at a rate of 3 inches per minute, how fast is the volume of water in the cone changing when the radius is 4 inches and the height is 6 inches?",
      "options": [
        "18π cubic inches per minute",
        "20π cubic inches per minute",
        "22π cubic inches per minute",
        "24π cubic inches per minute"
      ]
    }
  ],
  "answer_key": {
    "1": "0.25 radians per second",
    "2": "96π cubic inches per minute",
    "3": "22π cubic inches per minute"
  }
}


function App() {
  return (
    <div className="App">
      <h1>Practice Test</h1>
      <hr />
      <h2>Test Questions</h2>
      <PracticeTest test={test} />
    </div>
  );
}

export default App;