import React from 'react';
import IconArrowUp from '../assets/desktop/icon-arrow-up.svg';
import clsx from 'clsx';

export default function ButtonMore({ buttonRef, isActive, onMoreButtonClick }) {
  
  const buttonClass = clsx('btn btn--more', {'active': isActive});
  return (
    <button ref={buttonRef} onClick={onMoreButtonClick} className={buttonClass}>
      <span className="t-btn-more">{isActive ? 'less' : 'more'}</span>
      <img src={IconArrowUp} alt="icon arrow"/>
    </button>
  )
}
