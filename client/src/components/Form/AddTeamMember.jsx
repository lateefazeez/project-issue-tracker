
import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const AddTeamMember = (props) => {
 
  const [values, setValues] = useState({ 
    team: []
  })

  const { 
    onClose,
    availableUsers,
    userProjectCreate,
    projectId,
    reload
  } = props

  const handleChange = (event) => {
    //  event.preventDefault()
    let opts = [], opt;
    if (
      event.target.type === "select" || event.target.type === "select-multiple") {
      
      for (let i = 0, len = event.target.options.length; i < len; i++) {
        opt = event.target.options[i];
      
        if (opt.selected) {
          opts.push(opt.value);
        }
      }
      setValues({
        [event.target.name] : opts
      });
      
    }    
  }

  console.log(values)

  const handleSubmit = (e) => {
    e.preventDefault()
      userProjectCreate(values, projectId)
    onClose()
  }
 
  
  return ( 
    <Container fluid>
      <Form className="project__form" onSubmit={handleSubmit}>
      <Label className="form__header">Add Member</Label>
        <FormGroup className="input-select">
          <Label for="team" className="input-labels">Available Users</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" onChange={handleChange}>
          { availableUsers && availableUsers.map((user, index) => (
              <option 
                id={index}
                name="team"
                key={user.id} 
                value={user.id}
                className="input-select"
                >
                  {user.first_name} {user.last_name}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup className="button-container">
          <Button className="submit_btn">Add Selected</Button>
        </FormGroup>
        
      </Form>
    </Container>
   );
}
 
export default AddTeamMember;
