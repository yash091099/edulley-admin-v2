import React, { useState } from "react";

export default function AddScholarship () {

    const [data, setData] = useState({
        universityName: "",
        scholarshipName: "",
        courseName: "",
        deadline: "",
        level: "",
        amount: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
          const updatedData = { ...prev, [name]: value };
          onDataChange(updatedData);
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
              onDataChange(updatedData);
              return updatedData;
            });
          };
          reader.readAsDataURL(file);
        }
      };
    
      return (

        <><div className="overview-container">
        <h3 className="heading">Overview</h3>
        <div className="row">
        <div className="col-md-6 formField">
            <label>Scholarship Name</label>
            <input
              type="text"
              name="scholarshipName"
              placeholder="Add Scholarship name"
              value={data.scholarshipName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>University Name</label>
            <input
              type="text"
              name="universityName"
              placeholder="Add university name"
              value={data.universityName}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className="col-md-6 formField">
            <label>Logo</label>
            <>
              <input
                type="text"
                name="logo"
                placeholder="Upload Logo"
                value={data.logo}
                onClick={() => document.querySelector('.file-upload input[type="file"]').click()}
              />
            </>
          </div> */}
    
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Course Name</label>
            <input
              type="text"
              name="courseName"
              placeholder="Add Course Name"
              value={data.courseName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Deadline</label>
            <input
              type="text"
              name="deadline"
              placeholder="Add Deadline"
              value={data.deadline}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Level</label>
            <>
              <input
                type="text"
                name="level"
                placeholder="Chhose Level"
                value={data.level}
                onClick={handleInputChange}
              />
            </>
          </div>
          <div className="col-md-6 formField">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={data.amount}
              placeholder="Add Amount"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="button-container">
      <button style={{backgroundColor:"#FF6477" ,padding:"10px",borderRadius:"4px",color:"#fff",minWidth:"100px"}}  className="saveButton ">
          Save
        </button>
    </div></>
        

      );
}