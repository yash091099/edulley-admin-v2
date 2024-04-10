import React, { useState } from "react";
import "./overviewInstute.css";

const AddCareer = ({ onDataChange }) => {
  const [data, setData] = useState({
    latestQualification: "",
    specialization: "",
    courseName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      const updatedData = { ...prev, [name]: value };
    //   onDataChange(updatedData);
      return updatedData;
    });
  };

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileData = e.target.result;
        setData((prev) => {
          const updatedData = { ...prev, [key]: fileData };
        //   onDataChange(updatedData);
          return updatedData;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="overview-container">
        <h3 className="heading">Overview</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Latest Qualification</label>
            <input
              type="text"
              name="latestQualification"
              placeholder="Add Qualifcation name"
              value={data.latestQualification}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Specialization</label>
            <>
              <input
                type="text"
                name="specialization"
                placeholder="Add text"
                value={data.specialization}
                onClick={handleInputChange}
              />
            </>
          </div>
        </div>
        <div className="row">
        <div className="col-md-12 formField">
            <label>Course Name</label>
            <>
              <input
                type="text"
                name="courseName"
                placeholder="Add courses and press enter"
                value={data.courseName}
                onClick={handleInputChange}
              />
            </>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button  style={{backgroundColor:"#FF6477" ,padding:"10px",borderRadius:"4px",color:"#fff",minWidth:"100px"}}  className="saveButton">
          Save
        </button>
      </div>
    </>
  );
};

export default AddCareer;
