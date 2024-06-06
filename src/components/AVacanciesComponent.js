import React, { useState } from 'react';
import '../styles/AVacanciesComponent.css';
import AJobComponent from '../components/AJobComponent';
import EditingVacancyComponent from '../components/EditingVacancyComponent';
import { Link } from 'react-router-dom';

const AVacanciesComponent = () => {
    const [showEditingForm, setShowEditingForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const toggleEditingForm = (job) => {
        setSelectedJob(job);
        setShowEditingForm(!showEditingForm);
    };

    const jobs = [
        {
            id: 1,
            name: 'Frontend Developer',
            price: 'от 200.000 тг',
            location: 'Алматы',
            team: 'Web-development',
            tags: ['React', 'JavaScript', 'HTML', 'CSS']
        },
        {
            id: 2,
            name: 'Frontend Developer',
            price: 'от 200.000 тг',
            location: 'Алматы',
            team: 'Web-development',
            tags: ['React', 'JavaScript', 'HTML', 'CSS']
        },
        {
            id: 3,
            name: 'Frontend Developer',
            price: 'от 200.000 тг',
            location: 'Алматы',
            team: 'Web-development',
            tags: ['React', 'JavaScript', 'HTML', 'CSS']
        },
        // Add more job objects as needed
    ];

    const deleteJob = (id) => {
        // Implement your delete logic here
        console.log(`Job with ID ${id} deleted`);
    };

    return (
        <>
            {showEditingForm && selectedJob ? (
                <EditingVacancyComponent job={selectedJob} />
            ) : (
                <>
                    <h1>Вакансии ({jobs.length})</h1>
                    <div className="bar">
                        <Link to="/admin/add-vacancy"><button>Добавить вакансию</button></Link>
                    </div>
                    <ol className="list">
                        {jobs.map(job => (
                            <AJobComponent
                                id={job.id}
                                name={job.name}
                                price={job.price}
                                location={job.location}
                                key={job.id}
                                team={job.team}
                                job={job}
                            />
                        ))}
                    </ol>
                </>
            )}
        </>
    );
}

export default AVacanciesComponent;
