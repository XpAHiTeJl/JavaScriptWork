import React from "react";

export const Input = ({ cn, onClickHandler }) => {
  return <input onClick={onClickHandler} className={`${cn}`} />;
};
