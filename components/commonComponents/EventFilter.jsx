import React, { useContext, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { ImPriceTags } from "react-icons/im";
import { FaGift } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import { categoryOptions, dateOptions } from "../../utils/eventsData";
import { DashboardWrapper } from "../pagesComponents/Dashboard";

const EventFilter = ({
  onFreeEventChange,
  onCategoryChange,
  onPriceChange,
}) => {
  const { filters } = useContext(DashboardWrapper);
  return (
    <div className="event-filter-section">
      <div className="event-filter-action-sec">
        <div className="inner-action-sec">
          {" "}
          <RiLayoutMasonryFill />
          <span className="action-txt">Category</span>
        </div>

        <Dropdown
          value={filters.category}
          placeholder={"All Category"}
          options={categoryOptions}
          onChange={(data) => onCategoryChange(data.label)}
        />
      </div>
      <div className="event-filter-action-sec">
        <div className="inner-action-sec">
          <FaCalendarAlt />
          <span className="action-txt">Date</span>
        </div>

        <Dropdown
          value={filters.dateType}
          placeholder={"Any Date"}
          options={dateOptions}
          onChange={(data) => {}}
        />
      </div>
      <div className="event-filter-action-sec">
        <div className="inner-action-sec">
          <ImPriceTags />
          <span className="action-txt">Price Range</span>
        </div>

        <div className="range-slider">
          <input
            type="range"
            min="0"
            max="100"
            value={filters.price}
            onChange={(e) => onPriceChange(e.target.value)}
          />
        </div>
      </div>
      <div className="event-filter-action-sec">
        <div className="inner-action-sec">
          <FaGift />
          <span className="action-txt">Free Events Only </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={filters.isFree}
            onChange={(e) => onFreeEventChange(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default EventFilter;
