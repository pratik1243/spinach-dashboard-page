import { useEffect } from "react";

export const eventsDataJson = [
  {
    id: 1,
    title: "Live Concert 2026",
    category: "Music",
    date: "15/11/2026",
    time: "7:00 PM",
    location: "Mumbai, India",
    price: 49,
    currency: "USD",
    image: "/images/live-concert.jpg",
    tags: ["Music", "Live", "Entertainment"],
    isFree: false,
    isSaved: false,
    animationDelay: 100,
  },
  {
    id: 2,
    title: "Global Tech Summit",
    category: "Tech",
    date: "18/11/2026",
    time: "9:00 AM",
    location: "Dubai, UAE",
    price: 0,
    currency: "USD",
    image: "/images/tech-summit.jpg",
    tags: ["Technology", "Networking", "Innovation"],
    isFree: true,
    isSaved: false,
    animationDelay: 200,
  },
  {
    id: 3,
    title: "Food Carnival",
    category: "Food",
    date: "21/11/2026",
    time: "11:00 AM",
    location: "Delhi, India",
    price: 20,
    currency: "USD",
    image: "/images/food-carnival.jpg",
    tags: ["Food", "Street Food", "Festival"],
    isFree: false,
    isSaved: false,
    animationDelay: 300,
  },
  {
    id: 4,
    title: "Modern Art Exhibition",
    category: "Art",
    date: "22/11/2026",
    time: "10:00 AM",
    location: "Bangalore, India",
    price: 15,
    currency: "USD",
    image: "/images/art-exhibition.jpg",
    tags: ["Art", "Exhibition", "Creative"],
    isFree: false,
    isSaved: false,
    animationDelay: 400,
  },
  {
    id: 5,
    title: "IPL 2026 Finals",
    category: "Sports",
    date: "23/11/2026",
    time: "6:00 PM",
    location: "Ahmedabad, India",
    price: 75,
    currency: "USD",
    image: "/images/ipl-finals.jpg",
    tags: ["Cricket", "Sports", "Live Match"],
    isFree: false,
    isSaved: false,
    animationDelay: 100,
  },
  {
    id: 6,
    title: "React Development Workshop",
    category: "Workshop",
    date: "24/11/2026",
    time: "10:00 AM",
    location: "Pune, India",
    price: 99,
    currency: "USD",
    image: "/images/react-workshop.jpg",
    tags: ["React", "JavaScript", "Development"],
    isFree: false,
    isSaved: false,
    animationDelay: 200,
  },
  {
    id: 7,
    title: "Yoga & Wellness Retreat",
    category: "Health",
    date: "27/11/2026",
    time: "6:00 AM",
    location: "Rishikesh, India",
    price: 0,
    currency: "USD",
    image: "/images/yoga-retreat.jpg",
    tags: ["Yoga", "Meditation", "Wellness"],
    isFree: true,
    isSaved: false,
    animationDelay: 300,
  },
  {
    id: 8,
    title: "Stand-Up Comedy Night",
    category: "Comedy",
    date: "29/11/2026",
    time: "8:00 PM",
    location: "Noida, India",
    price: 25,
    currency: "USD",
    image: "/images/comedy-night.jpg",
    tags: ["Comedy", "Entertainment", "Live Show"],
    isFree: false,
    isSaved: false,
    animationDelay: 400,
  },
];

export const categoryOptions = [
  {
    id: 1,
    label: "Music",
  },
  {
    id: 2,
    label: "Tech",
  },
  {
    id: 3,
    label: "Food",
  },
  {
    id: 4,
    label: "Art",
  },
  {
    id: 5,
    label: "Sports",
  },
  {
    id: 6,
    label: "Workshop",
  },
  {
    id: 7,
    label: "Health",
  },
  {
    id: 8,
    label: "Comedy",
  },
];

export const dateOptions = [
  {
    id: 1,
    label: "Any Time",
  },
  {
    id: 2,
    label: "Last 3 Days",
  },
  {
    id: 3,
    label: "Last Week",
  },
  {
    id: 4,
    label: "Last Month",
  },
  {
    id: 4,
    label: "Custom Date",
  },
];

export const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export function OutsideClickFunc(ref, onClose) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
}
