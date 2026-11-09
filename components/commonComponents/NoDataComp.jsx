import React, { useContext } from "react";
import Button from "./Button";
import { DashboardWrapper } from "../pagesComponents/Dashboard";

const NoDataComp = ({ emptyIcon, text1, text2, buttonText, customClass }) => {
  const { closeSavedDrawer } = useContext(DashboardWrapper);
  return (
    <div className={`no-data-comp-section ${customClass}`} data-aos="fade">
      {emptyIcon}
      <h2>{text1}</h2>
      <p>{text2}</p>
      {buttonText && (
        <Button
          text={buttonText}
          className="saved-events-btn"
          background={"#5c38f5"}
          textColor={"#fff"}
          borderColor={"#5c38f5"}
          onClick={closeSavedDrawer}
        />
      )}
    </div>
  );
};

export default NoDataComp;
