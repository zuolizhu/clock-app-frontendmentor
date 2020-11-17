import React from 'react'

export default function IntroOverlay({ overlayRef }) {
  return (
    <div ref={overlayRef} className="intro-overlay">
      <div className="focus"> 
        <div className="focus--mask">
          <div className="focus--mask-inner">LOADING</div>
        </div>
      </div>
    </div>
  )
}
