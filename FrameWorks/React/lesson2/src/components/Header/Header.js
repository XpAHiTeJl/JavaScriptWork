import React from 'react';
import { Button } from '../Button';

// props { FINAL_BUTTONS }
//

export const Header = ({ FINAL_BUTTONS, children }) => {
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

    return <header className="header">{spreadBtns}</header>;
};
