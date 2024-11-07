"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export default function signUp() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      {/* Main Container */}

      <div className="flex flex-row w-full bg-white">
        {/* Left Side - Image */}
        <div className="h-screen bg-white">
        <img src="/images/login_img.png" alt="Login Image" className="w-100 h-screen p-5" />
      </div>
        {/* Right Side - Login Form */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Sample Image"
              width={50}
              height={44}
            />
            <div className="text-black font-extrabold text-3xl">
              FITRACK
            </div>
          </div>

          {/* Login Form */}
          <div className="w-full max-w-sm">
            <h2 className="text-black font-bold text-lg mb-2 text-center">
              Sign in to your account
            </h2>
            <h3 className="text-black font-normal text-sm mb-6 text-center">
              Your journey to a healthier life starts here.
            </h3>

            {/* Input Fields */}
            <div className="space-y-4">
            <Input
                type="text"
                label="Name"
                placeholder="Enter your Name"
                className="w-full"
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Input
                type="password"
                label="Password"
                placeholder="Create password"
                className="w-full"
              />
            </div>

            {/* Button and Links */}
            <div className="text-center mt-4">
              <Button color="success" className="w-full">Create Account</Button>
            </div>

            {/* Social Sign-In Options */}
            <div className="flex flex-col items-center mt-6 space-y-4">
              <p className="text-gray-700">Or sign in with</p>
              <div className="flex space-x-4 justify-center">
                <button
                  aria-label="Sign in with Facebook"
                  className="p-2 rounded-full bg-blue-600 text-white"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.676 0H1.324C.593 0 0 .594 0 1.326v21.348C0 23.407.593 24 1.324 24H12.82v-9.294H9.692V10.41h3.128V7.854c0-3.097 1.89-4.788 4.646-4.788 1.32 0 2.452.099 2.782.142v3.228l-1.911.001c-1.499 0-1.79.712-1.79 1.757v2.305h3.578l-.466 3.295h-3.112V24h6.097C23.407 24 24 23.407 24 22.674V1.326C24 .594 23.407 0 22.676 0z" />
                  </svg>
                </button>
                <button
                  aria-label="Sign in with Google"
                  className="p-2 rounded-full bg-red-500 text-white"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.204h10.338c.096.571.162 1.145.162 1.846 0 5.571-4.348 9.55-9.5 9.55-5.346 0-9.8-4.333-9.8-9.75S7.655 3.05 12.9 3.05c2.698 0 4.946.996 6.448 2.597l-2.617 2.522C15.187 6.849 14.18 6.452 13 6.452c-3.048 0-5.5 2.47-5.5 5.496 0 3.053 2.442 5.504 5.5 5.504 2.937 0 4.493-2.096 4.678-3.196H12v-3.052z" />
                  </svg>
                </button>
                <button
                  aria-label="Sign in with Instagram"
                  className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 0h9a7.5 7.5 0 017.5 7.5v9a7.5 7.5 0 01-7.5 7.5h-9A7.5 7.5 0 010 16.5v-9A7.5 7.5 0 017.5 0zm0 2A5.5 5.5 0 002 7.5v9a5.5 5.5 0 005.5 5.5h9a5.5 5.5 0 005.5-5.5v-9a5.5 5.5 0 00-5.5-5.5h-9zm4.5 5a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm5-2a1 1 0 110 2 1 1 0 010-2z" />
                  </svg>
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-gray-700 mt-4">Already have an account?</p>
              <Button color="success" className="w-full" onClick={() => router.push('/login')}>Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}