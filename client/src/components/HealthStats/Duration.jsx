import "./HealthStats.scss";
const Duration = (props) => {
  const {data} = props;
  return (
    <div className="cont">
      <p className="STT">Planned Duration (hrs)</p>
      <div id="help" className="health">
        <p id="durr">{data.length && data[0].plan_duration}</p>
      </div>
    </div>
  );
}

export default Duration;