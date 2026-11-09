import React, { useContext, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { ImPriceTags } from "react-icons/im";
import { FaGift } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import { categoryOptions, dateOptions } from "../../utils/eventsData";
import { DashboardWrapper } from "../pagesComponents/Dashboard";
import DatePicker from "./DatePicker";

const EventFilter = ({
  onFreeEventChange,
  onCategoryChange,
  onPriceChange,
  onDateChange,
}) => {
  const { filters, setFilters } = useContext(DashboardWrapper);
  return (
    <div className="event-filter-section">
      <div
        className="event-filter-action-sec"
        data-aos="fade"
        data-aos-delay="100"
      >
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
          clearValue={() => {
            setFilters({ ...filters, category: "" });
          }}
        />
      </div>
      <div
        className="event-filter-action-sec"
        data-aos="fade"
        data-aos-delay="100"
      >
        <div className="inner-action-sec">
          <FaCalendarAlt />
          <span className="action-txt">Date</span>
        </div>
        <DatePicker
          value={filters.dateType}
          onChange={(data) => {
            onDateChange(data);
          }}
          clearValue={() => {
            setFilters({ ...filters, dateType: "" });
          }}
        />
      </div>
      <div
        className="event-filter-action-sec"
        data-aos="fade"
        data-aos-delay="100"
      >
        <div className="inner-action-sec">
          <ImPriceTags />
          <span className="action-txt">Price Range $(0-100)</span>
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
      <div
        className="event-filter-action-sec"
        data-aos="fade"
        data-aos-delay="100"
      >
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
