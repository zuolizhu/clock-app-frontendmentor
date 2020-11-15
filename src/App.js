import React from 'react';
import clsx from 'clsx';
import './App.scss';

// temp data for now
import staticData from './staticData'

function App() {
  const { isDayTime } = staticData();
  const AppClasses = clsx("App", { 'day': isDayTime(), 'night': !isDayTime() });

  return (
    <div className={AppClasses}>
      <div className="testblock"></div>
    </div>
  );
}

export default App;
