import React, { useState, useEffect } from "react";
import MathProblem from "./components/MathProblem";
import Timer from "./components/Timer";
import ManualGuide from "./components/ManualGuide";

import Scoreboard from "./components/ScoreBoard";
import { Howl } from "howler";

import correctSound from "./sounds/correct.mp3";
import wrongSound from "./sounds/wrong.mp3";

function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("easy");
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(60);
  const [showTimer, setShowTimer] = useState(true);
  const [answersCorrect, setAnswersCorrect] = useState(0);
  const [answersWrong, setAnswersWrong] = useState(0);
  const [showManualGuide, setShowManualGuide] = useState(false);


  const openManualGuide = () => setShowManualGuide(true);
  const closeManualGuide = () => setShowManualGuide(false);


  const handleCorrectAnswer = () => {
    setAnswersCorrect((prev) => prev + 1);

    setScore((prevScore) => {
      const updatedScore = prevScore + 10;
  
      if (updatedScore >= 100) {
        setGameOver(true);
        alert("🎉 Congratulations! You Win! 🎉");
      }
  
      new Howl({ src: [correctSound] }).play();
      return updatedScore;
    });
  };
  
  
  const handleWrongAnswer = () => {
    if (gameOver) return; 
  
    setAnswersWrong((prev) => {
      const updatedWrongAnswers = prev + 1;
  
      if (updatedWrongAnswers >= 5) {
        setGameOver(true); 
      }
      new Howl({ src: [wrongSound] }).play(); 
      return updatedWrongAnswers;
    });
  };
  
  const handleGameOver = () => {
    setGameOver(true);
    setShowTimer(false);
  };

  const resetGame = () => {
    setScore(0);
    setTimer(60);
    setAnswersCorrect(0);
    setAnswersWrong(0);
    setGameOver(false);
    setShowTimer(true);
  };

  return (
    <>
<div className="flex flex-col min-h-screen bg-gray-100">
<header className="bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-700 text-white p-4 shadow-md sticky top-0 z-50 flex justify-between items-center">
  {/* Title on the left */}
  <h5 className="text-3xl font-extrabold flex items-center space-x-4">
    <i className="fas fa-calculator text-4xl"></i>
    <span className="tracking-wide text-2xl">Mental Math Test</span>
  </h5>
  <button
    onClick={openManualGuide}
    className="px-8 py-4 rounded-full transition-transform transform hover:scale-105 hover:bg-violet-600 border-2 border-white shadow-xl"
  >
    How To Play?
  </button>
  <ManualGuide show={showManualGuide} handleClose={closeManualGuide} />
</header>
<div className="flex flex-wrap justify-between mt-3">
    {/* Left Column */}
    <div className="w-full md:w-1/4 flex flex-col items-center space-y-6">
    <div>
        <Timer
          time={timer}
          setTime={setTimer}
          showTimer={showTimer}
          onGameOver={handleGameOver}
        />
      </div>
      <div className="text-center">
        <label className="text-lg font-bold mb-2 block">Choose Level:</label>
        <select
          onChange={(e) => setLevel(e.target.value)}
          className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md transition-all transform hover:scale-105 hover:bg-indigo-700"
        >
          <option value="easy" className="bg-green-500 text-white">
            Easy
          </option>
          <option value="medium" className="bg-yellow-500 text-white">
            Medium
          </option>
          <option value="hard" className="bg-red-500 text-white">
            Hard
          </option>
        </select>
      </div>


    </div>

    {/* Right Column */}
    <div className="w-full md:w-1/2 flex-grow p-7 bg-white shadow-xl rounded-lg mt-2 mr-1">
      <Scoreboard
        score={score}
        level={level}
        answersCorrect={answersCorrect}
        answersWrong={answersWrong}
      />

      {!gameOver ? (
        <>
          <MathProblem
            level={level}
            onCorrectAnswer={handleCorrectAnswer}
            onWrongAnswer={handleWrongAnswer}
          />
        </>
      ) : (
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Game Over</h2>
          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-xl hover:bg-blue-800 transition duration-300"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  </div>

<footer className="bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800 p-4 text-center shadow-inner mt-10">
  <p className="text-sm font-medium text-gray-600">
    © 2024 MPT's sudden ADHD 💀✨. All rights reserved.
  </p>
</footer>

      </div>
    </>
  );
};



export default App;

