import React, { useState } from "react";
import Table from "./Table";
import filterIcon from "../assets/svg/filter-icon.svg";
import { useNavigate } from "react-router-dom";
import AddCareer from "./AddCareer";
import addIcon from "../assets/svg/Rectangle.svg";

export default function CareerManagement() {
  const navigate = useNavigate();

  // columns in table | note:- order matters
  const columns = [
    // { name: "S.NO", enableSorting: true, searchingEnabled: false },
    {
      name: "Latest Qualification",
      enableSorting: true,
      searchingEnabled: true,
    },
    { name: "Specialization", enableSorting: true, searchingEnabled: true },
    { name: "Tags", enableSorting: true, searchingEnabled: true },
  ];

  //   provide the actual table body data
  const data = [
    {
      "S.no": 1,
      "Latest Qualification": "98765/23-24",
      "Specialization": "University name Manchester UK",
      "Tags": [
        "Bachelors in Accounting",
        "Bachelors in Marketing",
        "Bachelors in Hospitality",
        "Tourism",
        "Business administration",
        "Bachelors in Human resource Management",
      ]
    },
    {
        "S.no": 1,
        "Latest Qualification": "98765/23-24",
        "Specialization": "University name Manchester UK",
        "Tags": [
          "Bachelors in Accounting",
          "Bachelors in Marketing",
          "Bachelors in Hospitality",
          "Tourism",
          "Business administration",
          "Bachelors in Human resource Management",
        ]
      },
      {
        "S.no": 1,
        "Latest Qualification": "98765/23-24",
        "Specialization": "University name Manchester UK",
        "Tags": [
          "Bachelors in Accounting",
          "Bachelors in Marketing",
          "Bachelors in Hospitality",
          "Tourism",
          "Business administration",
          "Bachelors in Human resource Management",
        ]
      }
  ];

  //   map the data to columns | note:- order matters*
  const mapping = [
    // 'S.no',
    "Latest Qualification",
    "Specialization",
    "Tags",
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
           {isAdd ? "Career path finder Management > Add" : "Applied Student’s"}
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
        <>
          {/* <AddInstituteForm /> */}
          <AddCareer/>
        </>
      ) : (
        <>
          <Table
            columns={columns}
            data={data}
            mapping={mapping}
          />
        </>
      )}



      
    </div>



  );
}
