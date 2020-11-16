import React from 'react'
import IconSun from '../assets/desktop/icon-sun.svg';
import IconMoon from '../assets/desktop/icon-moon.svg';

export default function MainClock() {
  const isDayTime = false;
  return (
    <div className="main-clock">
      <div className="greeting">
        <span className="greeting__icon"><img src={isDayTime ? IconSun : IconMoon} alt="greeting icon"/></span>
        <p className="t-greeting">Goog evening</p>
      </div>
      <div className="current-time">
        <h1 className="t-time">23:14</h1>
        <p className="t-timezone current-time__timezone">BST</p>
      </div>
    </div>
  )
}
