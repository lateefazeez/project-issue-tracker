# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data..."
User.destroy_all
User.create({
  first_name: "Barney",
  last_name: "Rubble",
  email: "barney@gmail.com",
  password: "password",
  phone_number: "555-555-5555",
  admin: true
})
User.create({
  first_name: "Fred",
  last_name: "Flinstone",
  email: "fred@gmail.com",
  password: "password",
  phone_number: "555-555-5544",
  admin: false
})

Project.destroy_all
Project.create!({
  title: "Project tracking app",
  description: "hahahahahahahahahahahahahah",
  start_date: "Aug 19, 2021",
  end_date: "Nov 25, 2021",
  percentage_complete: 50,
  status: "on track",
  users_id: 1
})
Project.create!({
  title: "Scheduler app",
  description: "hahahahahahahahahahahahahah",
  start_date: "Jul 20, 2021",
  end_date: "Sept 20, 2021",
  percentage_complete: 75,
  status: "on track",
  users_id: 2
})
Project.create!({
  title: "Wikimap app",
  description: "hahahahahahahahahahahahahah",
  start_date: "Jul 14, 2021",
  end_date: "Oct 20, 2021",
  percentage_complete: 75,
  status: "on track",
  users_id: 1
})

Ticket.destroy_all
Ticket.create!({
  start_date: "Jul 21, 2021",
  end_date: "Jul 24,2021",
  plan_duration: 360,
  title: "Appointment List Component",
  description: "Create a tested and 100% developed Appointment feature for the application",
  status: "On Track",
  category: "Feature Request",
  priority: "Low",
  percentage_complete: 75,
  projects_id: 2,
  users_id: 1
})
Ticket.create!({
  start_date: "Jul 20, 2021",
  end_date: "Jul 22, 2021",
  plan_duration: 137,
  title: "Setup ticket list item",
  description: "Setup ticket list item",
  status: "At Risk",
  category: "Bug",
  priority: "High",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
})
Ticket.create!({
  start_date: "Jul 21, 2021",
  end_date: "Jul 24,2021",
  plan_duration: 360,
  title: "Appointment List Component",
  description: "Create a tested and 100% developed Appointment feature for the application",
  status: "On Track",
  category: "Feature Request",
  priority: "Low",
  percentage_complete: 75,
  projects_id: 2,
  users_id: 1
})
Ticket.create!({
  start_date: "Sept 20, 2021",
  end_date: "Nov 22, 2021",
  plan_duration: 137,
  title: "What is Lorem Ipsum?",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  status: "At Risk",
  category: "Feature Request",
  priority: "High",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
})
Ticket.create!({
  start_date: "Nov 21, 2021",
  end_date: "Dec 22,2021",
  plan_duration: 360,
  title: "Where does it come from?",
  description: "Contrary to popular belief, Lorem Ipsum is not simply random text",
  status: "On Track",
  category: "Feature Request",
  priority: "Low",
  percentage_complete: 75,
  projects_id: 2,
  users_id: 1
})
Ticket.create!({
  start_date: "Jul 20, 2021",
  end_date: "Jul 22, 2021",
  plan_duration: 137,
  title: "Why do we use it?",
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  status: "At Risk",
  category: "Issue",
  priority: "Medium",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
})
Ticket.create!({
  start_date: "Jul 21, 2021",
  end_date: "Jul 24,2021",
  plan_duration: 360,
  title: "Appointment List Component",
  description: "Create a tested and 100% developed Appointment feature for the application",
  status: "On Track",
  category: "Feature Request",
  priority: "Low",
  percentage_complete: 75,
  projects_id: 2,
  users_id: 1
})
Ticket.create!({
  start_date: "Jul 20, 2021",
  end_date: "Jul 22, 2021",
  plan_duration: 137,
  title: "Where can I get some?",
  description: "There are many variations of passages of Lorem Ipsum available",
  status: "At Risk",
  category: "Bug",
  priority: "Medium",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
})

Task.destroy_all
Task.create!({
  title: "Generate component",
  complete?: false,
  tickets_id: 2
})
Task.create!({
  title: "Generate component",
  complete?: true,
  tickets_id: 1
})
Task.create!({
  title: "Perform unit testing",
  complete?: true,
  tickets_id: 3
})
Task.create!({
  title: "Perform storybook testing",
  complete?: true,
  tickets_id: 1
})
Task.create!({
  title: "Perform cypress testing",
  complete?: false,
  tickets_id: 1
})
Comment.create!({
  message: "Hellooo 2",
  tickets_id: 2,
  users_id: 1
})
Comment.create!({
  message: "Hellooo 1",
  tickets_id: 1,
  users_id: 2
})
Comment.create!({
  message: "Hellooo 3",
  tickets_id: 3,
  users_id: 1
})
UserTicket.create!({
  tickets_id: 2,
  users_id: 1
})
UserTicket.create!({
  tickets_id: 3,
  users_id: 1
})
UserTicket.create!({
  tickets_id: 2,
  users_id: 2
})
UserTicket.create!({
  tickets_id: 1,
  users_id: 1
})
UserTicket.create!({
  tickets_id: 3,
  users_id: 2
})
puts "Seeding Successful!..."