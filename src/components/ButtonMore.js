import React from 'react';
import IconArrowUp from '../assets/desktop/icon-arrow-up.svg';
import clsx from 'clsx';

export default function ButtonMore({ isActive, onMoreButtonClick }) {
  
  const buttonClass = clsx('btn btn--more', {'active': isActive});
  return (
    <button onClick={onMoreButtonClick} className={buttonClass}>
      <span className="t-btn-more">{isActive ? 'less' : 'more'}</span>
      <img src={IconArrowUp} alt="icon arrow"/>
    </button>
  )
}
