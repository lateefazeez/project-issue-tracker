

const getProjectById = (data, id) => {
  let project = [];
 
  let list = data.projects;
 
  list.forEach((proj) => {
    if (proj.id === id) {
      project.push(proj);
    }
  });

  return project
};



module.exports = {
  getProjectById,
}
