import React from 'react'
import DashboardCard from './DashboardCard'
import acceptedIcon from '../assets/svg/accepted-orders.svg';
import rejectedIcon from '../assets/svg/rejected-orders.svg';
import productsIcon from '../assets/svg/products.svg';
import revenueIcon from '../assets/svg/revenue.svg';
import graph from '../assets/Graph_1.png';
import Table from './Table';
import ReportCard from './ReportCard';

export default function AdminDashboard() {

    const columns = [
        // { name: "S.NO", enableSorting: true, searchingEnabled: false },
        { name: "NAME", enableSorting: true, searchingEnabled: true },
        { name: "EMAIL", enableSorting: true, searchingEnabled: true },
        { name: "LOCATION", enableSorting: true, searchingEnabled: true },
        { name: "PHONE", enableSorting: true, searchingEnabled: true },
        { name: "DATE JOINED", enableSorting: true, searchingEnabled: true },
      ];

      //   provide the actual table body data
      const data = [
        {
            "S.no": "01",
            "Name": "Edgar Jones",
            "Email": "edgar@example.com",
            "Location": "New York",
            "Phone": "+1234567890",
            "Date Joined": "2023-01-15"
        },
        {
            "S.no": "02",
            "Name": "Samantha Smith",
            "Email": "samantha@example.com",
            "Location": "Los Angeles",
            "Phone": "+1987654321",
            "Date Joined": "2023-03-20"
        },
        {
            "S.no": "03",
            "Name": "John Doe",
            "Email": "john@example.com",
            "Location": "Chicago",
            "Phone": "+1122334455",
            "Date Joined": "2022-11-05"
        },
        {
            "S.no": "04",
            "Name": "Emily Johnson",
            "Email": "emily@example.com",
            "Location": "Houston",
            "Phone": "+1443322110",
            "Date Joined": "2023-06-10"
        }
    ];
    

    const mapping = [
        // 'S.no',
        'Name',
        'Email',
        'Location',
        'Phone',
        'Date Joined'
      ]
  return (
    <div className='flex flex-col gap-[2rem]'>
        <div className='flex flex-col gap-[1.5rem] bg-white p-[2rem] rounded-[1rem] '>
            <h1 className='text-[1.5rem] font-[600]'>Admin Dashboard</h1>
            <div className='flex gap-[1.25rem]'>
                <DashboardCard image={acceptedIcon} value="20,000" label="Total no of user (student)" />
                <DashboardCard image={rejectedIcon} value="5000" label="Total no of application" />
                <DashboardCard image={revenueIcon} value="25,000" label="Total no of courses" />
                <DashboardCard image={productsIcon} value="5000" label="Total no of universities" />
            </div>
        </div>
        <ReportCard label="Total number of students" value="₹ 25000" filterOptions={["October"]}>
            <img className="w-full" src={graph} alt="img" />
        </ReportCard>
        <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-md'>
            <div className="flex justify-between">
                <h1 className='text-text text-[1.5rem] font-[600]'>Recent Students</h1>
            </div>
            <Table columns={columns} data={data} mapping={mapping} />
        </div>
        <div className='flex flex-col gap-[2.5rem] bg-white p-[2rem] rounded-md'>
            <div className="flex justify-between">
                <h1 className='text-text text-[1.5rem] font-[600]'>Recent Educators</h1>
            </div>
            <Table columns={columns} data={data} mapping={mapping} />
        </div>
    </div>
  )
}
