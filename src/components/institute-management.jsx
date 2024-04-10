import React, { useState } from "react";
import filterIcon from "../assets/svg/filter-icon.svg";
import { useNavigate } from "react-router-dom";
import addIcon from "../assets/svg/Rectangle.svg";
import AddInstituteForm from "./AddInstitute";
import InstitutionTable from "./institution-table";

export default function InstituteManagement() {
  const navigate = useNavigate();

  // columns in table | note:- order matters
  const columns = [
    // { name: "S.NO", enableSorting: true, searchingEnabled: false },
    { name: "NAME", enableSorting: true, searchingEnabled: true },
    { name: "EMAIL", enableSorting: true, searchingEnabled: true },
    { name: "ADDRESS", enableSorting: true, searchingEnabled: true },
    { name: "PHONE", enableSorting: true, searchingEnabled: true },
    { name: "ACCREDITATION", enableSorting: true, searchingEnabled: true },
  ];

  //   provide the actual table body data
  const data = [
    {
      "S.no": 1,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 2,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 3,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 4,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 5,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 6,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 7,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 8,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
    {
      "S.no": 9,
      Name: "DY Institute",
      Email: "Ejones@gmail.com",
      Address: "Bangalore, Karnataka",
      Phone: "+91-937373638",
      Accreditation: "NASCOM",
    },
  ];

  //   map the data to columns | note:- order matters*
  const mapping = [
    // 'S.no',
    "Name",
    "Email",
    "Address",
    "Phone",
    "Accreditation",
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
          Institute Management {isAdd ? "> Add" : ""}
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
          <AddInstituteForm />
        </>
      ) : (
        <>
          <InstitutionTable
            columns={columns}
            data={data}
            mapping={mapping}
          />
        </>
      )}
    </div>
  );
}
