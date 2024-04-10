import React, { useState } from "react";

const AddCourse = () => {
  const [data, setData] = useState({
    universityName: "",
    courseName: "",
    Level: "",
    logo: "",
    banner: "",
    modules: "",
    requirement: "",
    overview: "",
    fee:"",
    duration:"",
    deadline:"",
    applicationFee:"",
    intakes:"",
    universityName:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      const updatedData = { ...prev, [name]: value };
      onDataChange(updatedData);
      return updatedData;
    });
  };
  return (
    <>
      <div className="overview-container">
        <h3 className="heading">Overview</h3>
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
            <label>University Name</label>
            <input
              type="text"
              name="universityName"
              placeholder="Add university name"
              value={data.universityName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Banner Image</label>
            <>
              <input
                type="text"
                name="banner"
                placeholder="Upload Banner"
                value={data.banner}
                onClick={() =>
                  document
                    .querySelector('.file-upload input[type="file"]')
                    .click()
                }
              />
            </>
          </div>
          <div className="col-md-6 formField">
            <label>Logo</label>
            <>
              <input
                type="text"
                name="logo"
                placeholder="Upload Logo"
                value={data.logo}
                onClick={() =>
                  document
                    .querySelector('.file-upload input[type="file"]')
                    .click()
                }
              />
            </>
          </div>
          {/* <div className="col-md-6 formField">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Select Country"
              value={data.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Select City"
              value={data.city}
              onChange={handleInputChange}
            />
          </div> */}
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Level</label>
            <input
              type="text"
              name="brochure"
              value={data.Level}
              placeholder="Add Brochure"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 formField">
            <label>Overview</label>
            <textarea
              name="overview"
              value={data.overview}
              className="p-2"
              placeholder="Add Overview"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 formField">
            <label>Modules</label>
            <textarea
              name="modules"
              className="p-2"
              value={data.modules}
              placeholder="Add Modules"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 formField">
            <label>Requirements</label>
            <textarea
              name="requirement"
              className="p-2"
              value={data.requirement}
              placeholder="Add Requirements"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="overview-container">
        <h3 className="heading">Unique University Info</h3>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Fee</label>
            <input
              type="text"
              name="fee"
              placeholder="Add Fee Range"
              value={data.fee}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="Course Duration"
              value={data.duration}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Application Deadline</label>
            <input
              type="text"
              name="deadline"
              placeholder="Add Application Deadline"
              value={data.deadline}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Application Fee</label>
            <input
              type="text"
              name="applicationFee"
              placeholder="Add Application Fee"
              value={data.applicationFee}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 formField">
            <label>Upcoming Intakes</label>
            <input
              type="text"
              name="intakes"
              placeholder="Add Upcoming Intakes"
              value={data.intakes}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Mode of study</label>
            <input
              type="text"
              name="universityName"
              placeholder="Select Mode of study"
              value={data.universityName}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="button-container">
        <button  style={{backgroundColor:"#FF6477" ,padding:"10px",borderRadius:"4px",color:"#fff",minWidth:"100px"}}  className="saveButton">Save</button>
      </div>
    </>
  );
};

export default AddCourse;
