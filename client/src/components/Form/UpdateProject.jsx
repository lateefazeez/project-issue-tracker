import { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const UpdateProject = (props) => {
  const { 
    projectData, 
    updateProject, 
    onClose, 
    id,
    users
  } = props
  
  const [project, setProject] = useState({
    title: projectData.title,
    description: projectData.description,
    start_date: projectData.start_date,
    end_date: projectData.end_date,
    percentage_complete: projectData.percentage_complete,
    team: projectData.team
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedProject = {
      title: project.title,
      description: project.description,
      start_date: project.start_date,
      end_date: project.end_date,
      percentage_complete: project.percentage_complete,
      team: project.team
    }
    updateProject(updatedProject, id)
    onClose()
  }

  const handleChange = (e) => { 
    setProject({
      ...project,
      [e.target.id] : e.target.value
    })
  }

  const projectUsers = (projectObject) => {
    return users.filter((user) => user.projects_id === projectObject.id)
  }


  
  return ( 
    <Container fluid>
      <Form className="project__form">
      <Label className="form__header">Update Project</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Project Title</Label>
          <Input className="form-inputs" type="text" name="title" id="title" placeholder="Enter project title" bsSize="lg" value={project.title} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="description" className="input-labels">Project Description</Label>
          <Input className="form-inputs"  type="textarea" name="description" id="description" rows="5" placeholder="Enter description" bsSize="lg" value={project.description} onChange={handleChange}/>
        </FormGroup>
        <div className="date__input">
          <FormGroup className="start__date">
            <Label for="start_date" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start_date" id="start_date" placeholder="date placeholder" bsSize="lg" value={project.start_date} onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="end_date" className="input-labels">Target Date</Label>
            <Input className="form-inputs"  type="date" name="end_date" id="end_date" placeholder="date placeholder" bsSize="lg" value={project.end_date} onChange={handleChange}/>
          </FormGroup>
        </div>

        <FormGroup>
          <Label for="percentage_complete" className="input-labels">Progress in %</Label>
          <Input className="form-inputs" type="text" name="percentage_complete" id="percentage_complete" placeholder="Enter current progress" bsSize="lg" value={project.percentage_complete} onChange={handleChange}/>
        </FormGroup>
        
        <FormGroup className="input-select">
          <Label for="team" className="input-labels">Update Team Members</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" value={project.team}>
            { projectUsers(project) && projectUsers(project).map((member) => {
              return <option className="input-select">{member.first_name} {member.last_name}</option>})
            }
          </Input>
        </FormGroup>
        <FormGroup className="button-container">
          <Button className="submit_btn" onClick={handleSubmit}>Submit</Button>
        </FormGroup>
        
      </Form>
    </Container>
   );
}
 
export default UpdateProject;