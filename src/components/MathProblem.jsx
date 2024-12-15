import React, { useState, useEffect } from "react";

const MathProblem = ({ level, onCorrectAnswer, onWrongAnswer }) => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    generateProblem(level);
  }, [level]);

  const generateProblem = (level) => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];

    let newQuestion = `${num1} ${operator} ${num2}`;
    let answer = eval(newQuestion);

    setQuestion(newQuestion);
    setCorrectAnswer(answer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(userAnswer) === correctAnswer) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
    setUserAnswer("");
    generateProblem(level);
  };
  return (
    <div className="flex flex-col items-center bg-white mx-auto mt-4 ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{question}</h2>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
  <div className="mb-6">
    <label htmlFor="answer" className="block text-lg font-medium text-gray-700 mb-2">
      Enter Your Answer:
    </label>
    <input
      id="answer"
      value={userAnswer}
      onChange={(e) => setUserAnswer(e.target.value)}
      placeholder="Type your answer here"
      className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500 text-lg"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300 text-lg font-semibold"
  >
    Submit
  </button>
</form>

    </div>
  );
};
export default MathProblem;
