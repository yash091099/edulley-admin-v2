import React, { useState } from "react";
import "./overviewInstute.css";

const Overview = ({ onDataChange }) => {
  const [data, setData] = useState({
    universityName: "",
    brochure: "",
    logo: "",
    banner: "",
    country: "",
    city: "",
    overview: "",
    requirements: "",
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
    <div className="overview-container">
      <h3 className="heading">Overview</h3>
      <div className="row">
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
        <div className="col-md-6 formField">
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
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 formField">
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
              onClick={() => document.querySelector('.file-upload input[type="file"]').click()}
            />
          </>
        </div>
        <div className="col-md-6 formField">
          <label>Brochure</label>
          <input
            type="text"
            name="brochure"
            value={data.brochure}
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
          <label>Admission Requirements</label>
          <textarea
            name="requirements"
            className="p-2"
            value={data.requirements}
            placeholder="Add Admission Requirements"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
