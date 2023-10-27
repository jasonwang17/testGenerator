import React from 'react';
import PracticeTest from './components/PracticeTest'; // Import the PracticeTest component
import Textbox from './components/textbox';
import OpenAI_Test from './components/openai';


const test = {
  "questions": [
    {
      "question": "A ladder is leaning against a wall, and the base of the ladder is sliding away from the wall at a rate of 2 feet per second. If the ladder is 10 feet long and is initially 6 feet away from the wall, how fast is the top of the ladder sliding down the wall?",
      "choices": {
        "A": "1 ft/s",
        "B": "2 ft/s",
        "C": "3 ft/s",
        "D": "4 ft/s"
      },
      "correct_answer": "A"
    },
    {
      "question": "A spherical balloon is being inflated. If the volume of the balloon is increasing at a rate of 50 cubic inches per second, how fast is the radius of the balloon increasing when the radius is 5 inches? (Assume the volume formula for a sphere is V = (4/3)πr^3.)",
      "choices": {
        "A": "1/2 in/s",
        "B": "1 in/s",
        "C": "2 in/s",
        "D": "4 in/s"
      },
      "correct_answer": "C"
    },
    {
      "question": "A right circular cone is being filled with water at a rate of 6 cubic inches per second. If the radius of the base of the cone is 4 inches and the height of the cone is 6 inches, how fast is the water level rising when the water is 3 inches deep?",
      "choices": {
        "A": "1/2 in/s",
        "B": "1 in/s",
        "C": "2 in/s",
        "D": "3 in/s"
      },
      "correct_answer": "B"
    },
    {
      "question": "A rectangle is changing its shape. Its length is increasing at a rate of 2 cm/s, while its width is decreasing at a rate of 1 cm/s. If the length is 10 cm and the width is 5 cm, how fast is the area of the rectangle changing?",
      "choices": {
        "A": "15 cm^2/s",
        "B": "10 cm^2/s",
        "C": "5 cm^2/s",
        "D": "0 cm^2/s"
      },
      "correct_answer": "C"
    }
  ],
  "answer_key": {
    "question_1": "A",
    "question_2": "C",
    "question_3": "B",
    "question_4": "C"
  }
}

// Need the API key for Textbox component


function App() {
  return (
    <div className="App">
      <h1>Practice Test (update 9:30pm)</h1>
      <Textbox />
      <hr />
      <h2>Test Questions</h2>
      <OpenAI_Test />
      <PracticeTest test={test} />
    </div>
  );
}

export default App;