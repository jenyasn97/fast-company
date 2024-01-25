import React from "react";

export default function BookMark(props) {
  let { status, onToggleBookMark, id } = props;
  return (
    <>
      <button className="btn" onClick={() => onToggleBookMark(id)}>
        <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
      </button>
    </>
  );
}
