import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "./UserSlice";

export function EditUser() {
    const { pathname } = useLocation();
    const userId = pathname.replace("/edit-user/", "");

    const user = useSelector((state) =>
        state.users.find((user) => user.id === userId)
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [error, setError] = useState(null);

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const handleClick = () => {
        if (name && email) {
            dispatch(
                userUpdated({
                    id: userId,
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

    return (
        <div className="container">
            <div className="row">
                <h1>Edit user</h1>
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
                        Save user
                    </button>
                </div>
            </div>
        </div>
    );
}