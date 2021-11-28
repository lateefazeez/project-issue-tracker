import classNames from "classnames";
import "./HealthStats.scss";
import { useState, useEffect } from "react";

const HealthStatus = (props) => {
  const {data, timeStat, taskStat, updateStatus, statusUpdate} = props;

  const [status, setStatus] = useState(updateStatus(timeStat, taskStat));

  useEffect(() => {
    if (!data[0]){
      return
    }
      let TicketId = data[0].id 
      setStatus(updateStatus(timeStat, taskStat))
      statusUpdate(TicketId, updateStatus(timeStat, taskStat))

  }, [taskStat]);

  useEffect(() => {
    if (!data[0]){
      return
    }
      let TicketId =  data[0].id 
      setStatus(updateStatus(timeStat, taskStat))
      statusUpdate(TicketId, updateStatus(timeStat, taskStat))

  }, [timeStat]);

    let color
  if (status === "AT RISK") {
    color = "RED"
  } 

      const statClass = classNames("healthy", 
      {"healthy-atrisk": color});

  return (
    <div className="container">
      <p className="STT">STATUS</p>
      <div id="help2" className="health">
        <p className={statClass}>{status}</p>
      </div>
    </div>
  );
}

export default HealthStatus;
