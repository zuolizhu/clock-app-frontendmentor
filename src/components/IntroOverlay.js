import React from 'react'

export default function IntroOverlay({ overlayRef }) {
  return (
    <div ref={overlayRef} className="intro-overlay">
      <div className="jawn"></div>
      <p className="t-loading">loading</p>
    </div>
  )
}
