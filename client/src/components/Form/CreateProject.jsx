import { useState, useEffect } from 'react'
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button
// } from 'reactstrap';
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const CreateProject = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [team, setTeam] = useState([])

  const createProject = () => console.log("New Project Created")

  const handleChange = () => {}
  
  return ( 
    <Container fluid>
      <Form className="project__form">
      <Label className="form__header">Add New Project</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Project Title</Label>
          <Input className="form-inputs" type="text" name="title" id="title" placeholder="Enter project title" bsSize="lg" />
        </FormGroup>
        <FormGroup>
          <Label for="description" className="input-labels">Project Description</Label>
          <Input className="form-inputs"  type="textarea" name="description" id="description" rows="5" placeholder="Enter description" bsSize="lg"/>
        </FormGroup>
        <div className="date__input">
          <FormGroup className="start__date">
            <Label for="start" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start" id="start" placeholder="date placeholder" bsSize="lg" />
          </FormGroup>
          <FormGroup>
            <Label for="start" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start" id="start" placeholder="date placeholder" bsSize="lg" />
          </FormGroup>
        </div>
        
        <FormGroup className="input-select">
          <Label for="team" className="input-labels">Add Team Members</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg">
            <option className="input-select">Fred Flinstone</option>
            <option className="input-select">Barney Rubble</option>
            <option className="input-select">Aman Hundal</option>
            <option className="input-select">Matt Freeman</option>
            <option className="input-select">Lateef Azeez</option>
          </Input>
        </FormGroup>
        <FormGroup className="button-container">
          <Button className="submit_btn">Submit</Button>
        </FormGroup>
        
      </Form>

      
      
      {/* <Form onSubmit={createProject} className="project__form">
      <Label className="form__header">Add New Project</Label>
        <Row>
          <Col>
            <FormGroup>
              <Label
                htmlFor="title"
                className="lease-form-label mandatory-entry" 
              >
                Project Title
              </Label>
              <Input
                id="title"
                type="text"
                name="title"
                className="lease-form-input"
                placeholder="Enter project title"
                value={ title } 
                onChange={ handleChange }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label
                htmlFor="description"
              >
                Project Description
              </Label>
              <Input
                id="description"
                type="textarea"
                name="description"
                className="lease-form-input"
                placeholder="Enter description"
                value={ description } 
                onChange={ handleChange }
                rows="10"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label
                htmlFor="team"
              >
                Add Team Members
              </Label>
              <Input
                id="team"
                type="select"
                name="team"
                value={ team } 
                onChange={ handleChange }
                multiple
              >

              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button color="success" type="submit">
          Submit
        </Button>
      </Form> */}
    </Container>
   );
}
 
export default CreateProject;