import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TicketListItem from "../components/TicketListItem";
import TeamListItem from "../components/TeamListItem";
import TaskListItem from "../components/TaskListItem";
import CommentListItem from "../components/CommentListItem";
import ProjectListItem from "../components/ProjectListItem";
import TaskList from "../components/List";

  storiesOf("TicketListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component
  .add("Unselected", () => <TicketListItem title="Setup ticket list item" status="At Risk" />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <TicketListItem title="Setup ticket list item" status="At Risk" selected />) 
  .add("Clickable", () => (
    <TicketListItem title="Setup ticket list item" setTicket={action("setTicket")} status="At Risk" /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));


  storiesOf("TeamListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component
  .add("Unselected", () => <TeamListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <TeamListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" selected />) 
  .add("Clickable", () => (
    <TeamListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" setTicket={action("setTicket")} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));
    
  storiesOf("TaskListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component
  .add("Unselected", () => <TaskListItem title="Do work" percentage_complete='50%' />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <TaskListItem title="Do work" percentage_complete='50%' selected />) 
  .add("Clickable", () => (
    <TaskListItem title="Do work" percentage_complete='50%' setTicket={action("setTicket")} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));

  storiesOf("CommentListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component
  .add("Unselected", () => <CommentListItem author="Barney" message="life is rocky" />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <CommentListItem author="Barney" message="life is rocky" selected />) 
  .add("Clickable", () => (
    <CommentListItem author="Barney" message="life is rocky" setTicket={action("setTicket")} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));

  storiesOf("ProjectListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component
  .add("Unselected", () => <ProjectListItem title="Setup ticket list item" description="Setup ticket list item in storybook and front end" status="On Track" percentage_complete="25%" />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <ProjectListItem title="Setup ticket list item" description="Setup ticket list item in storybook and front end" status="On Track" percentage_complete="25%" selected />) 
  .add("Clickable", () => (
    <ProjectListItem title="Setup ticket list item" description="Setup ticket list item in storybook and front end" status="On Track" percentage_complete="25%" setTicket={action("setTicket")} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));
  
  storiesOf("List", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
    })
    .add("List of tasks", () => (
        <TaskList  value={"Wednesday"} onChange={action("setTask")} />
  ));