import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logotype from '../img/logo2.jpeg';
import Navigation from '../components/Navigation';
import '../styles/AdminPanel.css';
import '../styles/EditingVacancy.css';

const subdivisions = {
    "Электронный документооборот": [
        "Делопроизводитель",
        "Специалист по документообороту",
        "Офис менеджер"
    ],
    "Автоматизация административных процессов": [
        "Front-end Developer",
        "Back-end Developer",
        "Fullstack Developer",
    ],
    "Разработка 3D приложений": [
        "3Д Аниматор",
        "3Д Дизайнер",
        "Дизайнер интерьера"
    ]
};

const CreateVacancyPage = () => {
    const [selectedSubdivision, setSelectedSubdivision] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');

    const handleSubdivisionChange = (e) => {
        setSelectedSubdivision(e.target.value);
        setSelectedPosition('');
    };

    const handlePositionChange = (e) => {
        setSelectedPosition(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!selectedSubdivision || !selectedPosition || !minSalary || !maxSalary) {
            alert('Заполните пустые поля.');
            return;
        }
        const formData = {
            selectedSubdivision,
            selectedPosition,
            minSalary,
            maxSalary
        };

        try {
            const response = await fetch('api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Вакансия успешно изменена!');
                // Optionally, reset form fields after successful submission
                setSelectedSubdivision('');
                setSelectedPosition('');
                setMinSalary('');
                setMaxSalary('');
            } else {
                alert('Ошибка при редактировании вакансии. Повторите попытку позже.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при редктировании вакансии. Повторите попытку позже.');
        }
    }

    return (
        <>
            <Navigation />
            <main>
                <div className="side">
                    <Link to="/admin">Вакансии</Link>
                    <Link to="/admin/negotiations">Отклики на вакансии</Link>
                </div>
                <div className="container">
                    <h1>Добавление вакансии</h1>
                    <form>
                        <div>
                            <label htmlFor="ch1">Подразделение вакансии</label>
                            <select id="ch1" value={selectedSubdivision} onChange={handleSubdivisionChange}>
                                <option value="">Выберите подразделение</option>
                                {Object.keys(subdivisions).map(subdivision => (
                                    <option key={subdivision} value={subdivision}>{subdivision}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="ch12">Наименование должности</label>
                            <select id="ch12" value={selectedPosition} onChange={handlePositionChange}>
                                <option value="">Выберите наименование</option>
                                {selectedSubdivision && subdivisions[selectedSubdivision].map(position => (
                                    <option key={position} value={position}>{position}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label for="location">Город или район</label>
                            <input type="text" id="location" placeholder="Укажите локацию"/>
                        </div>
                        <div>
                            <label for="description">Уточнение вакансии</label>
                            <input type="text" id="description" placeholder="Введите описание"/>
                        </div>
                        <div>
                            <label for="end-time">Дата окончания подачи заявок</label>
                            <input type="date" id="end-time"/>
                        </div>
                        <div>
                            <label for="ch4">Режим работы</label>
                            <select id="ch4">
                                <option value="">Выберите режим работы</option>
                                <option value="1">Полный рабочий день</option>
                                <option value="2">Неполный рабочий день</option>
                            </select>
                        </div>
                        <div>
                            <label for="character">Характер работы</label>
                            <select id="character">
                                <option value="">Выберите характер работы</option>
                                <option value="1">дистанционная</option>
                                <option value="2">временная</option>
                                <option value="3">постоянная</option>
                                <option value="4">сезонная</option>
                            </select>
                        </div>
                        <div>
                            <label for="stage">Стажировка</label>
                            <select id="stage">
                                <option value="">Не предполагается</option>
                                <option value="1">Предполагается, не оплачивается</option>
                            </select>
                        </div>
                        <div>
                            <label for="minSalary">Оплата труда</label>
                            <div className="input-double">
                                <input type="number" id="minSalary" value={minSalary} onChange={(e) => setMinSalary(e.target.value)} required placeholder="От (минимум)"/>
                                <input type="number" id="maxSalary" value={maxSalary} onChange={(e) => setMaxSalary(e.target.value)} required placeholder="До (максимум)"/>
                            </div>
                        </div>
                        <div>
                            <label for="status">Статус вакансии</label>
                            <select id="status">
                                <option value="active">Активна</option>
                                <option value="closed">Закрыта</option>
                            </select>
                        </div>
                        <button type="submit">Опубликовать</button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default CreateVacancyPage;