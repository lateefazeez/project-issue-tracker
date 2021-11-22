import Dashboard from "./Dashboard";
import CreateButton from "./CreateButton";

import './ProjectDashboard.scss'

const ProjectDashboard = () => {
  const projectsTest = [{
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
  },
  {
    title: "Project tracking app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Aug 19, 2021",
    end_date: "Nov 25, 2021",
    percentage_complete: 50,
    status: "on track",
    users_id: 1
  },
  {
    title: "Project tracking app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Aug 19, 2021",
    end_date: "Nov 25, 2021",
    percentage_complete: 50,
    status: "on track",
    users_id: 1
  },
  {
    title: "Project tracking app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Aug 19, 2021",
    end_date: "Nov 25, 2021",
    percentage_complete: 50,
    status: "on track",
    users_id: 1
  },
  ];

  return ( 
    <div className="project--dashboard">
  
      <Dashboard projects={projectsTest}/>
    </div>
   );
}
 
export default ProjectDashboard;