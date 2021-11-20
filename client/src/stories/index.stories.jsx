import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TicketListItem from "../components/TicketListItem";
import TeamListItem from "../components/TeamListItem";
import TaskListItem from "../components/TaskListItem";
import CommentListItem from "../components/CommentListItem";
import ProjectListItem from "../components/ProjectListItem";
import TaskList from "../components/TaskList";

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
  .add("Unselected", () => <TaskListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <TaskListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" selected />) 
  .add("Clickable", () => (
    <TaskListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" setTicket={action("setTicket")} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));

  storiesOf("CommentListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component
  .add("Unselected", () => <CommentListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <CommentListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" selected />) 
  .add("Clickable", () => (
    <CommentListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" setTicket={action("setTicket")} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));

  storiesOf("ProjectListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component
  .add("Unselected", () => <ProjectListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <ProjectListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" selected />) 
  .add("Clickable", () => (
    <ProjectListItem first_name="Barney" last_name="Rubble" email="Brub@gmail.com" setTicket={action("setTicket")} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));


  const Tasks = [
    {
      id: 1,
      title: "Monday",
      percentage_complete: 20,
    },
    {
      id: 2,
      title: "Tuesday",
      percentage_complete: 50,
    },
    {
      id: 3,
      title: "Wednesday",
      percentage_complete: 0,
    },
  ];
  
  storiesOf("TaskList", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
    })
    .add("List of tasks", () => (
        <TaskList  value={"Wednesday"} onChange={action("setTask")} />
    ));