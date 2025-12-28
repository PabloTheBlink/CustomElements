import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiButton extends LitElement {
  static properties = {
    variant: { type: String }, // primary, secondary, ghost
    block: { type: Boolean },
  };

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([block]) {
      display: block;
      width: 100%;
    }

    button {
      font-family: var(--theme-font-family);
      width: 100%;
      padding: 14px 20px;
      border-radius: var(--theme-radius-button);
      font-size: 17px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: opacity 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    button:active {
      opacity: 0.7;
    }

    /* Primary: Filled Blue */
    .primary {
      background-color: var(--theme-primary);
      color: var(--theme-text-on-primary, white);
    }

    /* Secondary: Filled Gray */
    .secondary {
      background-color: var(--theme-gray-5);
      color: var(--theme-primary);
    }

    /* Ghost: Text only */
    .ghost {
      background-color: transparent;
      color: var(--theme-primary);
      padding: 8px 16px;
    }
  `;

  render() {
    return html`
      <button class="${this.variant || "primary"}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("ui-button", UiButton);
