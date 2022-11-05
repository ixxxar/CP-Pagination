import React, { useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((item) => item._id !== userId));
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
      {users.length === 0 && (
        <h3 className="m-2">
          <span className="badge bg-danger">
            Никто не тусанёт с тобой сегодня
          </span>
        </h3>
      )}
      {users.length > 0 && (
        <h3 className="m-2">
          <span className="badge bg-primary">{renderPhrase(users.length)}</span>
        </h3>
      )}
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      className={"badge m-2 bg-" + quality.color}
                      key={user._id}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} / 5</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
