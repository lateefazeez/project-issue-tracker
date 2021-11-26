const Tickets2 = [
  {
    id: 1,
    title: "Setup ticket list item",
    description: "Setup ticket list item in storybook and front end",
    author: "Barney Rubble",
    startDate: "Tue Nov 23 2021 10:00:00",
    endDate: "Fri Dec 10 2021 14:00:00",
  },
  {
    id: 2,
    title: "Setup task list item",
    description: "Setup task list item in storybook and front end",
    author: "Barney Rubble",
    startDate: "Mon Nov 8 2021 10:00:00",
    endDate: "Fri Nov 26 2021 14:00:00",
  },
  {
    id: 3,
    title: "Setup project list item",
    description: "Setup project list item in storybook and front end",
    author: "Fred Flinststone",
    startDate: "Mon Dec 6 2021 10:00:00",
    endDate: "Mon Dec 20 2021 14:00:00",
  },
];

const Tasks2 = [
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

const TaskProgressCalulator = (TaskData) => {
  let CompletedTasks = 0;
  let TotalTasks = 0;

  //Gets Number of Tasks where value is true
  TaskData.forEach((task) => {
    if (task["percentage_complete"] === true) {
      CompletedTasks += 1;
    }
  });

  //Gets Total Number of Tasks
  TaskData.forEach((task) => {
    if (task["id"]) {
      TotalTasks += 1;
    }
  });

  let progress = (CompletedTasks / TotalTasks) * 100
  
  console.log(progress.toString());
  return progress.toString();
};

 TaskProgressCalulator(Tasks2);


const TicketProgressCalulator = (TicketsData, id) => {


    let instance = Date.now();
    let endDate;
    let startDate;

 //Gets Ticket by Id
 TicketsData.forEach((ticket) => {

  // Get Stat and End Dates for Ticket
  if (ticket["id"] === id) {

    endDate = Date.parse(ticket["endDate"]);
    startDate =  Date.parse(ticket["startDate"]);
  }
});

  //Calculate Time Parameters
    let hundredPercent = endDate - startDate
    let timeElapsed = instance - startDate

    let PercentVal = (timeElapsed / hundredPercent) * 100

    if (PercentVal < 0){
      PercentVal = 0
    } else if (PercentVal > 100){
      PercentVal = 100
    }

    console.log(PercentVal.toString())
    return PercentVal.toString();
}

TicketProgressCalulator(Tickets2, 1)
TicketProgressCalulator(Tickets2, 2)
TicketProgressCalulator(Tickets2, 3)

module.exports = { TaskProgressCalulator, TicketProgressCalulator, Tasks2 ,Tickets2};
