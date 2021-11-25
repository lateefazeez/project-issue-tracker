

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

  return comments
};


const getDevsByTicketId = (data, id) => {
  let devs = [];

  let list = data.userTickets;

  list.forEach((dev) => {
    if (dev.tickets_id === id) {
       let userId = dev.users_id
       let users = data.users;

       users.forEach((person) => {
        if (person.id === userId) {
          devs.push(person)
        }
  });
}
})

  return devs
};


module.exports = {
  getTicketById,
  getTasksByTicketId,
  getDevsByTicketId,
  getCommentsByTicketId,
};
