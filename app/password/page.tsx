"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function OTP() {
  const router = useRouter();
  
  // Set initial default OTP values
  const [otp, setOtp] = useState(["0", "0", "0", "0"]);

  // Expected OTP for verification
  const expectedOtp = ["1", "2", "3", "4"];

  // Timer state (in seconds)
  const [timer, setTimer] = useState(60);

  // Handler to update OTP values
  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp.join("") === expectedOtp.join("")) {
      router.push("/personal_info"); // Redirect on successful verification
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Start the timer when the page is loaded
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval); // Clear the interval when the timer reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      {/* Main Container */}
      <div className="flex flex-row w-full bg-white">
        {/* Left Side - Image */}
        <div className="h-screen bg-white">
          <img
            src="/images/login_img.png"
            alt="Login Image"
            className="w-100 h-screen p-5"
          />
        </div>
        {/* Right side - OTP verification */}
        <div className="flex flex-col justify-center items-center w-1/2 p-8">
          <Avatar src="/images/otp logo.png" className="w-20 h-20 mb-6" />
          <h2 className="text-black font-bold text-lg mb-2 text-center">
            OTP Code Verification
          </h2>
          <h3 className="text-black font-semibold text-base mb-6 text-center">
            We sent the verification code to name@gmail.com
          </h3>

          {/* OTP Input - Four Digit Boxes */}
          <div className="flex gap-4 mb-6">
            {otp.map((digit, index) => (
              <Input
                key={index}
                value={digit}
                maxLength={1}
                isClearable
                className="w-16 h-13 text-center text-white bg-black"
                placeholder="0"
                aria-label="OTP Digit"
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          {/* Timer */}
          <div className="mb-4 text-center text-sm text-gray-500">
            Time remaining: {timer} seconds
          </div>

          {/* OTP Verification Button */}
          <Button 
            onClick={verifyOtp} 
            size="lg" 
            className="w-80" 
            disabled={timer === 0} // Disable button when timer reaches 0
          >
            Verify OTP
          </Button>
        </div>
      </div>
    </div>
  );
}
