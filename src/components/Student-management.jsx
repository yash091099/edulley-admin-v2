import React from "react";
import Table from "./Table";
import filterIcon from '../assets/svg/filter-icon.svg';
import { useNavigate } from "react-router-dom";

export default function StudentManagement() {
  const navigate = useNavigate();

// columns in table | note:- order matters
  const columns = [
    // { name: "S.NO", enableSorting: true, searchingEnabled: false },
    { name: "NAME", enableSorting: true, searchingEnabled: true },
    { name: "EMAIL", enableSorting: true, searchingEnabled: true },
    { name: "ADDRESS", enableSorting: true, searchingEnabled: true },
    { name: "PHONE", enableSorting: true, searchingEnabled: true },
    { name: "DATE JIONED", enableSorting: true, searchingEnabled: true },
  ];


//   provide the actual table body data
  const data = [
    {
        "S.no": 1,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },
    {
        "S.no": 2,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },{
        "S.no": 3,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },{
        "S.no": 4,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },{
        "S.no": 5,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },{
        "S.no": 6,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },{
        "S.no": 7,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },{
        "S.no": 8,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },{
        "S.no": 9,
        "Name": "Edgar Jones",
        "Role": "Student",
        "Email": "Ejones@gmail.com",
        "Address": "Bangalore, Karnataka",
        "Phone": "+91-937373638",
        "Date Joined": "Dec 12, 2023"
    },
  ];


//   map the data to columns | note:- order matters*
  const mapping = [
    // 'S.no',
    'Name',
    'Email',
    'Address',
    'Phone',
    'Date Joined'
  ]
  

  return (
      <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-[1rem]'>
        <div className="flex justify-between">
          <h1 className='text-text text-[1.5rem] font-[600]'>Student Management</h1>
          <button className='flex gap-[0.25rem] items-center border border-[#89BF2C] px-[1.5rem] py-[0.5rem] rounded-[0.5rem]'><img src={filterIcon} alt="filter"/><p className="text-text text-[0.75rem] font-[600]">Filter</p></button>
        </div>
        <Table component='Student' columns={columns} data={data} mapping={mapping} fun={()=>(navigate('/dashboard/view-user'))} />
      </div>
  )
}
