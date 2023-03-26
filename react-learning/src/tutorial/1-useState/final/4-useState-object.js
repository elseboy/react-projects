import React, { useState } from "react";

function UserStateObject() {
    const [person, setPerson] = useState({
        name: "joma",
        age: "24",
        message: "a punk",
    });
    console.log(person);

    // const [name, setName] = useState('peter')
    // const [age, setAge] = useState('25')
    // const [message, setMessage] = useState('this is a fake message')

    const changeMessage = () => {
        setPerson({ ...person, message: "Emma" });
        // setAge(25)
        // setName("Emma")
        // setMessage('hello there')
    };
    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button type="button" className="btn" onClick={changeMessage}>
                change
            </button>
        </>
    );
}

export default UserStateObject;
