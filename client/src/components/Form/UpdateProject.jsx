import { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const UpdateProject = (props) => {
  const { 
    projectData, 
    updateProject, 
    onClose, 
    id

  } = props
  

  const [project, setProject] = useState({
    title: projectData.title,
    description: projectData.description,
    start_date: projectData.start_date,
    target_date: projectData.target_date,
    team: projectData.team
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedProject = {
      title: project.title,
      description: project.description,
      start_date: project.start_date,
      target_date: project.target_date,
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
            <Label for="start" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start" id="start" placeholder="date placeholder" bsSize="lg" value={project.start_date} onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="target" className="input-labels">Target Date</Label>
            <Input className="form-inputs"  type="date" name="target" id="target" placeholder="date placeholder" bsSize="lg" value={project.target_date} onChange={handleChange}/>
          </FormGroup>
        </div>

        <FormGroup>
          <Label for="progress" className="input-labels">Progress in %</Label>
          <Input className="form-inputs" type="text" name="progress" id="progress" placeholder="Enter current progress" bsSize="lg" value={project.percentage_complete} onChange={handleChange}/>
        </FormGroup>
        
        <FormGroup className="input-select">
          <Label for="team" className="input-labels">Update Team Members</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" value={project.team}>
            { project.team && project.team.map((member) => {
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