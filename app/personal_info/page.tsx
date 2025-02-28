// app/personal_info/page.tsx

"use client"; // This line makes sure your page is a client component

import { useState } from "react";
import Link from "next/link"; // Use Link from Next.js for navigation

export default function PersonalInfoForm() {
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [height, setHeight] = useState<number | string>("");

  // Handle gender change
  const handleGenderChange = (selectedGender: string) => {
    setGender(selectedGender);
  };

  // Form validation
  const isFormValid =
    gender &&
    age &&
    weight &&
    height &&
    !isNaN(Number(age)) &&
    !isNaN(Number(weight)) &&
    !isNaN(Number(height));

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
            <img
              src="/images/personal_icon.png"
              alt="personal_icon"
              className="w-8 h-8"
            />
            <div>
              <h2 className="text-lg font-semibold text-black">
                Personal Information
              </h2>
              <p className="text-sm text-gray-600">Tell Us About Yourself</p>
            </div>
          </div>
        </div>

        {/* FITRACK Logo Section */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="logo_icon" width={50} height={44} />
          <div className="text-black font-extrabold text-xl">FITRACK</div>
        </div>
      </div>

      {/* Image */}
      <div className="mb-6 flex justify-center w-full">
        <img
          src="/images/personal_img.png"
          alt="Personal Information Graphic"
          className="w-auto h-56"
        />
      </div>

      {/* Form Fields */}
      <div className="w-full max-w-3xl space-y-6">
        {/* Gender Selection */}
        <div>
          <label htmlFor="gender" className="block text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            {["Male", "Female", "Other"].map((genderOption) => (
              <button
                key={genderOption}
                onClick={() => handleGenderChange(genderOption)}
                className={`px-4 py-2 border rounded-full ${
                  gender === genderOption
                    ? "bg-green-800 text-white"
                    : "text-orange-600 border-orange-600 hover:bg-orange-100"
                }`}
                aria-pressed={gender === genderOption ? "true" : "false"}
              >
                {genderOption}
              </button>
            ))}
          </div>
        </div>

        {/* Age Input */}
        <div>
          <label htmlFor="age" className="block text-gray-700 mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
            className="w-full p-2 border rounded-md text-white-600 border-gray-300"
            min="1"
            aria-describedby="age-helper-text"
          />
          <small id="age-helper-text" className="text-gray-500">
            Please enter your age.
          </small>
        </div>

        {/* Height and Weight Input Sections */}
        <div className="flex justify-between space-x-4">
          {/* Weight on Left */}
          <div className="w-1/2">
            <label htmlFor="weight" className="block text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter Weight"
              className="w-full p-2 border rounded-md text-white-600 border-gray-300"
              min="1"
              aria-describedby="weight-helper-text"
            />
            <small id="weight-helper-text" className="text-gray-500">
              Please enter your weight in kg.
            </small>
          </div>

          {/* Height on Right */}
          <div className="w-1/2">
            <label htmlFor="height" className="block text-gray-700 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter Height"
              className="w-full p-2 border rounded-md text-white-600 border-gray-300"
              min="1"
              aria-describedby="height-helper-text"
            />
            <small id="height-helper-text" className="text-gray-500">
              Please enter your height in cm.
            </small>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <Link href="/personal_info/page1">
  <div
    className={`mt-8 px-6 py-2 rounded-full w-full max-w-xs ${
      isFormValid ? "bg-green-800 text-white hover:bg-green-700" : "bg-gray-400 text-gray-600 cursor-not-allowed"
    }`}
    aria-disabled={!isFormValid}
  >
    Next
  </div>
</Link>
    </div>
  );
}
