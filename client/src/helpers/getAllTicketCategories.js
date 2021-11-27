

export const getTicketByCategories = (state, cat) => {
  let totalIssues = 0
  for (const ticket of state.tickets) {
    if (ticket.category && ticket.category.toLowerCase() == cat) {
      totalIssues += 1
    }
  }
  return totalIssues
}


export const getTicketByPriority = (state, ticketPriority) => {
  let totalPriority = 0
  for (const ticket of state.tickets) {
    if (ticket.priority && ticket.priority.toLowerCase() == ticketPriority) {
      totalPriority += 1
    }
  }
  return totalPriority
}

export const getTicketByStatus = (state, ticketStatus) => {
  let totalStatus = 0
  for (const ticket of state.tickets) {
    if (ticket.status && ticket.status.toLowerCase() == ticketStatus) {
      totalStatus += 1
    }
  }
  return totalStatus
}

export const getPercentageComplete = (projectData) => {
  let percentComplete;
  for (const project of projectData) {
    percentComplete = project.percentage_complete
  }
  return percentComplete
}

export const getProjectStatus = (targetDate) => {
  let status;
  let today = new Date()
  if (targetDate > today) {
    status = "in progress"
  }
  if (targetDate < today) {
    status = "closed"
  }
  if (targetDate == today) {
    status = "on track"
  }
}
