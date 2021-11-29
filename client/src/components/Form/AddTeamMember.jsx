
import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const AddTeamMember = (props) => {
 
  const [values, setValues] = useState(null)

  const { 
    availableUsers,
    userProjectCreate,
    projectId,
  } = props

  const handleChange = (event) => {
    //  event.preventDefault()
      setValues(event.target.value); 
       
  }

  console.log(values, projectId)

  const handleSubmit = (e) => {
    e.preventDefault()
      userProjectCreate(values, projectId)
  }
 
  
  return ( 
    <Container fluid>
      <Form className="project__form">
      <Label className="form__header">Add Member</Label>
        <FormGroup className="input-select">
          <Label for="users_id" className="input-labels">Available Users (click to add)</Label>
          <Input className="form-inputs"  type="select" name="users_id" id="users_id" multiple bsSize="lg" onChange={handleChange}>
          { availableUsers && availableUsers.map((user, index) => (
              <option 
                id={index}
                name="team"
                key={user.id} 
                value={user.id}
                className="input-select"
                onClick={handleSubmit}
                >
                  {user.first_name} {user.last_name}
              </option>
            ))}
          </Input>
        </FormGroup> 
      </Form>
    </Container>
   );
}
 
export default AddTeamMember;
