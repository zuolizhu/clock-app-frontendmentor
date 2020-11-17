import React, { useState } from 'react';
import clsx from 'clsx';
import './App.scss';

// components
import MainClock from './components/MainClock';
import Quotes from './components/Quotes';
import ButtonMore from './components/ButtonMore';
import MoreDetail from './components/MoreDetail';

function App() {
  const isDayTime = false;
  const [isActive, setIsActive] = useState(false);
  const handleMoreClick = () => setIsActive(prevStatus => !prevStatus);
  const AppClasses = clsx('App', { 'day': isDayTime, 'night': !isDayTime });
  const ContainerMainClasses = clsx('container__main', { 'active': isActive });
  const ContainerMoreClasses = clsx('container__more', { 'active': isActive });
  return (
    <div className={AppClasses}>
      <div className={ContainerMainClasses}>
        <div className="inner__container">
          <Quotes isActive={isActive} />
          <div className="main-clock-container">
            <MainClock />
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
