import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiInput extends LitElement {
  static properties = {
    label: { type: String },
    placeholder: { type: String },
    value: { type: String },
    type: { type: String }, // text, password, email, number
    helper: { type: String },
    error: { type: Boolean },
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
    }

    label {
      display: block;
      font-size: 13px;
      margin-bottom: 6px;
      color: var(--theme-text-secondary);
      padding-left: 4px;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 12px 16px;
      font-size: 17px;
      font-family: var(--theme-font-family);
      background: var(--theme-input-bg, var(--theme-surface));
      border: 1px solid var(--theme-input-border, transparent);
      border-radius: var(--theme-radius-button, 10px);
      color: var(--theme-text-primary);
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }

    input:focus {
      border-color: var(--theme-primary);
      background: var(--theme-surface);
    }

    input::placeholder {
      color: var(--theme-text-tertiary);
    }

    .helper {
      font-size: 12px;
      color: var(--theme-text-tertiary);
      margin-top: 6px;
      padding-left: 4px;
    }

    :host([error]) input {
      border-color: var(--theme-danger);
    }

    :host([error]) .helper {
      color: var(--theme-danger);
    }
  `;

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ""}
      <input type="${this.type || "text"}" placeholder="${this.placeholder || ""}" .value="${this.value || ""}" @input="${(e) => (this.value = e.target.value)}" />
      ${this.helper ? html`<div class="helper">${this.helper}</div>` : ""}
    `;
  }
}

customElements.define("ui-input", UiInput);
