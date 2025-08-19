function calculation(){
    const add = (a: number, b: number): number => a + b;
    const substract = (a: number, b: number): number => a - b;
    const multiply = (a: number, b: number): number => a * b;
    const divide = (a: number, b: number): number => a / b;
    const x = 10;
    const y = 10;
    return(
        <div>
            <h1>Danh sách kết quả</h1>
            <ul>
                <li>{x} + {y} = {add(x, y)}</li>
                <li>{x} - {y} = {substract(x, y)}</li>
                <li>{x} * {y} = {multiply(x, y)}</li>
                <li>{x} / {y} = {divide(x, y)}</li>
            </ul>
        </div>
    );
}
export default calculation;