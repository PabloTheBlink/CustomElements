import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiDivider extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 1px;
      background: var(--theme-gray-4);
      margin: 8px 0;
      width: 100%;
    }
  `;
  render() {
    return html``;
  }
}
customElements.define("ui-divider", UiDivider);
