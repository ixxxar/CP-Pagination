import React, { useState } from "react";
import api from "../API";
import User from "./user";

const Users = (props) => {
  const handleDelete = (userId) => {
    // setUsers((prevState) => prevState.filter((item) => item._id !== userId));
  };

  const renderPhrase = (number) => {
    return number.toString()[number.toString().length - 1] === "1" &&
      (number < 10 || number > 20)
      ? `${number} человек тусанёт с тобой сегодня`
      : (number.toString()[number.toString().length - 1] === "2" ||
          number.toString()[number.toString().length - 1] === "3" ||
          number.toString()[number.toString().length - 1] === "4") &&
        (number < 10 || number > 20)
      ? `${number} человека тусанут с тобой сегодня`
      : `${number} человек тусанёт с тобой сегодня`;
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <User
              key={user._id}
              user={user}
              onDelete={props.onDelete}
              onToggleBookMark={props.onToggleBookmark}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
