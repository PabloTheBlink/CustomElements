import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiAlert extends LitElement {
  static properties = {
    type: { type: String }, // info, success, warning, error
  };

  static styles = css`
    :host {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
      border-radius: var(--theme-radius-card);
      background-color: var(--theme-gray-6);
      color: var(--theme-text-primary);
      margin-bottom: 16px;
    }

    :host([type="error"]) {
      background-color: rgba(255, 59, 48, 0.1);
      color: var(--theme-danger);
    }

    :host([type="success"]) {
      background-color: rgba(52, 199, 89, 0.1);
      color: var(--theme-success);
    }

    :host([type="warning"]) {
      background-color: rgba(255, 149, 0, 0.1);
      color: var(--theme-warning);
    }

    .content {
      flex: 1;
      font-size: 15px;
      line-height: 1.4;
    }

    .title {
      font-weight: 600;
      margin-bottom: 4px;
      display: block;
    }
  `;

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("ui-alert", UiAlert);
