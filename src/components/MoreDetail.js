import React from 'react';

export default function MoreDetail() {
  return (
    <div className="more-detail">
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Current Timezone</p>
        <p className="more-detail__field__content t-detail-field-content">Europe/London</p>
      </div>
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Day of the year</p>
        <p className="more-detail__field__content t-detail-field-content">295</p>
      </div>
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Day of the week</p>
        <p className="more-detail__field__content t-detail-field-content">5</p>
      </div>
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Week number</p>
        <p className="more-detail__field__content t-detail-field-content">42</p>
      </div>
    </div>
  )
}
