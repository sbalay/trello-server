const fs = require('fs');
const faker = require('faker');

const USERS_COUNT = 100;
const BOARDS_COUNT = 20;
const USERS_PER_BOARD = 15;
const COLUMNS_PER_BOARD = 4;
const CARDS_PER_COLUMN = 6;

const data = { users: [], userBoards: [], boards: [], columns: [], cards: [] }

for (let userIndex = 0; userIndex < USERS_COUNT; userIndex++) {
  // create users
  data.users.push({
    id: userIndex,
    name: faker.name.findName(),
    avatarUrl: faker.image.avatar()
  });
}

for (let boardIndex = 0; boardIndex < BOARDS_COUNT; boardIndex++) {
  // create boards
  data.boards.push({
    id: boardIndex,
    name: faker.company.companyName(),
    color: faker.commerce.color()
  });

  for (let userPerBoardIndex = 0; userPerBoardIndex < USERS_PER_BOARD; userPerBoardIndex++) {
    // add random users to each board
    data.userBoards.push({
      boardId: boardIndex,
      userId: Math.floor(Math.random() * USERS_COUNT),
      id: userPerBoardIndex + boardIndex * USERS_PER_BOARD
    });
  }

  for (let columnIndex = 0; columnIndex < COLUMNS_PER_BOARD; columnIndex++) {
    // create columns for each board
    data.columns.push({
      id: columnIndex + boardIndex * COLUMNS_PER_BOARD,
      order: columnIndex,
      name: faker.company.companyName(),
      boardId: boardIndex
    });

    for (let cardIndex = 0; cardIndex < CARDS_PER_COLUMN; cardIndex++) {
      // create cards for each column
      data.cards.push({
        id: cardIndex + columnIndex * CARDS_PER_COLUMN + boardIndex * COLUMNS_PER_BOARD * CARDS_PER_COLUMN,
        order: cardIndex,
        name: faker.hacker.phrase(),
        description: faker.lorem.paragraphs(),
        columnId: columnIndex
      });
    }
  }
}

const json = JSON.stringify(data, null, 2);
fs.writeFile('db.json', json, 'utf8', () => {
  process.exit(0);
});
