import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";

// props { FINAL_BUTTONS }
//

export const Header = ({ FINAL_BUTTONS }) => {
  const spreadBtns = FINAL_BUTTONS.map((btn, i) => {
    return (
      <Button
        key={btn.id ? btn.id : i}
        onClickHandler={btn.sayHello}
        cn={btn.modificator}
        text={btn.text}
      />
    );
  });

  return (
    <header className="header">
      <Input type="text" cn="inputs" />
      {spreadBtns}
    </header>
  );
};
