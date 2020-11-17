import React from 'react'

export default function IntroOverlay({ overlayRef }) {
  return (
    <div ref={overlayRef} className="intro-overlay">
      <p><span class="glitch">loading</span></p>
    </div>
  )
}
