import "./HealthStats.scss";
const Duration = (props) => {
  // const { ticketPriority } = props;
  return (
    <div className="cont">
      <p className="STT3">Planned Duration (hrs)</p>
      <div className="durr">
        <p id="durr">{ticket.plan_duration}</p>
      </div>
    </div>
  );
}

export default Duration;

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
