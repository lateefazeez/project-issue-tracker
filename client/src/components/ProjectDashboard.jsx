import ProjectTable from "./ProjectTable";

import './ProjectDashboard.scss'
import Chart from "./Chart";

const ProjectDashboard = () => {
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
        <ProjectTable projects={projects} />
        <div className="chart--group">
          <Chart
            title={"Type"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850'
            ]}
            chartLabels={['Issue', 'Bug', 'Feature Request']}
            chartData={[65, 59, 80]}
          />
          <Chart 
            title={"Priority"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850',
              '#6AD650'
            ]}
            chartLabels={['Immediate', 'High', 'Medium', 'Low']}
            chartData={[65, 59, 40, 40]}
          />
          <Chart 
            title={"Status"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850'
            ]}
            chartLabels={['At Risk', 'On Track', 'New']}
            chartData={[65, 59, 80]}
          />
        </div>
        
    </div>
   );
}
 
export default ProjectDashboard;