import React, { useState } from "react";
import api from "./api";
import Users from "./component/users";
import SearchStatus from "./component/searchStatus";

export default function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  function handleDelete(userId) {
    setUsers(
      users.filter((user) => {
        return user._id !== userId;
      })
    );
  }

  function handleToggleBookMark(userId) {
    setUsers(
      users.map((user) => {
        if (user._id === userId) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  }
  return (
    <div>
      <SearchStatus userLength={users.length} />
      <Users
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
        users={users}
      />
    </div>
  );
}
