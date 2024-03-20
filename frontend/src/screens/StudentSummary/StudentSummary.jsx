import React from 'react';
import scoreCraftLogo from "../../assets/scorecraftlogo.png"

function StudentSummary() {
  return (
    <div className="bg-blue-100 min-h-screen p-8">

        <div className="absolute top-4 left-4 mt-8 ml-8">
        <img src={scoreCraftLogo} alt="ScoreCraft Logo" className="h-20" />
      </div>

      <h1 className="text-6xl my-4 font-serif	text-center mt-20">Subject Scores</h1>

      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* Score Cards */}
          {/* Upper Row */}
          <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-10 w-5/6">
            <h2 className="text-xl font-semibold mb-4">Mathematics</h2>
            <p className="text-gray-700">Score: 85%</p>
          </div>    

          <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-10 w-5/6">
            <h2 className="text-xl font-semibold mb-4">Science</h2>
            <p className="text-gray-700">Score: 92%</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-10 w-5/6">
            <h2 className="text-xl font-semibold mb-4">English</h2>
            <p className="text-gray-700">Score: 78%</p>
          </div>

          {/* Lower Row */}
          <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-10 w-5/6">
            <h2 className="text-xl font-semibold mb-4">History</h2>
            <p className="text-gray-700">Score: 88%</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-10 w-5/6">
            <h2 className="text-xl font-semibold mb-4">Physics</h2>
            <p className="text-gray-700">Score: 90%</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-10 w-5/6">
            <h2 className="text-xl font-semibold mb-4">Chemistry</h2>
            <p className="text-gray-700">Score: 82%</p>
          </div>
          
          {/* Add more cards for other subjects here */}
        </div>
      </div>
    </div>
  );
}

export default StudentSummary;
