import React from "react";
import User from "./user";

export default function Users(props) {
  const { users, onDelete, onToggleBookMark } = props;

  return (
    <>
      {users.length > 0 && (
        <table className="table table-hover mt-1">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встрелился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col" colSpan="2">
                Избранное
              </th>
            </tr>
          </thead>
          <User
            users={users}
            onDelete={onDelete}
            onToggleBookMark={onToggleBookMark}
          />
        </table>
      )}
    </>
  );
}
