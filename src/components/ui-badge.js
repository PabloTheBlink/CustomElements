import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiBadge extends LitElement {
  static properties = {
    color: { type: String }, // red, blue, green, etc.
    count: { type: Number },
  };

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: var(--theme-danger);
      color: white;
      font-size: 12px;
      font-weight: 600;
      min-width: 20px;
      height: 20px;
      border-radius: 10px;
      padding: 0 6px;
      box-sizing: border-box;
      line-height: 1;
    }

    :host([color="blue"]) {
      background-color: var(--theme-primary);
    }
    :host([color="green"]) {
      background-color: var(--theme-success);
    }
    :host([color="orange"]) {
      background-color: var(--theme-warning);
    }
    :host([color="gray"]) {
      background-color: var(--theme-gray-1);
    }
  `;

  render() {
    return html` ${this.count !== undefined ? this.count : html`<slot></slot>`} `;
  }
}

customElements.define("ui-badge", UiBadge);
