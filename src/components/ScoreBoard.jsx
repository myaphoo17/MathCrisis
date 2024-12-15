import React from "react";

const Scoreboard = ({ score, level, answersCorrect, answersWrong }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg shadow-lg w-full max-w-md mx-auto">

     <h3 className="text-xl font-semibold  hidden">Level: <span className="font-bold">{level}</span></h3>
    <h3 className="text-xl font-semibold mb-2">Score: <span className="font-bold">{score}</span></h3>
    <h5 className="text-lg mb-1">Correct Answers: <span className="text-green-400">{answersCorrect}</span></h5>
    <h5 className="text-lg">Wrong Answers: <span className="text-red-400">{answersWrong}</span></h5>

   
    
  </div>
  
  );
};

export default Scoreboard;
