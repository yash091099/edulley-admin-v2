import React from "react";
import UserInput from "./UserInput";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
import lgoo from '../assets/images/Edulley-logo.png';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[2rem] max-w-[37.5625rem] w-full p-4">
      <img className="w-[4.6875rem] mb-[1rem] mx-auto" src={lgoo} alt="step" />
      <h1 className="text-text text-[2rem] font-[600]">Login</h1>
      <div className="flex flex-col gap-[1rem]">
        <UserInput label="Email" type="email" placeholder="Enter your email" />
        <UserInput label="Password" type="password" placeholder="********" />
      </div>
      <PrimaryButton label="Login" action={() => {navigate('/dashboard')}} />
    </div>
  );
}
