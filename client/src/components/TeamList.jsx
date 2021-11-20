
import React from "react";
import TaskListItem from "./TaskListItem";


const ListMaker = (props) => {
  //const list = props.days.map((day) => {
    return (
      <TaskListItem/>
    );
  //});

  return <ul>{list}</ul>;
}
 
export default ListMaker;
