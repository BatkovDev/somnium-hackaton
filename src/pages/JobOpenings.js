import React, { useState } from 'react';
import '../styles/job.css';
const dateInfo = {
  text: "5 июня 2024 г."
};

const moneyInfo = {
  text: "10000 тг"
};



const placeInfo = {
  text: "Манила, Филиппины"
};
const tagsInfo = ["Обслуживание клиентов", "коммуникация"];

const InfoItem = ({ icon, text }) => (
  <div className="info">
    <img src={icon} alt="Icon" />
    <p className="info2">{text}</p>
  </div>
);

const Tags = ({ tags }) => (
  <div className="info">
    <p>
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </p>
  </div>
);

function App() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container">
      <h1>Аналитик по планированию мощности, Управление персоналом CS</h1>
      <div className="product">
        <InfoItem {...dateInfo} />
        <InfoItem {...moneyInfo} />
        <InfoItem {...placeInfo} />
        
        <Tags tags={tagsInfo} />
        <p><strong>Краткое описание роли:</strong></p>
        <p>Аналитик по планированию мощности — это самый старший IC WFM в регионе, отвечающий за определение требований к численности агентов и оплачиваемых часов, необходимых для удовлетворения прогнозируемого спроса на FTE. Они несут ответственность за создание кадровых планов, учитывающих истощение, сокращение, новых сотрудников, часы работы, оплачиваемые и неоплачиваемые часы, ставки счетов, производительность и эффективность предприятия, которые являются как оперативно выполнимыми, так и в пределах рабочего бюджета. Они тесно сотрудничают с партнерами по эксплуатации и BPO, чтобы обеспечить необходимую численность агентов для удовлетворения их требований.  </p>
        <p><strong>Обязанности:</strong></p>
        <p>Аналитик по планированию мощности — это самый старший IC WFM в регионе, отвечающий за определение требований к численности агентов и оплачиваемых часов, необходимых для удовлетворения прогнозируемого спроса на FTE. Они несут ответственность за создание кадровых планов, учитывающих истощение, сокращение, новых сотрудников, часы работы, оплачиваемые и неоплачиваемые часы, ставки счетов, производительность и эффективность предприятия, которые являются как оперативно выполнимыми, так и в пределах рабочего бюджета. Они тесно сотрудничают с партнерами по эксплуатации и BPO, чтобы обеспечить необходимую численность агентов для удовлетворения их требований.  </p>

        {/* Форма */}
        <form className="contact-form">
          {/* Первая часть формы */}
          {step === 1 && (
            <>
              <div className="input-group">
                <label htmlFor="firstName" className="forms-top"><strong>Имя:</strong></label>
                <input type="text" id="firstName" name="firstName" placeholder="Введите ваше имя" />
              </div>
              <div className="input-group">
                <label htmlFor="lastName" className="forms-top"><strong>Фамилия:</strong></label>
                <input type="text" id="lastName" name="lastName" placeholder="Введите вашу фамилию" />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="forms-top"><strong>Почта:</strong></label>
                <input type="email" id="email" name="email" placeholder="Введите вашу электронную почту" />
              </div>
              <div className="input-group">
                <label htmlFor="phone" className="forms-top"><strong>Телефон:</strong></label>
                <input type="tel" id="phone" name="phone" placeholder="Введите ваш номер телефона" />
              </div>
              <div className="button-group">
                <button onClick={handleNextStep} >Далее</button>
              </div>
              
            </>
          )}

          {/* Вторая часть формы */}
          {step === 2 && (
            <>
              <div className="input-group">
                <label htmlFor="nationality" className="forms-top"><strong>Национальность:</strong></label>
                <select id="nationality" name="nationality">
                  <option value="russian">Казах</option>
                  <option value="american">Русскии</option>
                  <option value="chinese">Американец</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="gender" className="forms-top"><strong>Пол:</strong></label>
                <select id="gender" name="gender">
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
              </div>
              <div className="button-group">
                <button onClick={handlePrevStep} >Назад</button>
                <button onClick={handleNextStep} >Далее</button>
              </div>
              
            </>
          )}

          {/* Третья часть формы */}
          {step === 3 && (
            <>
              <p className="forms-top"><strong>Резюме</strong></p>
              <p className="description-of-the-title">(.pdf, .doc, .docx, .txt)</p>
              <div className="input-group resume-upload">
                <label htmlFor="resume">Загрузить</label>
                <input type="file" id="resume" name="resume" />
              </div>
              <p className="forms-top"><strong>Дополнительные файлы</strong></p>
              <p className="description-of-the-title">Загрузите до 5 дополнительных документов (.pdf, .doc, .docx, .txt, .jpeg, .gif, .png), максимум 30 МБ каждый.</p>
              <div className="input-group resume-upload">
                <label htmlFor="resume">Загрузить</label>
                <input type="file" id="resume" name="resume" />
              </div>
              <div className="button-group">
                <button onClick={handlePrevStep} >Назад</button>
                <button type="submit" >Отправить</button>
              </div>
              
              
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
