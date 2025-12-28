import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiToggle extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean },
  };

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }

    .switch {
      position: relative;
      width: 51px;
      height: 31px;
      background-color: var(--theme-toggle-bg-off, var(--theme-gray-5));
      border-radius: 31px;
      transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    :host([checked]) .switch {
      background-color: var(--theme-toggle-bg-on, var(--theme-success));
    }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 27px;
      height: 27px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    :host([checked]) .thumb {
      transform: translateX(20px);
    }
  `;

  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent("change", { detail: { checked: this.checked } }));
  }

  render() {
    return html`
      <div class="switch" @click="${this.toggle}">
        <div class="thumb"></div>
      </div>
    `;
  }
}

customElements.define("ui-toggle", UiToggle);
