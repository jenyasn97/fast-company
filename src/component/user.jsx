import React from "react";
import Quality from "./quality";
import BookMark from "./bookMark";

export default function User(props) {
  const { users, onDelete: handleDelete, onToggleBookMark } = props;
  return (
    <>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                <Quality user={user} />
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{`${user.rate} /5`}</td>
              <td>
                <BookMark
                  id={user._id}
                  status={user.bookmark}
                  onToggleBookMark={onToggleBookMark}
                />
              </td>
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
    </>
  );
}
