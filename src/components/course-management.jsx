import React, { useState } from "react";
import Table from "./Table";
import filterIcon from "../assets/svg/filter-icon.svg";
import { useNavigate } from "react-router-dom";
import addIcon from "../assets/svg/Rectangle.svg";
import AddCourse from "./AddCourse";
import CourseTable from "./CourseTable";

export default function CourseManagement() {
  const navigate = useNavigate();

  // columns in table | note:- order matters
  const columns = [
    // { name: "S.NO", enableSorting: true, searchingEnabled: false },
    { name: "NAME", enableSorting: true, searchingEnabled: true },
    { name: "DURATION", enableSorting: true, searchingEnabled: true },
    { name: "MAJOR", enableSorting: true, searchingEnabled: true },
    { name: "LAST DATE", enableSorting: true, searchingEnabled: true },
    { name: "SCHOLARSHIP", enableSorting: true, searchingEnabled: true },
  ];

  //   provide the actual table body data
  const data = [
    {
      "S.no": 1,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 2,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 3,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 4,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 5,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 6,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 7,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 8,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
    {
      "S.no": 9,
      "Course Name": "Maths 101",
      "Institute Name": "Institute Name",
      Duration: "2 Years",
      Major: "Mathematics",
      "Last Date": "March 15, 2024",
      Scholarship: "NASCOM",
    },
  ];

  //   map the data to columns | note:- order matters*
  const mapping = [
    // 'S.no',
    "Course Name",
    "Duration",
    "Major",
    "Last Date",
    "Scholarship",
  ];

  const [isAdd, setIsAdd] = useState(false);

  //   addForm
  const openAddForm = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div className="flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-[1rem]">
      <div className="flex justify-between">
        <h1 className="text-text text-[1.5rem] font-[600]">
          Course Management
        </h1>
        <div className="flex justify-between gap-[0.2rem]">
        <button className="flex gap-[0.25rem] items-center border border-[#89BF2C] px-[1.5rem] py-[0.5rem] rounded-[0.5rem]">
          <img src={filterIcon} alt="filter" />
          <p className="text-text text-[0.75rem] font-[600]">Filter</p>
        </button>
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
        <><AddCourse/></>
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
  );
}
