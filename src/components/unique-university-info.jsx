import React, { useState } from "react";

const UniqueUniversityInfo = ({ onDataChange }) => {
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setImages((prevImages) => {
          const updatedImages = { ...prevImages, [key]: imageData };
          onDataChange(updatedImages);
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="overview-container">
      <h3 className="heading">Unique University Info</h3>
      <div className="row">
        <div className="col-md-6 formField">
          <label>Image</label>
          <>
            <input
              type="text"
              name="banner"
              placeholder="Upload Banner"
              value={images.image1}
              onClick={() =>
                document
                  .querySelector('.file-upload input[type="file"]')
                  .click()
              }
            />
          </>
        </div>
        <div className="col-md-6 formField">
          <label>Image 2</label>
          <>
            <input
              type="text"
              name="banner"
              placeholder="Upload Banner"
              value={images.image2}
              onClick={() =>
                document
                  .querySelector('.file-upload input[type="file"]')
                  .click()
              }
            />
          </>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 formField">
          <label>Image 3</label>
          <>
            <input
              type="text"
              name="banner"
              placeholder="Upload Banner"
              value={images.image3}
              onClick={() =>
                document
                  .querySelector('.file-upload input[type="file"]')
                  .click()
              }
            />
          </>
        </div>
        <div className="col-md-6 formField">
          <label>Image 4</label>
          <>
            <input
              type="text"
              name="banner"
              placeholder="Upload Banner"
              value={images.image4}
              onClick={() =>
                document
                  .querySelector('.file-upload input[type="file"]')
                  .click()
              }
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default UniqueUniversityInfo;
