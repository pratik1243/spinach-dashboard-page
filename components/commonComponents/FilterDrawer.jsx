import React, { useContext } from "react";
import Button from "./Button";
import EventCard from "./EventCard";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { DashboardWrapper } from "../pagesComponents/Dashboard";

const FilterDrawer = () => {
  const { openSavedDrawer, savedEvents, closeSavedDrawer, setSavedEvents } =
    useContext(DashboardWrapper);
  return (
    <div className={`filter-drawer-section ${openSavedDrawer ? "open" : ""}`}>
      <div className="saved-filter-head">
        <h3>
          <IoMdBookmark size={23} color="#5c38f5" /> Saved Events{" "}
          <span
            className={`length-badge ${
              savedEvents?.length > 10 ? "font-sm" : ""
            }`}
          >
            {savedEvents?.length}
          </span>
        </h3>

        <div role="button" className="close-btn" onClick={closeSavedDrawer}>
          <IoMdClose size={23} />
        </div>
      </div>
      <div className="saved-items-sec">
        {savedEvents?.map((data, i) => {
          return (
            <EventCard
              key={i}
              data={data}
              borderBottomOnly
              renderBtn={
                <Button
                  icon={<MdOutlineDelete size={20} />}
                  background={"#ff000026"}
                  textColor={"#ee4848"}
                  borderColor={"#ff00000f"}
                  circleBtn
                  onClick={() => {
                    setSavedEvents((prev) => {
                      return prev.filter((el) => el.id !== data.id);
                    });
                  }}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterDrawer;
