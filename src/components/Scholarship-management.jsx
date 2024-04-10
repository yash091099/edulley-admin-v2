import React, { useState } from "react";
import Table from "./Table";
import filterIcon from '../assets/svg/filter-icon.svg';
import { useNavigate } from "react-router-dom";
import addIcon from "../assets/svg/Rectangle.svg";
import AddScholarship from "./AddScholorship";
import CourseTable from "./CourseTable";

export default function ScholarshipManagement() {
  const navigate = useNavigate();

// columns in table | note:- order matters
  const columns = [
    // { name: "S.NO", enableSorting: true, searchingEnabled: false },
    { name: "Scholarship Name", enableSorting: true, searchingEnabled: true },
    { name: "Amount", enableSorting: true, searchingEnabled: true },
    { name: "Deadline", enableSorting: true, searchingEnabled: true },
    { name: "University", enableSorting: true, searchingEnabled: true },
    { name: "Course", enableSorting: true, searchingEnabled: true },
  ];


//   provide the actual table body data
  const data = [
    {
        "S.no": 1,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 2,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 3,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 4,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 5,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 6,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 7,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 8,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },{
        "S.no": 9,
        "Name": "Aauw International Fellowship",
        "Amount": "$57.70k",
        "Deadline": "July 07, 2024",
        "University": "ACS University",
        "Course": "UG + PG (Accelerated) Degree"
    },
  ];


//   map the data to columns | note:- order matters*
  const mapping = [
    // 'S.no',
    'Name',
    'Amount',
    'Deadline',
    'University',
    'Course'
  ]


  const [isAdd, setIsAdd] = useState(false);

  //   addForm
  const openAddForm = () => {
    setIsAdd(!isAdd);
  };
  

  return (
      <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-[1rem]'>
        <div className="flex justify-between">
          <h1 className='text-text text-[1.5rem] font-[600]'>Scholarship Management {isAdd ? "> Add" : ""}</h1>
          <div className="flex justify-between gap-[0.2rem]">
          <button className='flex gap-[0.25rem] items-center border border-[#89BF2C] px-[1.5rem] py-[0.5rem] rounded-[0.5rem]'><img src={filterIcon} alt="filter"/><p className="text-text text-[0.75rem] font-[600]">Filter</p></button>
          <button
            onClick={openAddForm}
            className="flex gap-[0.25rem] items-center border border-[#89BF2C] px-[1.5rem] py-[0.5rem] rounded-[0.5rem]"
          >
            <img src={addIcon} alt="filter" />
            <p className="text-text text-[0.75rem] font-[600]">
              {isAdd ? "Back" : "Add"}
            </p>
          </button>
          </div>
        </div>
        {isAdd ? (
        <>
        <AddScholarship/>
          {/* <AddInstituteForm /> */}
        </>
      ) : (
        <>
          <CourseTable
            columns={columns}
            data={data}
            mapping={mapping}
          />
        </>
      )}
      </div>
  )
}
