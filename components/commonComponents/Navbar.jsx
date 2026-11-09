"use client";
import Image from "next/image";
import Button from "./Button";
import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import navLogo from "../../public/images/navbar-logo.gif";
import { DashboardWrapper } from "../pagesComponents/Dashboard";

const Navbar = () => {
  const { savedEvents, filters, setOpenSavedDrawer, setFilters } = useContext(DashboardWrapper);

  const [darkTheme, setDarkTheme] = useState(false);

  const onSearchEvent = (e) => {
    setFilters({
      ...filters,
      title: e.target.value.toLowerCase(),
      isFree: false,
      category: "",
    });
  };

  return (
    <div className={`navbar-section nav-scroll-bg`} data-aos="fade-down">
      <div className="nav-section-1">
        <Image src={navLogo} height={60} width={180} alt="nav-logo" />
        <div className="search-input">
          <IoSearch size={18} />
          <input
            type="text"
            value={filters.title}
            placeholder="Search events... (e.g. concerts, tech, workshops)"
            onChange={onSearchEvent}
          />
        </div>
      </div>

      <div className="nav-section-2">
        <label className={`switch ${darkTheme ? "dark-theme" : ""}`}>
          <input
            type="checkbox"
            onChange={(e) => setDarkTheme(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
        <Button
          icon={<LuBookmark size={16} color="#fff" />}
          text={"Saved Events"}
          className="saved-events-btn"
          background={"#5c38f5"}
          textColor={"#fff"}
          borderColor={"#5c38f5"}
          badge={savedEvents.length}
          onClick={() => {
            setOpenSavedDrawer(true);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
