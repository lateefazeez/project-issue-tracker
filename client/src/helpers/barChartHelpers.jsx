
const TaskProgressCalulator = (taskData) => {

  if (taskData.length > 0) {

  let CompletedTasks = 0;
  let TotalTasks = 0;

  // //Gets Number of Tasks where value is true
  taskData.forEach((task) => {
  
    if (task['complete?'] === true) {
      CompletedTasks += 1;
    }
  });

  //Gets Total Number of Tasks
  taskData.forEach((task) => {
    if (task["id"]) {
      TotalTasks += 1;
    }
  });

  const progress = Math.floor((CompletedTasks / TotalTasks) * 100)

  return progress.toString();
}
    return "0";
};


 
const TicketProgressCalulator = (ticketsData) => {

  if (ticketsData.length > 0) {
    let instance = Date.now();
    let endDate = Date.parse(ticketsData[0].end_date);
    let startDate = Date.parse(ticketsData[0].start_date);
  
  //Calculate Time Parameters
    let hundredPercent = endDate - startDate
    let timeElapsed = instance - startDate

    let PercentVal = (timeElapsed / hundredPercent) * 100

    if (PercentVal < 0){
      PercentVal = 0
    } else if (PercentVal > 100){
      PercentVal = 100
    }

    return PercentVal.toString();
}
      return "0";
}

module.exports = { TaskProgressCalulator, TicketProgressCalulator };
