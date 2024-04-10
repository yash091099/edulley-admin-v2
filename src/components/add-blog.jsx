import React, { useState } from "react";
import "./overviewInstute.css";

const AddBlog = ({ onDataChange }) => {
  const [data, setData] = useState({
    blogHeading: "",
    date: "",
    banner: "",
    quote: "",
    content: "",
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
          onDataChange(updatedData);
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
            <label>Blog Heading</label>
            <input
              type="text"
              name="blogHeading"
              placeholder="Add Blog Heading"
              value={data.blogHeading}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 formField">
            <label>Date</label>
            <>
              <input
                type="text"
                name="date"
                placeholder="Add Date"
                value={data.date}
                onClick={handleInputChange}
              />
            </>
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
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              placeholder="Add Tags"
              value={data.tags}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 formField">
            <label>Content</label>
            <textarea
              name="content"
              value={data.content}
              className="p-2"
              placeholder="Add Content"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 formField">
            <label>Quote</label>
            <textarea
              name="quote"
              className="p-2"
              value={data.quote}
              placeholder="Add Quote"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button  style={{backgroundColor:"#FF6477" ,padding:"10px",borderRadius:"4px",color:"#fff",minWidth:"100px"}}  className="saveButton ">
          Save
        </button>
      </div>
    </>
  );
};

export default AddBlog;
