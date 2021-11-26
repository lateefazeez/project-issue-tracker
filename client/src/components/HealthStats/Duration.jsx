import "./HealthStats.scss";
const Duration = (props) => {
  const {data} = props;
  return (
    <div className="cont">
      <p className="STT3">Planned Duration (hrs)</p>
      <div className="durr">
        <p id="durr">{data.length && data[0].plan_duration}</p>
      </div>
    </div>
  );
}

export default Duration;