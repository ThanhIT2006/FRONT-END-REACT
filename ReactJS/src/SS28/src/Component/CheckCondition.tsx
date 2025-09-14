import React, { useEffect } from "react";

type Callback = (result: boolean) => void;

function checkCondition(condition: boolean, callback: Callback): void {
  setTimeout(() => {
    callback(condition);
  }, 1000);
}

function CheckConditionComponent() {
  useEffect(() => {
    const display: Callback = (result: boolean) => {
      console.log("Điều kiện trả về: " + result);
    };

    checkCondition(true, display);

    checkCondition(false, display);
  }, []);

  return <div></div>;
}

export default CheckConditionComponent;
