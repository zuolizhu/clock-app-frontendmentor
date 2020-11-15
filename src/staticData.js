export default function staticData() {
  const staticData = [
    {
      "abbreviation": "EST",
      "datetime": "2020-11-14T21:30:54.047251-05:00",
    },  
  ];

  const isDayTime = () => {
    const dt = new Date(staticData[0].datetime);
    return dt.getHours() > 6 && dt.getHours() < 18;
  }

  return {isDayTime}
}