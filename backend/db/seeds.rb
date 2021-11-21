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
Ticket.create!({
  start_date: "Jul 21, 2021",
  end_date: "Jul 24,2021",
  plan_duration: 360,
  title: "Appointment List Component",
  description: "Create a tested and 100% developed Appointment feature for the application",
  status: "On Track",
  category: "Feature",
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
  category: "Feature",
  priority: "High",
  percentage_complete: 0,
  projects_id: 1,
  users_id: 2
})
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
  tickets_id: 1
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
puts "Seeding Successful!..."