import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userDeleted } from "./UserSlice";

export function UserList() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log('all', users);
    return (
        <div className="container">
            <div className="row">
                <h1>Redux CRUD User app</h1>
            </div>
            <div className="row">
                <div className="two columns">
                    <button className="button-primary" >Load users</button>
                </div>
                <div className="two columns">
                    <Link to={'/add-user'}>
                        <button className="button-primary">Add user</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ id, name, email }, i) => (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <button onClick={() => dispatch(userDeleted({
                                        id: id,
                                    }))}>Delete</button>
                                    <Link to={`/edit-user/${id}`}>
                                        <button>Edit</button>
                                    </Link>     </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}