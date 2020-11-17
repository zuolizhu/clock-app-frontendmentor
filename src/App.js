import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import './App.scss';

// components
import MainClock from './components/MainClock';
import Quotes from './components/Quotes';
import ButtonMore from './components/ButtonMore';
import MoreDetail from './components/MoreDetail';

function App() {
  const [time, setTime] = useState({});
  const [location, setLocation] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isDayTime, setIsDayTime] = useState(true);

  const AppClasses = clsx('App', { 'day': isDayTime, 'night': !isDayTime });
  const ContainerMainClasses = clsx('container__main', { 'active': isActive });
  const ContainerMoreClasses = clsx('container__more', { 'active': isActive });

  const checkDayTime = (timeobj) => {
    const currentHours = new Date(timeobj.datetime).getHours();
    if (currentHours > 6 && currentHours < 18) {
      setIsDayTime(true);
    } else {
      setIsDayTime(false);
    }
  }

  const handleMoreClick = () => setIsActive(prevStatus => !prevStatus);

  // get initial data
  useEffect(() => {
    Promise.all([
      fetch('http://worldtimeapi.org/api/ip'),
      fetch('https://freegeoip.app/json/'),

    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      setTime(data[0]);
      setLocation(data[1]);
      checkDayTime(data[0]);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  // update time every 30s
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('http://worldtimeapi.org/api/ip')
      .then(response => response.json())
      .then(data => setTime(data))
      .catch(error => console.error(error));
    }, 30000);
    return () => {
      clearInterval(intervalId);
    }
  })

  return (
    <div className={AppClasses}>
      <div className={ContainerMainClasses}>
        <div className="inner__container">
          <Quotes isActive={isActive} />
          <div className="main-clock-container">
            <MainClock time={time} location={location} isDayTime={isDayTime} />
            <ButtonMore onMoreButtonClick={handleMoreClick} isActive={isActive} />
          </div>
        </div>
      </div>
      <div className={ContainerMoreClasses}>
        <MoreDetail />
      </div>
    </div>
  );
}

export default App;
