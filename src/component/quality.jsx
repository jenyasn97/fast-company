import React from "react";

export default function Quality(props) {
  const { user } = props;

  return (
    <>
      {user.qualities.map((qualitie, index) => {
        return (
          <span key={index} className={`badge bg-${qualitie.color} m-1`}>
            {qualitie.name}
          </span>
        );
      })}
    </>
  );
}
