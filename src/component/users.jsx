import React, { useState } from "react";
import api from "../api";

export default function Users() {
  const [users, setUsers] = useState(api.users.fetchAll());

  function handleDelete(userId) {
    setUsers(
      users.filter((user) => {
        return user._id !== userId;
      })
    );
  }

  function renderPhrase(number) {
    let valuePeopleText = `${number} человек отдохнeт с тобой сегодня`;
    let classBadge = `fs-3 badge bg-primary`;

    if (number <= 4 && number > 1) {
      valuePeopleText = `${number} человека отдохнут с тобой сегодня`;
    } else if (number < 1) {
      valuePeopleText = `Никто с тобой не отдохнет`;
      classBadge = classBadge.replace("bg-primary", "bg-danger");
    }
    return <h1 className={classBadge}>{valuePeopleText}</h1>;
  }

  return (
    <>
      {users.length === 0 ? (
        renderPhrase(users.length)
      ) : (
        <>
          {renderPhrase(users.length)}
          <table className="table table-hover mt-1">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встрелился, раз</th>
                <th scope="col" colSpan="2">
                  Оценка
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>
                      {user.qualities.map((qualitie, index) => {
                        return (
                          <span
                            key={index}
                            className={`badge bg-${qualitie.color} m-1`}
                          >
                            {qualitie.name}
                          </span>
                        );
                      })}
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{`${user.rate} /5`}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
