import React, { useState } from 'react';
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

const EditingVacancyComponent = ({ name, id }) => {
    const [selectedSubdivision, setSelectedSubdivision] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');

    const handleSubdivisionChange = (e) => {
        setSelectedSubdivision(e.target.value);
        setSelectedPosition('');
    };

    const handlePositionChange = (e) => {
        setSelectedPosition(e.target.value);
    };

    return (
        <>
            <h1>Редактирование вакансии {name}</h1>
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
                    <label for="ch2">Город или район</label>
                    <input type="text" id="ch2" placeholder="Укажите локацию"/>
                </div>
                <div>
                    <label for="ch3">Уточнение вакансии</label>
                    <input type="text" id="ch3" placeholder="Введите описание"/>
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
                    <label for="ch5">Характер работы</label>
                    <select id="ch5">
                        <option value="">Выберите характер работы</option>
                        <option value="1">дистанционная</option>
                        <option value="2">временная</option>
                        <option value="3">постоянная</option>
                        <option value="4">сезонная</option>
                    </select>
                </div>
                <div>
                    <label for="ch6">Стажировка</label>
                    <select id="ch6">
                        <option value="">Не предполагается</option>
                        <option value="1">Предполагается, не оплачивается</option>
                    </select>
                </div>
                <div>
                    <label for="ch7">Оплата труда</label>
                    <div className="input-double">
                        <input type="text" placeholder="От (минимум)"/>
                        <input type="text" placeholder="До (максимум)"/>
                    </div>
                </div>
                <button type="submit">Опубликовать</button>
            </form>
        </>
    );
}

export default EditingVacancyComponent;