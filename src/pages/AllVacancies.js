import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JobComponent from '../components/JobComponent';
import Navigation from '../components/Navigation';
import '../styles/AllVacancies.css';

const AllVacancies = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
      location: [],
      team: [],
      roles: [],
      tags: []
    });
    const handleSearchChange = (event) => {
      setSearchKeyword(event.target.value);
    };
    
    const handleFilterChange = (filterType, filterValue) => {
      setSelectedFilters(prevState => ({
        ...prevState,
        [filterType]: prevState[filterType] && prevState[filterType].includes(filterValue)
          ? prevState[filterType].filter(value => value !== filterValue)
          : [...(prevState[filterType] || []), filterValue]
      }));
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
        name: 'Backend Developer',
        price: 'от 220.000 тг',
        location: 'Нур-Султан',
        team: 'Web-development',
        tags: ['Node.js', 'Express', 'MongoDB', 'REST API']
      },
      {
        id: 2,
        name: 'Backend Developer',
        price: 'от 220.000 тг',
        location: 'Нур-Султан',
        team: 'Web-development',
        tags: ['Node.js', 'Express', 'MongoDB', 'REST API']
      },
      {
        id: 2,
        name: 'Backend Developer',
        price: 'от 220.000 тг',
        location: 'Нур-Султан',
        team: 'Web-development',
        tags: ['Node.js', 'Express', 'MongoDB', 'REST API']
      },
      {
        id: 2,
        name: 'Backend Developer',
        price: 'от 220.000 тг',
        location: 'Нур-Султан',
        team: 'Web-development',
        tags: ['Node.js', 'Express', 'MongoDB', 'REST API']
      },
      {
        id: 2,
        name: 'Backend Developer',
        price: 'от 220.000 тг',
        location: 'Нур-Султан',
        team: 'Web-development',
        tags: ['Node.js', 'Express', 'MongoDB', 'REST API']
      },
      // Добавьте другие вакансии по мере необходимости
    ];
    const filteredJobs = jobs.filter(job => {
      const keywordMatch = job.name.toLowerCase().includes(searchKeyword.toLowerCase());
      const locationMatch = selectedFilters.location.length === 0 || selectedFilters.location.includes(job.location);
      const teamMatch = selectedFilters.team.length === 0 || selectedFilters.team.includes(job.team);
      // Дополните для других фильтров
    
      return keywordMatch && locationMatch && teamMatch; // Дополните другими условиями
    });
    return (
      <>
        <Navigation />
        <div class="search-by-keyword">
            <h1>Найдите вакансию</h1>
            <form>
            <input type="text" placeholder="Search vacancy by keyword" value={searchKeyword} onChange={handleSearchChange} />
            </form>
        </div>
        <div class="vacancies">
            <div class="filter">
                <h2>Фильтр</h2>
                <div class="filter-section section-location">
                    <h3>Локации</h3>
                    <ul class="list">
                        <li><input type="checkbox" id="tokyo" name="tokyo" checked={selectedFilters.location.includes('Tokyo')} onChange={() => handleFilterChange('location', 'Tokyo')} /> <label for="tokyo">Japan, Tokyo</label></li>
                        <li><input type="checkbox" id="astana" name="astana" checked={selectedFilters.location.includes('Астана')} onChange={() => handleFilterChange('location', 'Астана')} /> <label for="astana">Kazakhstan, Astana</label></li>
                        <li><input type="checkbox" id="kokshetau" name="kokshetau" checked={selectedFilters.location.includes('Кокшетау')} onChange={() => handleFilterChange('location', 'Кокшетау')} /> <label for="kokshetau">Kazakhstan, Kokshetau</label></li>
                        <li><input type="checkbox" id="almaty" name="almaty" checked={selectedFilters.location.includes('Алматы')} onChange={() => handleFilterChange('location', 'Алматы')} /> <label for="almaty">Kazakhstan, Almaty</label></li>
                        <li><input type="checkbox" id="stepnogorsk" name="stepnogorsk" checked={selectedFilters.location.includes('Степногорск')} onChange={() => handleFilterChange('location', 'Степногорск')} /> <label for="stepnogorsk">Kazakhstan, Stepnogorsk</label></li>
                        <li><input type="checkbox" id="ulytau" name="ulytau" checked={selectedFilters.location.includes('Улытау')} onChange={() => handleFilterChange('location', 'Улытау')} /> <label for="ulytau">Kazakhstan, Ulytau</label></li>
                        <li><input type="checkbox" id="ulytau" name="ulytau" checked={selectedFilters.location.includes('Улытау')} onChange={() => handleFilterChange('location', 'Улытау')} /> <label for="ulytau">Kazakhstan, Ulytau</label></li>
                        <li><input type="checkbox" id="ulytau" name="ulytau" checked={selectedFilters.location.includes('Улытау')} onChange={() => handleFilterChange('location', 'Улытау')} /> <label for="ulytau">Kazakhstan, Ulytau</label></li>
                    </ul>
                </div>
                <div class="filter-section section-team">
                    <h3>Подразделения</h3>
                    <ul class="list">
                        <li><input type="checkbox" id="data" name="data" checked={selectedFilters.team.includes('Электронный документооборот')} onChange={() => handleFilterChange('team', 'Электронный документооборот')} /> <label for="data">Электронный документооборот</label></li>
                        <li><input type="checkbox" id="automaticadm" name="automaticadm" checked={selectedFilters.team.includes('Автоматизация административных процессов')} onChange={() => handleFilterChange('team', 'Автоматизация административных процессов')} /> <label for="automaticadm">Автоматизация административных процессов</label></li>
                        <li><input type="checkbox" id="3dappdev" name="3dappdev" checked={selectedFilters.team.includes('Разработка 3D приложений')} onChange={() => handleFilterChange('team', 'Разработка 3D приложений')} /> <label for="3dappdev">Разработка 3D приложений</label></li>
                    </ul>
                </div>
                <div class="filter-section section-roles">
                    <h3>Должности</h3>
                    <ul class="list">
                        <li><input type="checkbox" id="webdev" name="webdev" checked={selectedFilters.roles.includes('Web-development')} onChange={() => handleFilterChange('roles', 'Web-development')} /> <label for="webdev">Web-development</label></li>
                        <li><input type="checkbox" id="ardev" name="ardev" checked={selectedFilters.roles.includes('AR-development')} onChange={() => handleFilterChange('roles', 'AR-development')} /> <label for="ardev">AR-development</label></li>
                        <li><input type="checkbox" id="vrdev" name="vrdev" checked={selectedFilters.roles.includes('VR-development')} onChange={() => handleFilterChange('roles', 'VR-development')} /> <label for="vrdev">VR-development</label></li>
                        <li><input type="checkbox" id="datascience" name="datascience" checked={selectedFilters.roles.includes('Datascience-development')} onChange={() => handleFilterChange('Datascience', 'Web-development')} /> <label for="datascience">Datascience-development</label></li>
                        <li><input type="checkbox" id="java" name="java" checked={selectedFilters.roles.includes('Java-development')} onChange={() => handleFilterChange('roles', 'Java-development')} /> <label for="java">Java-development</label></li>
                    </ul>
                </div>
                <div class="filter-section section-tags">
                    <h3>Теги</h3>
                    <ul class="list">
                        <li><input type="checkbox" id="service" name="service" checked={selectedFilters.tags.includes('Обслуживание')} onChange={() => handleFilterChange('tags', 'Обслуживание')} /> <label for="service">Обслуживание</label></li>
                        <li><input type="checkbox" id="communication" name="communication" checked={selectedFilters.tags.includes('Коммуникация')} onChange={() => handleFilterChange('tags', 'Коммуникация')} /> <label for="communication">Коммуникация</label></li>
                    </ul>
                </div>
            </div>
            <ol class="job-list">
            {filteredJobs.map(job => (
              <JobComponent
                key={job.id}
                id={job.id}
                name={job.name}
                price={job.price}
                location={job.location}
                team={job.team}
                tags={job.tags}
              />
            ))}
            </ol>
        </div>
      </>
    );
  };
  
  export default AllVacancies;