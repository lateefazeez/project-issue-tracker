# project-issue-tracker

A project management utility intended for internal use within an organization. Users can create projects and assign/manage team members as well as create and track tickets and issues on the specific project they are working on.

This project is built with react in the front-end and ruby on rails in the back-end. PostgreSQL is used as database to persist all data. Among other tech stacks used are material ui, storybook, reactstrap, react-router, chartjs-2, react-slack-chat.

## Setup

Install docker desktop and make sure it runs on your computer.
Start docker and ensure that it is running on the local machine.

## Start App

1. In the backend folder, create `config/database.yml` by copying `config/database.example.yml`
2. In the root directory, open `start.sh`, comment out line 3 and remove comment from line 2.
3. Run `sh start.sh`(`. start.sh`on Linux) to create, load and seed db, as well as startup both the backend, pg and React front end.
4. Open your browser and go to `localhost:3000`There will be an error message and a button to complete the db migrations, click the button.
5. Go to `localhost:3001` to see the project running
6. Stop the app from running `Ctrl C`.
7. Open `start.sh` again, comment out line 2 and remove comment from line 3.
8. Run `sh start.sh` again to create, load and seed db, as well as startup both the backend, pg and React front end.
9. Get a webhook key from slack by creating a workspace and put inside a .env file based on the .env_example provided

## Running Webpack Development Server

```sh
yarn start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Final Product

!["Screenshot of the Project Dashboard"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.32.40%20PM.png?raw=true)

!["Screenshot of the Project Dashboard 2"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.32.54%20PM.png?raw=true)

!["Screenshot of the Project Dashboard 2"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%201.18.37%20PM.png?raw=true)

!["Screenshot of the Ticket Page"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.35.23%20PM.png?raw=true)

!["Screenshot of the Ticket Page2"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.35.39%20PM.png?raw=true)

!["Screenshot of the Ticket Page3"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.35.49%20PM.png?raw=true)

!["Screenshot of Ticket Creation"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.36.13%20PM.png?raw=true)

!["Screenshot of Team Member Addition"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.36.21%20PM.png?raw=true)

!["Screenshot of New Task Addition"](https://github.com/lateefazeez/project-issue-tracker/blob/master/client/src/images/Screen%20Shot%202021-12-01%20at%2012.36.25%20PM.png?raw=true)

## Dependencies

- Axios
- Node 5.10.x or above
- React 16.4.x or above
- Rails 6.0.0 or above
- React-Material UI
- Reactstrap
- React-slack-chat
- Node-Sass
- React Testing Library
- Storybook Testing App
- Cypress
- Chartjs-2

## Backend Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- PostgreSQL 9.x
