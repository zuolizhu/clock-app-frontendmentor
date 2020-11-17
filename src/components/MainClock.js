import React from 'react';
import IconSun from '../assets/desktop/icon-sun.svg';
import IconMoon from '../assets/desktop/icon-moon.svg';
import Location from '../components/Location';

export default function MainClock({ time, location, isDayTime }) {
  const isStaticData = false;

  function getTime(datetime) {
    const timeObj = new Date(datetime);
    return `${timeObj.getHours()}:${timeObj.getMinutes()}`;
  }

  return (
    <div className="main-clock">
      <div className="greeting">
        <span className="greeting__icon"><img src={isDayTime ? IconSun : IconMoon} alt="greeting icon"/></span>
        <p className="t-greeting">Good {isDayTime ? 'morning':'evening'}<span className="hide-on-mobile">, it’s currently</span></p>
      </div>
      <div className="current-time">
        <h1 className="t-time">{isStaticData ? '11:37' : getTime(time.datetime)}</h1>
        <p className="t-timezone current-time__timezone">{isStaticData ? 'BST' : time.abbreviation}</p>
      </div>
      <Location location={location} isStaticData={isStaticData} />
    </div>
  )
}
