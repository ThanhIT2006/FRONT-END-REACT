import React from 'react'

function Timer() {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h2>Bộ đếm thời gian</h2>
            <p>{count}</p>
        </div>
    )
}

export default Timer
