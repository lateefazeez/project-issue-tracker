import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ProjectList.scss';

const ProjectListItem = (props) => {
  const {title, description, progress, status, team, selected} = props;
  return (
    <tr onClick={() => console.log('Clicked Project')}>
      <td >{title}</td>
      <td>{description}</td>
      <td>{progress}</td>
      <td>{status}</td>
      <td className="team">{team}</td>
      <td><MoreVertIcon /></td>
    </tr>
  )
}


export default ProjectListItem;