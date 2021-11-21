import "./HealthStats.scss";
const HealthPriority = (props) => {
  // const { ticketPriority } = props;
  return (
    <div className="container">
      <h4>PRIORITY</h4>
      <div className="health">
        <h4>{ticket.priority}</h4>
      </div>
    </div>
  );
}

export default HealthPriority;

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
