import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import AllVacancies from "./pages/AllVacancies";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";
import JobOpenings from "./pages/JobOpenings";
import NegotiationsPage from "./pages/NegotiationsPage";
import UserProfile from "./pages/UserProfile";
import EditingVacancyComponent from './components/EditingVacancyComponent';
import EditingVacancyPage from './pages/EditingVacancyPage';
import CreateVacancyPage from './pages/CreateVacancyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<AllVacancies />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/job/:id" element={<JobOpenings/>} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/add-vacancy" element={<CreateVacancyPage />} />
        <Route path="/admin/edit-vacancy/:id" element={<EditingVacancyPage />} />
        <Route path="/admin/negotiations" element={<NegotiationsPage />} />
    </Routes>
  </BrowserRouter>
);

// <Route path="contact" element={<Contact />} />

reportWebVitals();                                                                              