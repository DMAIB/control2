import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Auth.scss'; // Импортируем стили
import googleImg from './G.png';
import facebookImg from './F.png';

const Auth = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === data.email && user.password === data.password) {
      navigate('/main');
    } else {
      alert('Invalid credentials');
    }
  };

  

  return (
    <div className="auth-container">
      <h2>Авторизация</h2>
      <p>У вас еще нет аккаунта ? <a href="/register" class="register-link">Зарегистрируйтесь</a></p>
      
      <div className="social-buttons">
        <button className="social-button google-button">
        <img src={googleImg} alt="Google" /> Google
        </button>
        <button className="social-button facebook-button">
        <img src={facebookImg} alt="Facebook"/> Facebook
        </button>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('email', { required: true })}
            placeholder="Введите e-mail"
            type="email"
          />
          {errors.email && <span className="error-message"> Это поле обязательно</span>}
        </div>
        <div>
          <input
            {...register('password', { required: true })}
            placeholder="Введите пароль"
            type="password"
          />
          {errors.password && <span className="error-message"> Это поле обязательно</span>}
        </div>
        
        <div className="remember-me">
          <input type="checkbox" {...register('rememberMe')} id="rememberMe" />
          <label htmlFor="rememberMe">Запомнить меня</label>
        </div>

        <div className="login-button">
          <button type="submit" className="login-submit-button">ВОЙТИ</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;