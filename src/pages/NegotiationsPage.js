import React, { useState } from 'react';
import '../styles/AdminPanel.css';
import '../styles/NegotiationsPage.css';
import Logotype from '../img/logo2.jpeg';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import NegotiationsNoSee from '../components/NegotiationsNoSee';
import NegotiationsInvite from '../components/NegotiationsInvite';
import NegotiationsDenied from '../components/NegotiationsDenied';

const NegotiationsPage = () => {
    const [selectedTab, setSelectedTab] = useState('nosee'); // Default to vacancies tab

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
            <Navigation />
            <main>
                <div className="side">
                    <Link to="/admin">Все вакансии</Link>
                    <a href="#" onClick={() => handleTabChange('nosee')}>Резюме не просмотрено</a>
                    <a href="#" onClick={() => handleTabChange('invite')}>Приглашение</a>
                    <a href="#" onClick={() => handleTabChange('deny')}>Отказ</a>
                </div>
                <div className="container" id='negotiations'>
                    {selectedTab === "nosee" && <NegotiationsNoSee />}
                    {selectedTab === "invite" && <NegotiationsInvite />}
                    {selectedTab === "deny" && <NegotiationsDenied />}
                </div>
            </main>
        </>
    );
};

export default NegotiationsPage;
