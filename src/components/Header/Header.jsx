import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import './Header.scss'; // Импортируйте стили для хедера

const Header = ({ cartCount }) => { // Получаем cartCount через пропсы
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Авторизация</Link>
        <Link to="/register" className="nav-link">Регистрация</Link>
        <Link to="/main" className="nav-link">Список товаров</Link>
        <div className="cart">
          Корзина: {cartCount} шт
        </div>
      </nav>
    </header>
  );
};

export default Header;