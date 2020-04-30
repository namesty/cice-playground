import { customElement, LitElement, property, css } from 'lit-element'
import { html } from 'lit-html'
import { Game } from './game'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {

  static get styles(){
    return css`
      .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  //TODO: migrar esta logica a la clase game. Esto fue mas un POC
  @property({type: Boolean}) willBeX = true
  @property({type: Array}) signs = [['', '', ''],['', '', ''],['', '', '']]

  render() {
    return html`
    <div>
      ${this.signs.map(((row, i) => html`
        <div class='row'>
          ${row.map((elem, j) => html`
            <app-sign letter=${elem} @click='${() => {
              this.signs[i][j] = this.willBeX? 'X': 'O'
              this.willBeX = !this.willBeX
              this.requestUpdate()
            }}'>
            </app-sign>
          `)}
        </div>`))}
    </div>
    `
  }
}