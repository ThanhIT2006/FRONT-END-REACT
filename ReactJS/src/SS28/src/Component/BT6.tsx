import React, { useEffect } from "react";

type Callback = () => void;

function task1(next: Callback): void {
  setTimeout(() => {
    console.log("Task 1 được thực thi");
    next();
  }, 1000);
}

function task2(next: Callback): void {
  setTimeout(() => {
    console.log("Task 2 được thực thi");
    next();
  }, 1500);
}

function task3(next: Callback): void {
  setTimeout(() => {
    console.log("Task 3 được thực thi! Hoàn thành");
    next();
  }, 2000);
}

function TaskSequence() {
  useEffect(() => {
    task1(() => {
      task2(() => {
        task3(() => {
          console.log("Toàn bộ task đã xong ✅");
        });
      });
    });
  }, []);

  return <div></div>;
}

export default TaskSequence;
