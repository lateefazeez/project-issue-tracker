import classNames from "classnames";
import "./HealthStats.scss";

const HealthStatus = (props) => {
  const {data} = props;
  const statusId = "status--atrisk"
  return (
    <div className="container">
      <p className="STT1">STATUS</p>
      <div className="health">
        <p id={statusId}>{data.length && data[0].status}</p>
      </div>
    </div>
  );
}

export default HealthStatus;
