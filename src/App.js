import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import { UserList } from "./features/users/UserList";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />}>
          </Route>

          <Route path="/add-user" element={<AddUser />} >
          </Route>

          <Route path="/edit-user/:id" element={<EditUser />} >
          </Route>

        </Routes>
      </div>
    </Router>
  );
}