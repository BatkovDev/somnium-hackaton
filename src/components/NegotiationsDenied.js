import React from 'react';

const users = [
    {
        name: "Sergey Lalal",
        avatar: "logo2.jpeg",
        vacancyName: "Custom Vacancy",
        last_jobs: [
            "lastJob1"
        ],
        phone: "+77477999787",
        STATUS: "Отказ"
    },
    {
        name: "Sergey2 Lalal",
        avatar: "logo2.jpeg",
        vacancyName: "Custom Vacancy",
        date: "31.04.2087 31:45",
        exp: "10 years",
        last_jobs: [
            "lastJob232131"
        ],
        phone: "+7747791231997872",
        STATUS: "Отказ"
    }
]
const NegotiationsDenied = () => {
    return (
        <>
        <ul class="list">
            {users.map(user => (
                <li>
                    <div class="avatar">
                        <img src={user.avatar}/>
                        <h2>{user.name}</h2>
                    </div>
                    <div class="info">
                        <a href="#">{user.vacancyName}</a>
                        <p class="negotiationed">Откликнулся {user.date}</p>
                        <p class="experience">Опыт работы: {user.exp}</p>
                        <div class="last-job">
                            <span>Последнее место работы:</span>
                            {user.last_jobs.map(job => {
                                <p>{job}</p>
                            })}
                        </div>
                        <p class="phone">Телефон: {user.phone}</p>
                        <div className='status'>Статус: {user.STATUS}</div>
                        <div className='bar'>
                            <button>Пригласить</button>
                        </div>
                    </div>
                    <div class="files">
                        <button class="resume-download">Скачать резюме</button>
                        <button class="files-download">Скачать доп. файлы</button>
                    </div>
                </li>
            ))}
        </ul>
        </>
    );
};

export default NegotiationsDenied;
