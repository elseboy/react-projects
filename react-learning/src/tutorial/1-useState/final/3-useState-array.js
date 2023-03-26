import React from "react";
import { data } from "../../../data";

function UserStateArray() {
    const [people, setPeople] = React.useState(data);
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            <button type="button" className="btn" onClick={() => setPeople([])}>
                clear items
            </button>
        </>
    );
}

export default UserStateArray;
