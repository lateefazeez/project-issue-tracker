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
  first_name: "Jerry",
  last_name: "Seinfeld",
  email: "jerry@gmail.com",
  password: "password",
  phone_number: "555-555-5555",
  admin: true
})
User.create({
  first_name: "George",
  last_name: "Costanza",
  email: "george@gmail.com",
  password: "password",
  phone_number: "555-555-5544",
  admin: false
})
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
User.create({
  first_name: "Bill",
  last_name: "Murray",
  email: "bill@gmail.com",
  password: "spud",
  phone_number: "555-555-5544",
  admin: false
})

Project.destroy_all
Project.create!({
  title: "Project tracking app",
  description: "A project management utility intended for internal use within an organization.",
  start_date: "Aug 19, 2021",
  end_date: "Dec 20, 2021",
  percentage_complete: 0,
  status: "on track",
  users_id: 1
})
Project.create!({
  title: "Scheduler app",
  description: "Scheduler is a single page React App developed for booking interviews in Lighthouse",
  start_date: "Jul 20, 2021",
  end_date: "Sept 20, 2021",
  percentage_complete: 0,
  status: "on track",
  users_id: 2
})
Project.create!({
  title: "Wikimap app",
  description: "WikiMap is a user friendly clone of google my-map",
  start_date: "Jul 14, 2021",
  end_date: "Oct 20, 2021",
  percentage_complete: 0,
  status: "on track",
  users_id: 1
})
Project.create!({
  title: "Tweeter Clone",
  description: "Tweeter is a simple, single-page Twitter clone.",
  start_date: "Jul 14, 2021",
  end_date: "Oct 20, 2021",
  percentage_complete: 0,
  status: "on track",
  users_id: 2
})

Ticket.destroy_all
Ticket.create!({
  start_date: "Nov 21, 2021",
  end_date: "Jan 24, 2022",
  plan_duration: 0,
  title: "Edit Ticket selection bug",
  description: "Ticket data is not re-rendering after ticket is edited",
  status: "On Track",
  category: "Bug",
  priority: "Low",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 1
})
Ticket.create!({
  start_date: "Nov 02, 2021",
  end_date: "Dec 22, 2021",
  plan_duration: 0,
  title: "Pass user id for comments and ticket anuthor",
  description: "User Id needed on tickets page for comments to display Author",
  status: "At Risk",
  category: "Issue",
  priority: "Medium",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
})
Ticket.create!({
  start_date: "Oct 15, 2021",
  end_date: "Feb 24,2021",
  plan_duration: 0,
  title: "Add team members from projects to tickets on the fly",
  description: "New feature needed to add project team members to a ticket",
  status: "On Track",
  category: "Feature",
  priority: "High",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 1
})
Ticket.create!({
  start_date: "Oct 22, 2021",
  end_date: "Jan 29, 2021",
  plan_duration: 0,
  title: "Collapsible Ticket Zone",
  description: "Make Tickets info collapse and only show when a ticket is selected",
  status: "At Risk",
  category: "Feature",
  priority: "Medium",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
})

puts "Seeding Successful!..."