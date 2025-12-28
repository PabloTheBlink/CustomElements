import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiCheckbox extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    label: { type: String },
    disabled: { type: Boolean },
  };

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }

    .checkbox {
      width: 22px;
      height: 22px;
      border-radius: 50%; /* iOS style is usually circle for selection list, or rounded square. Let's go with circle. */
      border: 1px solid var(--theme-gray-3); /* Unchecked border */
      background: transparent;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    :host([checked]) .checkbox {
      background: var(--theme-primary);
      border-color: var(--theme-primary);
    }

    svg {
      width: 14px;
      height: 14px;
      color: var(--theme-text-on-primary, white);
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.2s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    }

    :host([checked]) svg {
      opacity: 1;
      transform: scale(1);
    }

    .label {
      font-size: 17px;
      color: var(--theme-text-primary);
    }
  `;

  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent("change", { detail: { checked: this.checked } }));
  }

  render() {
    return html`
      <div class="checkbox" @click="${this.toggle}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      ${this.label ? html`<div class="label" @click="${this.toggle}">${this.label}</div>` : ""}
    `;
  }
}

customElements.define("ui-checkbox", UiCheckbox);
