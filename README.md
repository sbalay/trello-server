## Set up

#### Installing node and yarn
First, get the latest version of node using [nvm](https://github.com/creationix/nvm).
Then, install yarn package manager following this [guide](https://yarnpkg.com/lang/en/docs/install/#linux-tab)

#### Getting the dependencies
Run `yarn install` from rootpath of the project.

## Running the server

From your terminal: `yarn start`

Then, check the contents of the file `db.json` to know the existing data.

## Getting data

You can use an http client like [POSTMAN](https://www.getpostman.com/docs/introduction) to start querying data.

### Users

GET **http://localhost:3000/users**

Filters: `username`

To get one user groups:

GET **http://localhost:3000/user/:user_id/groups**

### Groups

GET **http://localhost:3000/groups**

Filters: `name`

### Messages

GET **http://localhost:3000/messages**

Filters: `senderId` `receiverId` `body` `groupId`

For example, to get chat between two users with ids 1 and 3:

GET **http://localhost:3000/messages?senderId=3&receiverId=1&senderId=1&receiverId=3**

To get messages that belongs to a group:

GET **http://localhost:3000/messages?groupId=1**

### Advanced guide

https://github.com/typicode/json-server#routes

## Creating messages from App

POST **http://localhost:3000/messages**

Body for single messages: {
  body,
  senderId,
  receiverId
}

Body for group messages: {
  body,
  senderId,
  groupId
}

## Creating messages from the terminal

Run the following command: `node send_message.js --body "venga el mensaje" --senderId 4 --receiverId 1`

(*): Make sure the json server is running in port 3000
