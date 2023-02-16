import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./UserSlice";
import { useSelector } from "react-redux";

export function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const usersAmount = useSelector((state) => state.users.length);

    const handleClick = () => {
        if (name && email) {
            dispatch(
                userAdded({
                    id: String(usersAmount + 1),
                    name,
                    email,
                })
            );

            setError(null);
            navigate("/");
        } else {
            setError("Fill in all fields");
        }

        setName("");
        setEmail("");
    };

    return (<div className="container">
        <div className="row">
            <h1>Add user</h1>
        </div>
        <div className="row">
            <div className="three columns">
                <label htmlFor="nameInput">Name</label>
                <input
                    className="u-full-width"
                    type="text"
                    placeholder="test@mailbox.com"
                    id="nameInput"
                    onChange={handleName}
                    value={name}
                />
                <label htmlFor="emailInput">Email</label>
                <input
                    className="u-full-width"
                    type="email"
                    placeholder="test@mailbox.com"
                    id="emailInput"
                    onChange={handleEmail}
                    value={email}
                />
                {error && error}
                <button onClick={handleClick} className="button-primary">
                    Add user
                </button>
            </div>
        </div>
    </div>

    )
};
