import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const CreateProject = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [team, setTeam] = useState([])
  const [startDate, setStartDate] = useState("2021-01-01")
  const [targetDate, setTargetDate] = useState("2030-01-01")

  const createProject = () => console.log("New Project Created")

  const handleChange = () => {}
  
  return ( 
    <Container fluid>
      <Form className="project__form">
      <Label className="form__header">Add New Project</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Project Title</Label>
          <Input className="form-inputs" type="text" name="title" id="title" placeholder="Enter project title" bsSize="lg" value={title} />
        </FormGroup>
        <FormGroup>
          <Label for="description" className="input-labels">Project Description</Label>
          <Input className="form-inputs"  type="textarea" name="description" id="description" rows="5" placeholder="Enter description" bsSize="lg" value={description}/>
        </FormGroup>
        <div className="date__input">
          <FormGroup className="start__date">
            <Label for="start" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start" id="start" placeholder="date placeholder" bsSize="lg" value={startDate}/>
          </FormGroup>
          <FormGroup>
            <Label for="target" className="input-labels">Target Date</Label>
            <Input className="form-inputs"  type="date" name="target" id="target" placeholder="date placeholder" bsSize="lg" value={targetDate}/>
          </FormGroup>
        </div>
        
        <FormGroup className="input-select">
          <Label for="team" className="input-labels">Add Team Members</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" >
            <option className="input-select">Fred Flinstone</option>
            <option className="input-select">Barney Rubble</option>
            <option className="input-select">Aman Hundal</option>
            <option className="input-select">Matt Freeman</option>
            <option className="input-select">Lateef Azeez</option>
          </Input>
        </FormGroup>
        <FormGroup className="button-container">
          <Button className="submit_btn" onClick={createProject}>Submit</Button>
        </FormGroup>
        
      </Form>
    </Container>
   );
}
 
export default CreateProject;