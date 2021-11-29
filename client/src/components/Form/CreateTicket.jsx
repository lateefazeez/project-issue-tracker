import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './CreateTicket.scss'


const CreateTicket = (props) => {
  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")
  // const [team, setTeam] = useState([])
  // const [timeEstimate, setTimeEstimate] = useState("")
  // const [category, setCategory] = useState("Issue")
  // const [priority, setPriority] = useState("High")
  // const [status, setStatus] = useState("On Track")
  // const [start_date, setStartDate] = useState("")
  // const [end_date, setEndDate] = useState("")
  const [ticket, setTicket] = useState({});

  const { createTicket, projectId, onClose } = props;
 
  const loggedInUserId = window.sessionStorage.getItem("userId")

  const handleChange = (e) => {
    e.preventDefault()
    setTicket(Object.assign({}, ticket, {[e.target.name]: e.target.value}, {projects_id: projectId},  {users_id: loggedInUserId}, {duration: duration}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    createTicket(ticket)
    onClose()
  }

  //new
  const estimatedhours = (start, end) => {

    if (!start || !end){
      return
    }

    let hundredPercent = Date.parse(end) - Date.parse(start)
    let hours = Math.floor(hundredPercent / (1000 * 60 * 60));

    return hours;

}
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setDuration(estimatedhours(ticket.start, ticket.end_date))
  }, [ticket.start]);

  useEffect(() => {
    setDuration(estimatedhours(ticket.start, ticket.end_date))
  }, [ticket.end_date]);


  return ( 
    <Container fluid>
      <Form className="ticket__form" onSubmit={handleSubmit}>
      
      <Label className="form__header">Add New Ticket</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Ticket Title</Label>
          <Input className="form-inputs" type="text" name="title" id="title" placeholder="Enter ticket title" bsSize="lg"  onChange={handleChange} value={ticket.title} />
        </FormGroup>
        <FormGroup>
          <Label for="description" className="input-labels">Ticket Description</Label>
          <Input className="form-inputs"  type="textarea" name="description" id="description" rows="2" placeholder="Enter description" bsSize="lg" onChange={handleChange} value={ticket.description}/>
        </FormGroup>
        <div className="date__input">
          <FormGroup className="start__date">
            <Label for="start" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start" id="start" placeholder="date placeholder" bsSize="lg" onChange={handleChange} value={ticket.start}/>
          </FormGroup>
          <FormGroup>
            <Label for="end_date" className="input-labels">End Date</Label>
            <Input className="form-inputs"  type="date" name="end_date" id="end_date" placeholder="date placeholder" bsSize="lg" onChange={handleChange} value={ticket.end_date}/>
          </FormGroup>
        </div>
        <div className="dual__input">
          <FormGroup className="input-select space">
            <Label for="category" className="input-labels">Category</Label>
            <Input className="form-inputs"  type="select" name="category" id="category" bsSize="lg" onChange={handleChange} value={ticket.category}>
            <option className="input-select">Select</option>
            <option className="input-select">Issue</option>
            <option className="input-select">Bug</option>
            <option className="input-select">Feature</option>
          </Input>
        </FormGroup>
          <FormGroup className="input-select space">
            <Label for="priority" className="input-labels">Priority</Label>
            <Input className="form-inputs"  type="select" name="priority" id="priority" bsSize="lg" onChange={handleChange} value={ticket.priority}>
            <option className="input-select">Select</option>
            <option className="input-select">High</option>
            <option className="input-select">Medium</option>
            <option className="input-select">Low</option>
          </Input>
        </FormGroup>
        </div>

        <div className="dual__input">
        <FormGroup>
          <Label for="duration" className="input-labels">Time Estimate (hours)</Label>
          <Input className="form-inputs" type="text" name="duration" id="duration" placeholder="Enter estimated hours" bsSize="lg" onChange={handleChange} value={duration} />
        </FormGroup>
        </div>
        <FormGroup className="button-container">
          <Button className="submit_btn">Submit</Button>
        </FormGroup>
       
      </Form>
    </Container>
   );
}
 
export default CreateTicket;