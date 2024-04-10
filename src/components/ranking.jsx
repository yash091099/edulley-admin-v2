import React from "react";

const Ranking = () => {
  return (
    <div className="overview-container">
      <h3 className="heading">Ranking</h3>
      <div className="row">
        <div className="col-md-6 formField">
          <label>Logo</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="file-upload"
          />
        </div>
        <div className="col-md-6 formField">
          <label>Name</label>
          <input
            type="text"
            placeholder="Add description"
            className="text-input"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 formField">
          <label>Rank</label>
          <input
            type="text"
            placeholder="Add description"
            className="text-input"
          />
        </div>
      </div>
      <h3 className="AddMore">Add more in Ranking</h3>
    </div>
  );
};

export default Ranking;
