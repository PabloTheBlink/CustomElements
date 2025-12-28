import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: var(--theme-background);
      color: var(--theme-text-primary);
      font-family: var(--theme-font-family);
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("ui-app", UiApp);
