type Callback = (result: number) => void;

function calculate(a: number, b: number, callback: Callback): void {
  const sum = a + b;
  callback(sum);
}
function Calculate() {
  const result = (result: number) => {
    console.log("Kết quả là: " + result);
  };
  const a = 10;
  const b = 10;
  calculate(a, b, result);
  return <div></div>;
}
export default Calculate;
       