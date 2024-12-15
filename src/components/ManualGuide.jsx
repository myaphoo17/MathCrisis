import React from "react";

const ManualGuide = ({ show, handleClose }) => {
  if (!show) return null; 

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white text-black p-6 rounded-lg  shadow-lg w-96">
        <h2 className="text-xl mb-4">How to Play</h2>
        <ul className="list-disc pl-5">
          <li>Answer math problems within the time limit.</li>
          <li>Choose your difficulty level (Easy, Medium, Hard).</li>
          <li>Each correct answer gives you points. Incorrect answers lose you points.</li>
          <li>The game ends when the timer runs out or you quit.</li>
        </ul>
        <button
          className="mt-4 bg-gray-500 text-white p-2 rounded"
          onClick={handleClose}
        >
          Close Guide
        </button>
      </div>
    </div>
  );
};

export default ManualGuide;
