import { customElement, html, LitElement, property, css } from 'lit-element'

@customElement("app-sign")
export class Sign extends LitElement {

  static get styles() {
    return css`
      .container{
        display: flex
        width: 100%;
        height: 100%;
        padding: 10px;
        text-align: center;
        border: 1px solid black
      }

      .sign {
        width: 100px;
        height: 100px;
        font-size: 80px;
        margin: 0;
      }
    `
  }

  @property({type: String}) letter ='';

  render(){
    return html`<div class='container'><div class='sign'>${this.letter}<div></div>`
  }
}
