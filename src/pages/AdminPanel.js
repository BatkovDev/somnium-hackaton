import React, { useState } from 'react';
import '../styles/AdminPanel.css';
import EditingVacancyComponent from '../components/EditingVacancyComponent';
import AVacanciesComponent from '../components/AVacanciesComponent';
import JobComponent from '../components/JobComponent';
import Navigation from '../components/Navigation';
import Logotype from '../img/logo2.jpeg';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    const [selectedTab, setSelectedTab] = useState('vacancies'); // Default to vacancies tab

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
        <Navigation />
            <main>
                <div className="side">
                    <a href="#" onClick={() => handleTabChange('vacancies')}>Вакансии</a>
                    <Link to="/admin/negotiations">Отклики на вакансии</Link>
                </div>
                <div className="container">
                    {selectedTab === 'vacancies' ? <AVacanciesComponent /> : <EditingVacancyComponent />}
                </div>
            </main>
        </>
    );
};

export default AdminPanel;
