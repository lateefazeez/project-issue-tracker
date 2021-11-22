
import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const AddTeamMember = (props) => {
  const [team, setTeam] = useState([])

  const addMembers = () => console.log("New Member Added")
  
  return ( 
    <Container fluid>
      <Form className="project__form">
      <Label className="form__header">Add Member</Label>
        <FormGroup className="input-select">
          <Label for="team" className="input-labels">Available Users</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" >
            <option className="input-select">Fred Flinstone</option>
            <option className="input-select">Barney Rubble</option>
            <option className="input-select">Aman Hundal</option>
            <option className="input-select">Matt Freeman</option>
            <option className="input-select">Lateef Azeez</option>
          </Input>
        </FormGroup>
        <FormGroup className="button-container">
          <Button className="submit_btn" onClick={addMembers}>Add Selected</Button>
        </FormGroup>
        
      </Form>
    </Container>
   );
}
 
export default AddTeamMember;
