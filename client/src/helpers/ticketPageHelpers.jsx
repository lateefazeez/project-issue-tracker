
const getTicketById = (data, id) => {
  let ticket = [];
 
  let list = data.tickets;
 
  list.forEach((tick) => {
    if (tick.id === id) {
      ticket.push(tick);
    }
  });

  return ticket
};

const getTasksByTicketId = (data, id) => {
  let tasks = [];
  console.log("DATA_ID: ", data, id)
  let list = data.tasks;

  list.forEach((task) => {
    if (task.tickets_id === id) {
      tasks.push(task);
    }
  });


  return tasks
};

const getCommentsByTicketId = (data, id) => {
  let comments = [];

  let list = data.comments;

  list.forEach((comment) => {
    if (comment.tickets_id === id) {
      comments.push(comment);
    }
  });

    const revisedComments = comments.map((comment) => {
      let resultingData = {...comment};

      const foundUser = data.users.find((user) => {
        if (user.id === comment.users_id) {
          return user.first_name + " " + user.last_name;
        }
      });
      resultingData.author = foundUser || null;

      return resultingData;
    });
 
    return revisedComments
};


const getDevsByTicketId = (data, id) => {
  let devs = [];

  console.log("what are these", id)

  let list = data.userTickets;
    
  list.forEach((dev) => {
    if (dev.tickets_id === id) {
       let userId = dev.users_id
       let users = data.users;

       users.forEach((person) => {
        if (person.id === userId) {
          const devObj = {devId: dev.id, ...person}
          devs.push(devObj)
        }
  });
}
})

  return devs
};

const updateStatus = ( TimeBarVal, TaskbarVal ) => {

  let status
 
      if (Math.floor(TimeBarVal) > TaskbarVal){
        status = "AT RISK"
      } else {
        status = "On Track"
      }
    
    return status
}


module.exports = {
  getTicketById,
  getTasksByTicketId,
  getDevsByTicketId,
  getCommentsByTicketId,
  updateStatus,
};
