import React, { useState } from "react";
import InputField from "../Shared/inputField";

const UniversityStats = ({ onDataChange }) => {
  const [stats, setStats] = useState({
    studentsPerStaff: "",
    fullTimeStudents: "",
    internationalStudentsPercentage: "",
    studentSatisfactionRate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStats((prevStats) => {
      const updatedStats = { ...prevStats, [name]: value };
      onDataChange(updatedStats);
      return updatedStats;
    });
  };

  return (
    <div className="overview-container">
      <h3 className="heading">University Stats</h3>
      <div className="row">
        <InputField
          label="No. of students per staff"
          name="studentsPerStaff"
          placeholder="Add description"
          value={stats.studentsPerStaff}
          onChange={handleChange}
        />
        <InputField
          label="No. of full time Students"
          name="fullTimeStudents"
          value={stats.fullTimeStudents}
          onChange={handleChange}
          placeholder="Add description"
        />
      </div>
      <div className="row">
        <InputField
          label="Percentage of International students"
          name="internationalStudentsPercentage"
          placeholder="Add description"
          value={stats.internationalStudentsPercentage}
          onChange={handleChange}
        />
        <InputField
          label="Student Satisfaction Rate"
          placeholder="Add description"
          name="studentSatisfactionRate"
          value={stats.studentSatisfactionRate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};



export default UniversityStats;
