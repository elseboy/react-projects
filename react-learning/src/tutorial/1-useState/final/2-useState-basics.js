import { useState } from "react";

const UserStateBasics = () => {
    const [text, setText] = useState("random title");
    const handleClick = () => {
        if (text === "random title") {
            setText("hello world");
        } else {
            setText("random title");
        }
    };

    return (
        <div className="example">
            <h1>{text}</h1>
            <button type="button" className="btn" onClick={handleClick}>
                change title
            </button>
        </div>
    );
};

export default UserStateBasics;
