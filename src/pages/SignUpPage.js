import React, { useState } from 'react';
import '../styles/signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

  const createPost = async (a, b, c) => {
    try {
      const response = await axios.post('http://localhost:4444/auth/register', {
        email: a,
        password: b,
        fullName: c,
        avatarUrl: "https://chatgpt.com/c/aa1859a4-56b1-4089-aa20-254e75184175"
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error creating post:', error.response ? error.response.data : error.message);
    }
  };


const SignUpPage = () => {
  

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
    createPost(formData.email, formData.password, formData.username)
    e.preventDefault();
    console.log('Отправленные данные:', formData);
  };

  return (
    <div className="signup-page">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Имя пользователя</label>
        <input type="text" id="username" name="username" placeholder='Введите ваше имя' value={formData.username} onChange={handleChange} required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Введите эл. почту' value={formData.email} onChange={handleChange} required />
        <label htmlFor="password">Пароль</label>
        <input type="password" id="password" name="password" placeholder='Введите ваш пароль' value={formData.password} onChange={handleChange} required />
        <label htmlFor="phone">Номер телефона</label>
        <input type="phone" id="phone" name="phone" placeholder='Введите номер телефона' value={formData.phone} onChange={handleChange} required />
        <button type="submit">Зарегистрироваться</button>
        <p>У вас уже есть аккаунт? <Link to="/login">Авторизация</Link></p>
      </form>
    </div>
  );
}

export default SignUpPage;