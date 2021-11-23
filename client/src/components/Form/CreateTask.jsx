import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateTask.scss'



const CreateTask = () => {
  const [task, setTask] = useState("")

  const createTask = () => console.log("New Task Created")

  const handleChange = () => {}

  return ( 
    <Container fluid>
      <Form className="task__form">
        <Label className="form__header">Add New Task</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Task Description</Label>
          <Input className="form-inputs" type="text" name="task" id="task" placeholder="Enter a short task description" bsSize="lg" />
        </FormGroup>
  
        <FormGroup className="button-container">
          <Button className="submit_btn" onClick={createTask}>Add Task</Button>
        </FormGroup>
        
      </Form>
    </Container>
   );
}
 
export default CreateTask;