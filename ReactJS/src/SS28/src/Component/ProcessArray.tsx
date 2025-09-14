type Callback = (element: number) => void;

function processArray(arr: number[], callback: Callback): void {
  arr.forEach((num, index) => {
    setTimeout(() => {
      callback(num);
    }, 1000 * (index + 1));
  });
}

function ProcessArrayComponent() {
  const handleResult: Callback = (num: number) => {
    console.log("Phần tử thứ: " + num);
  };

  const numbers: number[] = [1, 2, 3, 4, 5];
  processArray(numbers, handleResult);

  return <div></div>;
}

export default ProcessArrayComponent;
