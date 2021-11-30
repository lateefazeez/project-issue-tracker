const getProjectPercentComplete = (data, projId) => {
  let countCompleteTask = 0;
  let countTask = 0;
  let projectPercent = 0;

  data.projects.forEach((proj) => {
    if (proj.id === projId) {
      data.tickets.forEach((tick) => {
        if (proj.id === tick.projects_id) {
          data.tasks.forEach((task) => {
            
            if (tick.id === task.tickets_id) {

              countTask += 1;
              
              if (task["complete?"]) {
                countCompleteTask += 1;
              }
            }
          });
        }
      });
      console.log("completes are", countCompleteTask, "count is", countTask)

      if (countTask === 0) {
         return projectPercent = 0
      }
      projectPercent = (countCompleteTask / countTask) * 100;
    }
  });
  console.log("test 1", projectPercent)
  return projectPercent;
};

module.exports = {
  getProjectPercentComplete,
};
