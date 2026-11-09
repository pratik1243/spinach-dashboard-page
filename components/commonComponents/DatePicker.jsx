"use client";
import dynamic from "next/dynamic";
import { enGB } from "date-fns/locale";
import { formatDate, OutsideClickFunc } from "../../utils/eventsData";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Calendar = dynamic(
  () => import("react-date-range").then((module) => module.Calendar),
  { ssr: false }
);

const DatePicker = ({ value, onChange, clearValue }) => {
  const divRef = useRef();
  const [open, setOpen] = useState(false);

  OutsideClickFunc(divRef, () => {
    setOpen(false);
  });

  return (
    <div className="date-picker-sec" ref={divRef}>
      <div className="date-value" onClick={() => setOpen(!open)}>
        {value ? formatDate(value) : "Select Date"}{" "}
        {value && (
          <div
            role="button"
            onClick={() => {
              clearValue();
              setOpen(false);
            }}
          >
            <IoMdClose size={17} />
          </div>
        )}
      </div>
      {open && (
        <div className="date-picker-box">
          <Calendar
            date={value}
            onChange={(date) => {
              setOpen(false);
              onChange(date);
            }}
            locale={enGB}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
