import React from "react";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const EventCard = ({ data, renderBtn, borderBottomOnly, animationType }) => {
  return (
    <div
      className={`event-card ${borderBottomOnly ? "borderBottomOnly" : ""}`}
      {...(animationType && { "data-aos": animationType })}
      {...(animationType && { "data-aos-delay": `${data.animationDelay}` })}
    >
      <div className="event-card-image">
        <Image
          src={`${data?.image}`}
          fill
          style={{ objectFit: "cover" }}
          alt={`img-${data.id}`}
        />

        <div className="category-txt">{data?.category}</div>
      </div>

      <div className="event-card-content">
        <h3 className="title-txt">{data?.title}</h3>
        <span className="date-txt">
          <MdOutlineDateRange size={16} /> {data?.date.split('/').join('-')} {data?.time}
        </span>
        <span className="location-txt">
          <IoLocationOutline size={17} />
          {data?.location}
        </span>
        <div className="event-action-sec">
          {data?.isFree ? (
            <div className="free-txt">Free</div>
          ) : (
            <span className="price-txt">
              {data?.currency == "USD" ? "$" : "₹"}
              {data?.price}
            </span>
          )}

          <div>{renderBtn}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
