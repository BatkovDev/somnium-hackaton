import Logotype from '../img/logo2.jpeg';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import '../styles/Profile.css';

const UserProfile = ({ match, title, description }) => {
    const [userData, setUserData] = useState({
        surname: "Vladimir",
        lastname: "Stalin",
        fathername: "Pushkin",
        password: "lala",
        email: "email@meail.coal",
        phone: "Не привязан"
    });
    const [editField, setEditField] = useState(null);
    const [editType, setEditType] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        newSurname: '',
        newLastname: '',
        newFathername: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        newEmail: '',
        newPhone: ''
    });

    const handleEditField = (field, type) => {
        setEditField(field);
        setEditType(type);
        setModalVisible(true); // Показываем модальное окно при выборе редактирования
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalVisible(false); // Скрываем модальное окно после нажатия на "Submit"
        // Здесь можно добавить логику для отправки данных на сервер или другие действия

        // Эмулируем отправку данных на сервер (закомментируем для реальной отправки)
        setUserData(prevUserData => ({
            ...prevUserData,
            ...formData
        }));

        // Опционально сбрасываем форму (закомментируем для реальной отправки)
        setFormData({
            newSurname: '',
            newLastname: '',
            newFathername: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            newEmail: '',
            newPhone: ''
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Navigation />
            <main id='profilecomponent'>
            <h1>Настройки личных данных</h1>
            <div className="data-table">
                <div className="d">
                    <p className="surname">Имя</p>
                    <p className="lastname">Фамилия</p>
                    <p className="fathername">Отчество</p>
                    <p className="password">Пароль</p>
                    <p className="email">Email</p>
                    <p className="phone">Мобильный телефон</p>
                </div>
                <div>
                    <p>{userData.surname}</p>
                    <p>{userData.lastname}</p>
                    <p>{userData.fathername}</p>
                    <p>*********</p>
                    <p>{userData.email}</p>
                    <p>{userData.phone}</p>
                </div>
                <div>
                    <a href="javascript:void(0)" onClick={() => handleEditField('surname', 'name')}>Изменить</a>
                    <a href="javascript:void(0)" onClick={() => handleEditField('lastname', 'name')}>Изменить</a>
                    <a href="javascript:void(0)" onClick={() => handleEditField('fathername', 'name')}>Изменить</a>
                    <a href="javascript:void(0)" onClick={() => handleEditField('password', 'password')}>Изменить</a>
                    <a href="javascript:void(0)" onClick={() => handleEditField('email', 'email')}>Изменить</a>
                    <a href="javascript:void(0)" onClick={() => handleEditField('phone', 'phone')}>Изменить</a>
                </div>
            </div>
            {modalVisible && (
                    <div className="modal" id='profilecomponent'>
                        <div className="content">
                            {/* Form based on edit type */}
                            {editType === 'name' && (
                                <>
                                <h2>Изменить ФИО</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="newSurname" value={formData.newSurname} onChange={handleInputChange} placeholder="Новое имя" />
                                    <input type="text" name="newLastname" value={formData.newLastname} onChange={handleInputChange} placeholder="Новая фамилия" />
                                    <input type="text" name="newFathername" value={formData.newFathername} onChange={handleInputChange} placeholder="Новое отчество" />
                                    <button type="submit">Submit</button>
                                </form>
                                </>
                            )}
                            {editType === 'password' && (
                                <>
                                <h2>Изменить пароль</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="password" name="oldPassword" value={formData.oldPassword} onChange={handleInputChange} placeholder="Старый пароль" />
                                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} placeholder="Новый пароль" />
                                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Повторите новый пароль" />
                                    <button type="submit">Submit</button>
                                </form>
                                </>
                            )}
                            {editType === 'email' && (
                                <>
                                <h2>Изменить почту</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="email" name="newEmail" value={formData.newEmail} onChange={handleInputChange} placeholder="Новая почта" />
                                    <button type="submit">Submit</button>
                                </form>
                                </>
                            )}
                            {editType === 'phone' && (
                                <>
                                <h2>Изменить номер телефона</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="tel" name="newPhone" value={formData.newPhone} onChange={handleInputChange} placeholder="Новый номер телефона" />
                                    <button type="submit">Submit</button>
                                </form>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default UserProfile;
