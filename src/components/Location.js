import React from 'react'

export default function Location({ location, isStaticData }) {
  return (
  <h2 className="t-location location">in {isStaticData ? 'london, uk' : `${location.region_name}, ${location.country_name}` }</h2>
  )
}
