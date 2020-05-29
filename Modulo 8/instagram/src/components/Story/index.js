import React from "react";

export default function Story({ story = {} }) {
  const { user_thumb, user_name } = story;
  return (
    <a href={`/${user_name}`} className="user__thumb">
      <span className="user__thumb__wrapper">
        <img src={user_thumb} alt={user_name} />
      </span>
    </a>
  );
}
