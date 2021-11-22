import ProjectListItem from "./ProjectListItem2";
import './ProjectList.scss';

const ProjectList = function(props) {
  // const { projects, value} = props
  const parsedProjects = projects.map((elm) => {
    return <ProjectListItem title={elm.title} description={elm.description} progress={elm.percentage_complete} status={elm.status} team={"aman, matt, lateef"} />
  });

  return (
    <table className="projectTable">
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Progress</th>
        <th>Status</th>
        <th>Contributors</th>
      </tr>
      {parsedProjects}
    </table>
  );
}

const projects = [{
  title: "Wikimap app",
  description: "hahahahahahahahahahahahahah",
  start_date: "Jul 14, 2021",
  end_date: "Oct 20, 2021",
  percentage_complete: 75,
  status: "on track",
  users_id: 1
},
{
  title: "Scheduler app",
  description: "hahahahahahahahahahahahahah",
  start_date: "Jul 20, 2021",
  end_date: "Sept 20, 2021",
  percentage_complete: 75,
  status: "on track",
  users_id: 2
}
];


export default ProjectList;