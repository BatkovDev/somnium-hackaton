import React, { useState } from 'react';
import '../styles/signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
const token=""
const createPost = async (a, b, c) => {
  try {
    const response = await axios.post('http://localhost:4444/auth/login', {
      email: a,
      password: b
    });
    console.log(response.data);
    const token = response.data.token;

    // Перенаправление на другую страницу
    window.location.href = '/'; // укажите нужный путь
  } catch (error) {
    console.error('Error creating post:', error.response ? error.response.data : error.message);
  }
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    createPost(formData.email, formData.password)
    e.preventDefault();
    console.log('Отправленные данные:', formData);
  };

  return (
    <div className="signup-page">
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Введите эл. почту' value={formData.email} onChange={handleChange} required />
        <label htmlFor="password">Пароль</label>
        <input type="password" id="password" name="password" placeholder='Введите ваш пароль' value={formData.password} onChange={handleChange} required />
        <button type="submit">Авторизоваться</button>
        <p>У вас нет аккаунта? <Link to="/signup">Регистрация</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;