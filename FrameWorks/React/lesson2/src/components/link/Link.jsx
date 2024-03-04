import React from "react";

export const Link = ({ cn, onClickHandler, href }) => {
  return (
    <a href={href} onClick={onClickHandler}>
      <i className={`${cn}`}></i>
    </a>
  );
};
