"use client";
import Aos from "aos";
import Image from "next/image";
import React, { createContext, useEffect, useState } from "react";
import { eventsDataJson, formatDate } from "../../utils/eventsData";
import EventCard from "../commonComponents/EventCard";
import FilterDrawer from "../commonComponents/FilterDrawer";
import HeroSection from "../HeroSection";
import EventFilter from "../commonComponents/EventFilter";
import Navbar from "../commonComponents/Navbar";
import Button from "../commonComponents/Button";
import { LuBookmark } from "react-icons/lu";
import Backdrop from "../commonComponents/Backdrop";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdBookmark } from "react-icons/io";
import NoDataComp from "../commonComponents/NoDataComp";
import noDataImg from "../../public/images/empty-box.png";
import SearchInput from "../commonComponents/SearchInput";

export const DashboardWrapper = createContext();

const Dashboard = () => {
  const [eventData, setEventData] = useState(eventsDataJson);
  const [openSavedDrawer, setOpenSavedDrawer] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [savedEvents, setSavedEvents] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    price: 0,
    isFree: false,
    category: "",
    dateType: null,
  });

  const closeSavedDrawer = () => {
    setShowFilter(false);
    setOpenSavedDrawer(false);
  };

  const filteredEvents = eventData.filter((data) => {
    if (filters.isFree) {
      return data.isFree === true;
    } else if (filters.category) {
      return data.category === filters.category;
    } else if (filters.price > 0) {
      return data.price > 0 && data.price < filters.price;
    } else if (filters.dateType) {
      return data.date == formatDate(filters.dateType);
    } else {
      return data.title.toLowerCase().includes(filters.title.toLowerCase());
    }
  });

  function isSavedEventsIncludes(data) {
    return savedEvents.map((el) => el.id).includes(data.id);
  }

  const freeEvent = (value) => {
    setFilters({
      ...filters,
      dateType: null,
      isFree: value,
      price: 0,
      title: "",
      category: "",
    });
  };

  const categoryChange = (value) => {
    setFilters({
      ...filters,
      dateType: null,
      isFree: false,
      title: "",
      category: value,
      price: 0,
    });
  };

  const priceChange = (value) => {
    setFilters({
      ...filters,
      dateType: null,
      isFree: false,
      price: value,
      title: "",
      category: "",
    });
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    Aos.refreshHard();
  }, [filters]);

  const dateTypeChange = (date) => {
    setFilters({
      ...filters,
      dateType: date,
      isFree: false,
      price: 0,
      title: "",
      category: "",
    });
  };

  return (
    <div>
      <DashboardWrapper
        value={{
          filters,
          showFilter,
          setFilters,
          savedEvents,
          setShowFilter,
          setSavedEvents,
          openSavedDrawer,
          closeSavedDrawer,
          setOpenSavedDrawer,
        }}
      >
        <HeroSection />
        <Navbar />
        <div className="events-cotent-sec">
          <div className="event-filter-btns-mobile">
            <SearchInput />
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
            <Button
              icon={<IoFilterSharp size={18} color="#fff" />}
              text={"Apply Filters"}
              className="saved-events-btn"
              background={"#5c38f5"}
              textColor={"#fff"}
              borderColor={"#5c38f5"}
              onClick={() => {
                setShowFilter(true);
              }}
            />
          </div>
          <EventFilter
            onFreeEventChange={(value) => {
              freeEvent(value);
            }}
            onCategoryChange={(value) => {
              categoryChange(value);
            }}
            onPriceChange={(value) => {
              priceChange(value);
            }}
            onDateChange={(date) => {
              dateTypeChange(date);
            }}
          />
          <div
            className="event-card-section"
            key={`${filters.title}-${filters.isFree}-${filters.category}-${filters.price}-${filters.dateType}`}
          >
            {filteredEvents.length === 0 ? (
              <NoDataComp
                emptyIcon={
                  <Image
                    src={noDataImg}
                    height={160}
                    width={160}
                    alt="no-data"
                  />
                }
                text1={"No Events Found Yet!"}
                text2={"Please try again and check events after sometime"}
              />
            ) : (
              filteredEvents.map((data, i) => {
                return (
                  <EventCard
                    key={i}
                    data={data}
                    animationType={"fade"}
                    renderBtn={
                      <Button
                        text={"Saved"}
                        icon={
                          isSavedEventsIncludes(data) ? (
                            <IoMdBookmark size={18} color="#5c38f5" />
                          ) : (
                            <LuBookmark size={18} />
                          )
                        }
                        className={"on-save-btn"}
                        onClick={() => {
                          if (isSavedEventsIncludes(data)) {
                            setSavedEvents(
                              savedEvents.filter((el) => el.id !== data.id)
                            );
                          } else {
                            setSavedEvents([...savedEvents, { ...data }]);
                          }
                        }}
                      />
                    }
                  />
                );
              })
            )}
          </div>
        </div>
        <FilterDrawer />
        <div
          className={`event-filter-drawer-section ${showFilter ? "open" : ""}`}
        >
          <div className="filter-head-sec">
            <h3>Events Filters</h3>
            <div role="button" className="close-btn" onClick={closeSavedDrawer}>
              <IoMdClose size={23} />
            </div>
          </div>
          <EventFilter
            onFreeEventChange={(value) => {
              freeEvent(value);
            }}
            onCategoryChange={(value) => {
              categoryChange(value);
            }}
            onPriceChange={(value) => {
              priceChange(value);
            }}
            onDateChange={(date) => {
              dateTypeChange(date);
            }}
          />
        </div>
        <Backdrop
          open={openSavedDrawer || showFilter}
          onClose={closeSavedDrawer}
        />
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
