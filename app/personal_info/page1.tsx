"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter to handle navigation

export default function PersonalInfoForm() {
  const [activityLevel, setActivityLevel] = useState<string | null>(null); // Track selected activity level
  const router = useRouter(); // Initialize the router

  const handleActivityChange = (selectedActivity: string) => {
    setActivityLevel(selectedActivity); // Set the selected activity level
  };

  const handleNextClick = () => {
    if (activityLevel) {
      // You can replace this alert with your form submission logic
      alert(`Selected Activity Level: ${activityLevel}`);
      router.push("/personal_info/page1"); // Proceed to next page (you can replace this with actual navigation)
    } else {
      alert("Please select an activity level.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 bg-white">
      {/* Progress Bar */}
      <div className="w-full flex justify-center space-x-4 mb-4">
        <div className="w-2/5 h-3 bg-green-800 rounded-full"></div>
        <div className="w-2/5 h-3 bg-green-200 rounded-full"></div>
        <div className="w-2/5 h-3 bg-green-200 rounded-full"></div>
        <div className="w-2/5 h-3 bg-green-200 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="w-full flex justify-between items-center mb-6">
        {/* Personal Information Section */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <img src="/images/personal_icon.png" alt="personal_icon" className="w-8 h-8" />
            <div>
              <h2 className="text-lg font-semibold text-black">Activity Level</h2>
              <p className="text-sm text-gray-600">What's Your Activity Level?</p>
            </div>
          </div>
        </div>

        {/* FITRACK Logo Section */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="logo_icon" width={50} height={44} />
          <div className="text-black font-extrabold text-xl">FITRACK</div>
        </div>
      </div>

      {/* Activity Level Buttons */}
      <div className="w-full flex flex-col items-center space-y-4 mb-6">
        <button
          onClick={() => handleActivityChange("Sedentary")}
          className={`w-full max-w-xs px-6 py-2 rounded-full ${
            activityLevel === "Sedentary" ? "bg-green-800 text-white" : "bg-gray-200"
          } hover:bg-green-700`}
        >
          Sedentary
        </button>
        <button
          onClick={() => handleActivityChange("Lightly Active")}
          className={`w-full max-w-xs px-6 py-2 rounded-full ${
            activityLevel === "Lightly Active" ? "bg-green-800 text-white" : "bg-gray-200"
          } hover:bg-green-700`}
        >
          Lightly Active
        </button>
        <button
          onClick={() => handleActivityChange("Moderately Active")}
          className={`w-full max-w-xs px-6 py-2 rounded-full ${
            activityLevel === "Moderately Active" ? "bg-green-800 text-white" : "bg-gray-200"
          } hover:bg-green-700`}
        >
          Moderately Active
        </button>
        <button
          onClick={() => handleActivityChange("Very Active")}
          className={`w-full max-w-xs px-6 py-2 rounded-full ${
            activityLevel === "Very Active" ? "bg-green-800 text-white" : "bg-gray-200"
          } hover:bg-green-700`}
        >
          Very Active
        </button>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        className="mt-8 px-6 py-2 bg-green-800 text-white rounded-full hover:bg-green-700 w-full max-w-xs"
      >
        Next
      </button>
    </div>
  );
}
