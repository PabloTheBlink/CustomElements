import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiTabBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* background: var(--theme-tab-bar-bg); Use specific background for floating card to ensure contrast */
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 0, 0, 0.1); /* Darker border for light mode */
      padding-top: 15px;
      padding-bottom: 15px;
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 400px;
      z-index: 1000;
      border-radius: 30px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.05); /* Stronger double shadow */
    }

    @media (prefers-color-scheme: dark) {
      :host {
        background: rgba(30, 30, 32, 0.95); /* High opacity dark bg */
        border: 1px solid rgba(255, 255, 255, 0.15); /* Slightly clearer border */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Deep shadow for dark mode */
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
