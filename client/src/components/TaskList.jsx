
import React from "react";
import TaskListItem from "./TaskListItem";

const Tasks = [
  {
    id: 1,
    title: "Do work",
    percentage_complete: '20%',
  },
  {
    id: 2,
    title: "Work harder",
    percentage_complete: '50%',
  },
  {
    id: 3,
    title: "die from overwork",
    percentage_complete: '60%',
  },
];


const ListMaker = () => {
  const list = Tasks.map((task) => {
    return (
      <TaskListItem
      key={task.id}
      title={task.title}
      percentage_complete={task.percentage_complete}
      />
    );
  });

  return <ul>{list}</ul>;
}
 
export default ListMaker;


