import { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./CreateTask.scss";

const CreateTask = (props) => {
  const [task, setTask] = useState({});

  const { onClose, taskCreate, ticketId } = props;

  console.log(ticketId);

  const handleChange = (e) => {
    e.preventDefault();

    setTask(Object.assign({}, task, { [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.title) {
      taskCreate(task, ticketId[0].id);
      onClose();
    }
    return;
  };

  return (
    <Container fluid>
      <Form className="task__form">
        <Label className="form__header">Add New Task</Label>
        <FormGroup>
          <Label for="title" className="input-labels">
            Task Description
          </Label>
          <Input
            className="form-inputs"
            type="text"
            name="title"
            id="title"
            value={task.title}
            placeholder="Enter a short task description"
            bsSize="lg"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="button-container">
          <Button className="submit_btn" onClick={handleSubmit}>
            Add Task
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default CreateTask;
