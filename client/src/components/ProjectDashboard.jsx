import ProjectTable from "./ProjectTable";

import './ProjectDashboard.scss'
import Chart from "./Chart";

const ProjectDashboard = (props) => {

  const { projects } = props

  return ( 
    <div className="project--dashboard">
        <ProjectTable projects={projects}/>
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