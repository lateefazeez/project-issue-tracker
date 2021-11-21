import classNames from "classnames";
import "./HealthStats.scss";

const HealthStatus = (props) => {
  // State is managed elsewhere for the status (app/tickets component)
  // const { ticketStatus, atRisk } = props;
  // const statusId = classNames('status', {'status--atrisk': atRisk});
  const statusId = "status--atrisk"
  return (
    <div className="container">
      <h4>STATUS</h4>
      <div className="health">
        <h4 id={statusId}>{ticket.status}</h4>
      </div>
    </div>
  );
}

const ticket = {
  start_date: "Jul 20, 2021",
  end_date: "Jul 22, 2021",
  plan_duration: 137,
  title: "Where can I get some?",
  description: "There are many variations of passages of Lorem Ipsum available",
  status: "At Risk",
  category: "Bug",
  priority: "Medium",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
};

export default HealthStatus;
