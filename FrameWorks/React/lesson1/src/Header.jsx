import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1>Мой сайт</h1>
      <button onClick={handleMenuToggle}>Меню</button>
      {isMenuOpen && (
        <nav>
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
