import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';
import './App.scss';

// components
import MainClock from './components/MainClock';
import Quotes from './components/Quotes';
import ButtonMore from './components/ButtonMore';
import MoreDetail from './components/MoreDetail';
import IntroOverlay from './components/IntroOverlay';

function App() {
  const [time, setTime] = useState({});
  const [location, setLocation] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isDayTime, setIsDayTime] = useState(true);

  const AppClasses = clsx('App', { 'day': isDayTime, 'night': !isDayTime });
  const ContainerMainClasses = clsx('container__main', { 'active': isActive });
  const ContainerMoreClasses = clsx('container__more', { 'active': isActive });

  const overlayRef = useRef(null);
  const mainClockRef = useRef(null);
  const buttonRef = useRef(null);
  const quotesRef = useRef(null);

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
    const timeLine = gsap.timeline();

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
      // after all data loaded
      timeLine.fromTo(overlayRef.current, { opacity: 1, y: '0%' }, { opacity: 0, y: '-100%', duration: 1, delay: 2.5 });
      timeLine.fromTo(mainClockRef.current, { opacity: 0, y: '50%' }, { opacity: 1, y: '0%', duration: 0.5 }, "-=0.75");
      timeLine.fromTo(buttonRef.current, { opacity: 0, y: '-50%' }, { opacity: 1, y: '0%', duration: 0.5 }, "-=0.75");
      timeLine.fromTo(quotesRef.current, { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 0.75 });

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
    
    // cleanup on unmounted
    return () => {
      clearInterval(intervalId);
    }
  })

  return (
    <div className={AppClasses}>
      <IntroOverlay overlayRef={overlayRef} />
      <div className={ContainerMainClasses}>
        <div className="inner__container">
          <Quotes quotesRef={quotesRef} isActive={isActive} />
          <div className="main-clock-container">
            <MainClock mainClockRef={mainClockRef} time={time} location={location} isDayTime={isDayTime} />
            <ButtonMore buttonRef={buttonRef} onMoreButtonClick={handleMoreClick} isActive={isActive} />
          </div>
        </div>
      </div>
      <div className={ContainerMoreClasses}>
        <MoreDetail detail={time} />
      </div>
    </div>
  );
}

export default App;
