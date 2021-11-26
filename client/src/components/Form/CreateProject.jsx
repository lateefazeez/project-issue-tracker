import axios from 'axios';
import { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateProject.scss'


const CreateProject = (props) => {
  const [values, setValues] = useState({ 
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    team: []
  })

  const { 
    onClose, 
    createProject,
    addTeamMember,
    users
  } = props

  const handleChange = (event) => {
    // e.preventDefault()
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
        ...values,
        [event.target.name] : opts
      });
      
    } else {
      opt = event.target.value

      setValues({
        ...values,
        [event.target.name] : opt
      });
    }

  }

  // const handleChangeMulti = (e) => {
  //   let opts = [], opt;
  //   for (let i = 0, len = e.target.options.length; i < len; i++) {
  //     opt = e.target.options[i];
      
  //     if (opt.selected) {
  //       opts.push(opt.value);
  //     }
  //   }
  //   setValues({
  //     ...values,
  //     [e.target.name] : opts
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProject(values)
    .then(response => {
      if (response) {
        addTeamMember(values.team, JSON.stringify(response.id))
      }
    })
    // addTeamMembersToProject()
    onClose()
  }
 


  
  return ( 
    <Container fluid>
      <Form className="project__form" onSubmit={handleSubmit}>
        <Label className="form__header">Add New Project</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Project Title</Label>
          <Input className="form-inputs" type="text" name="title" id="title" placeholder="Enter project title" bsSize="lg" onChange={handleChange} value={values.title}/>
        </FormGroup>
        <FormGroup>
          <Label for="description" className="input-labels">Project Description</Label>
          <Input className="form-inputs"  type="textarea" name="description" id="description" rows="3" placeholder="Enter description" bsSize="lg" onChange={handleChange} value={values.description}/>
        </FormGroup>
        <div className="date__input">
          <FormGroup className="start__date">
            <Label for="start_date" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start_date" id="start_date" placeholder="date placeholder" bsSize="lg" onChange={handleChange} value={values.start_date}/>
          </FormGroup>
          <FormGroup>
            <Label for="end_date" className="input-labels">Target Date</Label>
            <Input className="form-inputs"  type="date" name="end_date" id="end_date" placeholder="date placeholder" bsSize="lg" onChange={handleChange} value={values.end_date}/>
          </FormGroup>
        </div>
        
        <FormGroup className="input-select">
          <Label for="team" className="input-labels">Add Team Members</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" onChange={handleChange}>
            { users && users.map((user, index) => (
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
          <Button className="submit_btn">Submit</Button>
        </FormGroup>
        
      </Form>
    </Container>
   );
}
 
export default CreateProject;