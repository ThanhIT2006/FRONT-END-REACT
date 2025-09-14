import React, { useEffect } from "react";

type Callback = (num: number) => void;

function displayNumbers(callback: Callback, delay: number): void {
  let count = 1;
  setInterval(() => {
    callback(count);
    count++;
  }, delay);
}

function DisplayNumbersComponent() {
  useEffect(() => {
    const handleResult: Callback = (num: number) => {
      console.log("Số thứ tự: " + num);
    };

    displayNumbers(handleResult, 1000);
  }, []);

  return <div></div>;
}

export default DisplayNumbersComponent;
