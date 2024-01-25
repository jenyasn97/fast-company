import React from "react";

export default function SearchStatus(props) {
  let { userLength: number } = props;

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
