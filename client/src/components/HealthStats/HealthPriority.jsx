import "./HealthStats.scss";
const HealthPriority = (props) => {
  
  const { data } = props;

  return (
    <div className="container">
      <p className="STT2">PRIORITY</p>
      <div className="health">
        <p id="hlth">{ data.length && data[0].priority }</p>
      </div>
    </div>
  );
}

export default HealthPriority;

