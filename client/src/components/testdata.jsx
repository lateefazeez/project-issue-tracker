const Tasks = [
  {
    id: 1,
    title: "Do work",
    percentage_complete: true,
  },
  {
    id: 2,
    title: "Work harder",
    percentage_complete: false,
  },
  {
    id: 3,
    title: "die from overwork",
    percentage_complete: false,
  },
  {
    id: 4,
    title: "scroll me",
    percentage_complete: true,
  },
  {
    id: 5,
    title: "scroll me too!",
    percentage_complete: false,
  },

];

const Teams = [
  {
    id: 1,
    first_name: "Fred",
    last_name: 'Flintstone',
    email: "fred@gmail.com",
  },
  {
    id: 2,
    first_name: "Barney",
    last_name: 'Rubble',
    email: "barney@gmail.com",
  },
  {
    id: 3,
    first_name: "Bambam",
    last_name: 'Rubble',
    email: "bam@gmail.com",
  },
  {
    id: 4,
    first_name: "Betty",
    last_name: 'Rubble',
    email: "Betty@gmail.com",
  },
  {
    id: 5,
    first_name: "Wilama",
    last_name: 'Flintstone',
    email: "Fred@gmail.com",
  },
];

const Tickets = [
  {
  id: 1,
  title: "Setup ticket list item",
  description: "Setup ticket list item in storybook and front end",
  author: "Barney Rubble",
},
{
  id: 2,
  title: "Setup task list item",
  description: "Setup task list item in storybook and front end",
  author: "Barney Rubble",
},
{
  id: 3,
  title: "Setup project list item",
  description: "Setup project list item in storybook and front end",
  author: "Fred Flinststone",
},
];

const Comments = [
  {
  id: 1,
  author: "Barney Rubble",
  message: "this is a long project",
},
{
  id: 2,
  author: "Barney Rubble",
  message: "this is a hard project",
},
{
  id: 3,
  author: "Fred Flinststone",
  message: "breakin rocks at the quarry",
},
{
  id: 4,
  author: "Fred Flinststone",
  message: "yabba dabba doooo",
},
];

const Projects = [
  {
  id: 1,
  title: "Setup ticket list item",
  description: "Setup ticket list item in storybook and front end",
  status: "On Track",
  percentage_complete: 25,
},
{
  id: 2,
  title: "Setup task list item",
  description: "Setup task list item in storybook and front end",
  status: "At Risk",
  percentage_complete: 50,
},
{
  id: 3,
  title: "Setup project list item",
  description: "Setup project list item in storybook and front end",
  status: "On Track",
  percentage_complete: 99,
},
];

module.exports = { Tasks, Teams, Tickets, Comments, Projects}