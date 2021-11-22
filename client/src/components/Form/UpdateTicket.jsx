
import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateTicket.scss'


const UpdateTicket = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [team, setTeam] = useState([])
  const [timeEstimate, setTimeEstimate] = useState("")
  const [category, setCategory] = useState("Issue")
  const [priority, setPriority] = useState("High")
  const [status, setStatus] = useState("On Track")

  const updateCreate = () => console.log("New Ticket Created")

  const handleChange = () => {}
  
  return ( 
    <Container fluid>
      <Form className="ticket__form">
      <Label className="form__header">Update Ticket</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Ticket Title</Label>
          <Input className="form-inputs" type="text" name="title" id="title" placeholder="Enter ticket title" bsSize="lg" value={title} />
        </FormGroup>
        <FormGroup>
          <Label for="description" className="input-labels">Ticket Description</Label>
          <Input className="form-inputs"  type="textarea" name="description" id="description" rows="5" placeholder="Enter description" bsSize="lg" value={description}/>
        </FormGroup>
        <div className="dual__input">
          <FormGroup className="input-select space">
            <Label for="category" className="input-labels">Category</Label>
            <Input className="form-inputs"  type="select" name="category" id="category" bsSize="lg" value={category}>
            <option className="input-select">Issue</option>
            <option className="input-select">Bug</option>
            <option className="input-select">Feature Request</option>
          </Input>
        </FormGroup>
          <FormGroup className="input-select space">
            <Label for="priority" className="input-labels">Priority</Label>
            <Input className="form-inputs"  type="select" name="priority" id="priority" bsSize="lg" value={priority}>
            <option className="input-select">High</option>
            <option className="input-select">Medium</option>
            <option className="input-select">Low</option>
          </Input>
        </FormGroup>
          <FormGroup className="input-select">
            <Label for="status" className="input-labels">Status</Label>
            <Input className="form-inputs"  type="select" name="status" id="status" bsSize="lg" value={status}>
            <option className="input-select">On Track</option>
            <option className="input-select">In Progress</option>
            <option className="input-select">At Risk</option>
          </Input>
        </FormGroup>
          
        </div>

        <div className="dual__input">
        <FormGroup className="input-select spaces">
          <Label for="team" className="input-labels">Update Team Members</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" value={team}>
            <option className="input-select">Fred Flinstone</option>
            <option className="input-select">Barney Rubble</option>
            <option className="input-select">Aman Hundal</option>
            <option className="input-select">Matt Freeman</option>
            <option className="input-select">Lateef Azeez</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="time" className="input-labels">Time Estimate (hours)</Label>
          <Input className="form-inputs" type="text" name="time" id="time" placeholder="Enter estimated hours" bsSize="lg" value={timeEstimate} />
        </FormGroup>
        </div>
        <FormGroup className="button-container">
          <Button className="submit_btn" onClick={updateCreate}>Submit</Button>
        </FormGroup>
       
      </Form>
    </Container>
   );
}
 
export default UpdateTicket;