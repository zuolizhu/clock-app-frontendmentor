import React from 'react';

export default function MoreDetail({ detail }) {
  const isStaticData = false;
  return (
    <div className="more-detail">
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Current Timezone</p>
        <p className="more-detail__field__content t-detail-field-content">{isStaticData ? 'Europe/London' : detail.timezone}</p>
      </div>
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Day of the year</p>
        <p className="more-detail__field__content t-detail-field-content">{isStaticData ? '295' : detail.day_of_year}</p>
      </div>
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Day of the week</p>
        <p className="more-detail__field__content t-detail-field-content">{isStaticData ? '5' : detail.day_of_week}</p>
      </div>
      <div className="more-detail__field">
        <p className="more-detail__field__name t-detail-field">Week number</p>
        <p className="more-detail__field__content t-detail-field-content">{isStaticData ? '42' : detail.week_number}</p>
      </div>
    </div>
  )
}
