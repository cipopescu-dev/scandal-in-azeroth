import { LitElement, css, html } from "lit";

export class App extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`<h1>Scandal în Azeroth!</h1>
      <hr style="color:cornflowerblue" />
      <p>Coming soon - See you in Azeroth!</p>`;
  }

  static get styles() {
    return css``;
  }
}
