import Person from './person';

export default class Team {
  constructor() {
    this.players = [];
    this.numberOfPlayers = 0;
  }

  add(player) {
    if (player instanceof Person) {
      this.players.push(player);
      this.numberOfPlayers += 1;
    } else {
      throw new Error('Не валидный объект!');
    }
  }

  * [Symbol.iterator]() {
    const { players, numberOfPlayers } = this;
    for (let current = 0; current < numberOfPlayers; current++) { //eslint-disable-line
      yield players[current];
    }
  }
}
