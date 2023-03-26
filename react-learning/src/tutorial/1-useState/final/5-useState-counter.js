import React, { useState } from "react";

function UserStateCounter() {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    };
    return (
        <>
            <section style={{ margin: "4rem 0" }}>
                <h2>regular counter</h2>
                <h2>{value}</h2>
                <button className="btn" onClick={() => setValue(value - 1)}>
                    decrease
                </button>
                <button className="btn" onClick={reset}>reset</button>
                <button className="btn" onClick={() => setValue(value + 1)}>
                    {" "}
                    increase
                </button>
            </section>
        </>
    );
}

export default UserStateCounter;
