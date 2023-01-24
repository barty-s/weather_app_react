import React from "react";

export default function FormattedDate(props) {
  let date = new Date().getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 0) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }

  let months = [
    "January",
    "February",
    "March",
    "Apirl",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[new Date().getMonth()];
  let year = new Date().getFullYear();
  return (
    <div>
      {day} {date} {month} {year}, {hours}:{minutes}
    </div>
  );
}
