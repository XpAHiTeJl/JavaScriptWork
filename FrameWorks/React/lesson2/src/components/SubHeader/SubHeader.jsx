import React from "react";
import { Link } from "../link";

export const SubHeader = ({ MoreLinks }) => {
  return (
    <>
      {MoreLinks.map((item, i) => (
        <Link
          key={item.id ? item.id : i}
          onClickHandler={item.sendMail}
          href={item.href}
          cn={item.className}
        />
      ))}
    </>
  );
};
