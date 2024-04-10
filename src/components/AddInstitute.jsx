import React, { useState } from "react";
import Overview from "./overviewInstute";
import UniversityStats from "./university-stats";
import Ranking from "./ranking";
import UniqueUniversityInfo from "./unique-university-info";
// import "./addInstitute.css";

const AddInstituteForm = () => {
  const [overviewData, setOverviewData] = useState({});
  const [universityStatsData, setUniversityStatsData] = useState({});
  const [uniqueUniversityInfoData, setUniqueUniversityInfoData] = useState({});
  const [rankingData, setRankingData] = useState({});

  const handleDataChange = (type) => (newData) => {
    switch (type) {
      case "overview":
        setOverviewData(newData);
        break;
      case "stats":
        setUniversityStatsData(newData);
        break;
      case "uniqueInfo":
        setUniqueUniversityInfoData(newData);
        break;
      case "ranking":
        setRankingData(newData);
        break;
      default:
        console.error("Unexpected component type:", type);
    }
  };

  const saveAllData = (event) => {
    event.preventDefault();
    const allData = {
      overviewData,
      universityStatsData,
      uniqueUniversityInfoData,
      rankingData,
    };
    console.log(allData);
    // Post allData to server or handle accordingly
  };

  return (
    <>
      <Overview onDataChange={handleDataChange("overview")} />
      <UniversityStats onDataChange={handleDataChange("stats")} />
      <UniqueUniversityInfo onDataChange={handleDataChange("uniqueInfo")} />
      <Ranking onDataChange={handleDataChange("ranking")} />
      <div className="button-container">
        <button  style={{backgroundColor:"#FF6477" ,padding:"10px",borderRadius:"4px",color:"#fff",minWidth:"100px"}}  className="saveButton" onClick={saveAllData}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddInstituteForm;
