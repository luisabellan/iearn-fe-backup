import { useState, useEffect } from "react";


//Taken from: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};



export const getDateTime = (date) => {
  const currentDate = new Date(date);

  let formattedDate = currentDate.getDate();
  let formattedHours = currentDate.getHours();
  let formattedMins = currentDate.getMinutes();
  let formattedMonth = currentDate.getMonth() + 1;
  let timeHandler = "am";
  
  if(formattedMonth < 10) {
    formattedMonth = `0${formattedMonth}`;
  }
  if (formattedDate < 10) {
    formattedDate = `0${formattedDate}`;
  }

  // if(formattedHours < 10) {
  //   formattedHours = `0${formattedHours}`;
  // }

  if(formattedHours > 12) {
    formattedHours = formattedHours % 12;
    timeHandler = "pm";
  }

  if(formattedMins < 10) {
    formattedMins = `0${formattedMins}`;
  }

  return `${formattedMonth}/${formattedDate} ${formattedHours}:${formattedMins}${timeHandler}`;
};



//Formatting Numbers with Commas
export const formatNumberWithCommas = (x) => {
  return (
    "$ " +
    x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
};
