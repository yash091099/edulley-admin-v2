import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import FieldInput from "./FieldInput";
import { useNavigate, useLocation } from "react-router-dom";
import userIcon from "../assets/svg/users.svg";
import documentsIcon from "../assets/svg/documents.svg";
import dollorIcon from "../assets/svg/dollor.svg";
import UserInput from "./UserInput";
import PersonalDetails from "./personalDetails";
import AcademicProfile from "./AcademicProfile";
import WorkBackground from "./WorkBackground";
import TestScores from "./TestScores";
import ViewUserDocument from "./ViewUserDocument";

export default function ViewVUser() {
  const [state, setState] = useState(1);

  return (
    <div className="container flex flex-col h-full bg-white p-[2rem] rounded-[1rem]">
      
      <div className="row mb-4">
        <h1 className="text-text text-[1.5rem] font-[600] tracking-[0.07813rem]">
          Edgar Jones
        </h1>
      </div>
      <div className="row  flex-grow">
        <div className="col-md-3">
          <div className="flex flex-col gap-[1.5rem] border-r border-[#4B465C]">
            {/* Personal Details */}
            <div className="cursor-pointer flex gap-[1rem] items-center" onClick={() => setState(1)}>
              <img className={`p-[0.5rem] rounded-[0.375rem] ${state === 1 ? "bg-primary-brand" : "bg-[#F1F1F2]"}`} src={userIcon}/>
              <div>
                <h1 className={`text-[0.9375rem] font-[600] leading-[1.3125rem] ${state === 1 ? "text-[#4B465C]" : "text-[#4B465C]/50"}`}>Personal Details</h1>
                <p className="text-[#4B465C]/50 text-[0.8125rem] font-[400] leading-[1.25rem]">Name/Email/Contact</p>
              </div>
            </div>
            {/* Academic Profile */}
            <div className="cursor-pointer flex gap-[1rem] items-center" onClick={() => setState(2)}>
              <img className={`p-[0.5rem] rounded-[0.375rem] ${state === 2 ? "bg-primary-brand" : "bg-[#F1F1F2]"}`} src={documentsIcon}/>
              <div>
                <h1 className={`text-[0.9375rem] font-[600] leading-[1.3125rem] ${state === 2 ? "text-[#4B465C]" : "text-[#4B465C]/50"}`}>Academic Profile</h1>
                <p className="text-[#4B465C]/50 text-[0.8125rem] font-[400] leading-[1.25rem]">Completed</p>
              </div>
            </div>
            {/* Work Background */}
            <div className="cursor-pointer flex gap-[1rem] items-center" onClick={() => setState(3)}>
              <img className={`p-[0.5rem] rounded-[0.375rem] ${state === 3 ? "bg-primary-brand" : "bg-[#F1F1F2]"}`} src={dollorIcon}/>
              <div>
                <h1 className={`text-[0.9375rem] font-[600] leading-[1.3125rem] ${state === 3 ? "text-[#4B465C]" : "text-[#4B465C]/50"}`}>Work Backgrounds</h1>
                <p className="text-[#4B465C]/50 text-[0.8125rem] font-[400] leading-[1.25rem]">Completed</p>
              </div>
            </div>
            {/* Tests */}
            <div className="cursor-pointer flex gap-[1rem] items-center" onClick={() => setState(4)}>
              <img className={`p-[0.5rem] rounded-[0.375rem] ${state === 4 ? "bg-primary-brand" : "bg-[#F1F1F2]"}`} src={dollorIcon}/>
              <div>
                <h1 className={`text-[0.9375rem] font-[600] leading-[1.3125rem] ${state === 4 ? "text-[#4B465C]" : "text-[#4B465C]/50"}`}>Tests</h1>
                <p className="text-[#4B465C]/50 text-[0.8125rem] font-[400] leading-[1.25rem]">Completed</p>
              </div>
            </div>
            {/* Documents */}
            <div className="cursor-pointer flex gap-[1rem] items-center" onClick={() => setState(5)}>
              <img className={`p-[0.5rem] rounded-[0.375rem] ${state === 5 ? "bg-primary-brand" : "bg-[#F1F1F2]"}`} src={dollorIcon}/>
              <div>
                <h1 className={`text-[0.9375rem] font-[600] leading-[1.3125rem] ${state === 5 ? "text-[#4B465C]" : "text-[#4B465C]/50"}`}>Documents</h1>
                <p className="text-[#4B465C]/50 text-[0.8125rem] font-[400] leading-[1.25rem]">Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {state === 1 && <PersonalDetails />}
          {state === 2 && <AcademicProfile />}
          {state === 3 && <WorkBackground />}
          {state === 4 && <TestScores />}
          {state === 5 && <ViewUserDocument />}
        </div>
      </div>
    </div>
  );
}
