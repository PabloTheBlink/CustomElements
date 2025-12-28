import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiTabBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: var(--theme-tab-bar-bg);
      backdrop-filter: var(--theme-tab-bar-blur, blur(20px));
      -webkit-backdrop-filter: var(--theme-tab-bar-blur, blur(20px));
      /* border-top: var(--theme-tab-bar-border, 0.5px solid rgba(0, 0, 0, 0.2)); Remove top border since it is floating */
      padding-top: 15px;
      padding-bottom: 15px; /* Balanced padding */
      position: fixed;
      bottom: 30px; /* Floating from bottom */
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 400px; /* Max width for larger screens */
      z-index: 1000;
      border-radius: 30px; /* Rounded corners */
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Soft shadow */
    }

    @media (prefers-color-scheme: dark) {
      :host {
        background: rgba(28, 28, 30, 0.94);
        border-top: 0.5px solid rgba(255, 255, 255, 0.15);
      }
    }

    :host([inline]) {
      position: absolute;
      bottom: 0;
      z-index: 10;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("ui-tab-bar", UiTabBar);

export class UiTabItem extends LitElement {
  static properties = {
    label: { type: String },
    icon: { type: String },
    active: { type: Boolean, reflect: true },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      cursor: pointer;
      color: var(--theme-text-secondary);
      gap: 4px;
    }

    :host([active]) {
      color: var(--theme-primary);
    }

    .icon {
      font-size: 24px; /* Placeholder for icon font size */
      display: block;
      width: 28px;
      height: 28px;
    }

    .label {
      font-size: 10px;
      font-weight: 500;
      margin-top: 2px;
    }

    ::slotted(svg) {
      fill: currentColor;
      width: 24px;
      height: 24px;
    }
  `;

  render() {
    return html`
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <span class="label">${this.label}</span>
    `;
  }
}

customElements.define("ui-tab-item", UiTabItem);
