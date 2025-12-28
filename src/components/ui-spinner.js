import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiSpinner extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    .spinner {
      width: 100%;
      height: 100%;
      position: relative;
      animation: spin 1s linear infinite;
    }

    .spinner::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid var(--theme-gray-4);
      border-top-color: var(--theme-primary);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`<div class="spinner"></div>`;
  }
}

customElements.define("ui-spinner", UiSpinner);
