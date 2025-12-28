import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--theme-surface);
      border-radius: var(--theme-radius-card);
      box-shadow: var(--theme-shadow-card);
      overflow: hidden;
      margin-bottom: 16px;
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("ui-card", UiCard);
