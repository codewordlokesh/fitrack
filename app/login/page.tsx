import React from 'react';
import { Input } from '@nextui-org/react';
import { MdEmail, MdLock } from 'react-icons/md';
import Link from 'next/link'; // Import Link from next/link

export default function Login() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Login Page</h1>
      
      {/* Email Input */}
      <Input
        type="email"
        label="Email"
        placeholder="you@example.com"
        labelPlacement="outside"
        startContent={<MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
      />

      {/* Password Input */}
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        labelPlacement="outside"
        startContent={<MdLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
      />

      {/* Navigation Button */}
      <div>
        {/* Use Link to navigate to the home page */}
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
