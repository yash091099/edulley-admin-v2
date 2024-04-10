import React, { useState } from "react";
import Table from "./Table";
import filterIcon from "../assets/svg/filter-icon.svg";
import { useNavigate } from "react-router-dom";
import addIcon from "../assets/svg/Rectangle.svg";
import AddBlog from "./add-blog";

export default function BlogManagement() {
  const navigate = useNavigate();

  // columns in table | note:- order matters
  const columns = [
    // { name: "S.NO", enableSorting: true, searchingEnabled: false },
    { name: "Date", enableSorting: true, searchingEnabled: true },
    { name: "Blog Heading", enableSorting: true, searchingEnabled: true },
    { name: "Tags", enableSorting: true, searchingEnabled: true },
  ];

  //   provide the actual table body data
  const data = [
    {
      "S.no": 1,
      Date: "23-02-2024",
      "Blog Heading":
        "Transforming the landscape of Education with revolutionary technology",
      "Tags": [
        "Study in USA",
        "IELTS",
        "Lorem",
        "Ipsum",
        "Collaborate",
        "Reading",
      ],
    },
    {
        "S.no": 1,
        Date: "23-02-2024",
        "Blog Heading":
          "Transforming the landscape of Education with revolutionary technology",
        "Tags": [
          "Study in USA",
          "IELTS",
          "Lorem",
          "Ipsum",
          "Collaborate",
          "Reading",
        ],
      },
      {
        "S.no": 1,
        Date: "23-02-2024",
        "Blog Heading":
          "Transforming the landscape of Education with revolutionary technology",
        "Tags": [
          "Study in USA",
          "IELTS",
          "Lorem",
          "Ipsum",
          "Collaborate",
          "Reading",
        ],
      },
      {
        "S.no": 1,
        Date: "23-02-2024",
        "Blog Heading":
          "Transforming the landscape of Education with revolutionary technology",
        "Tags": [
          "Study in USA",
          "IELTS",
          "Lorem",
          "Ipsum",
          "Collaborate",
          "Reading",
        ],
      },
  ];

  //   map the data to columns | note:- order matters*
  const mapping = [
    // 'S.no',
   
    "Date",
    "Blog Heading",
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
           {isAdd ? "Blog Management > Add" : "Applied Student’s"}
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
          <AddBlog/>
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
