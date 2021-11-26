import "./HealthStats.scss";
const HealthType = (props) => {
  const {data} = props;
  return (
    <div className="container">
      <p className="STT">TYPE</p>
      <div className="health">
        <p id="typ">{data.length && data[0].category}</p>
      </div>  
    </div>
  );
}

export default HealthType;
