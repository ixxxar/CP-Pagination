import React, { useState } from "react";
import Users from "./compnents/Users";
import SearchStatus from "./compnents/searchStatus";
import api from "./API";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookmark = (id) => {
    const newUsers = [...users];
    const userIndex = newUsers.findIndex((user) => user._id === id);
    newUsers[userIndex].bookmark = !newUsers[userIndex].bookmark;
    setUsers(newUsers);
  };

  return (
    <div>
      <SearchStatus number={users.length} />
      {users.length !== 0 && (
        <Users
          users={users}
          onDelete={handleDelete}
          onToggleBookmark={handleToggleBookmark}
        />
      )}
    </div>
  );
};

export default App;
