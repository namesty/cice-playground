export class Game {

  willBeX = true

  play(signs: String[][], row: number, col: number) {
    if(signs[row][col]) {
      signs[row][col] = this.willBeX? 'X' : 'O'
    }

    return signs
  }
}