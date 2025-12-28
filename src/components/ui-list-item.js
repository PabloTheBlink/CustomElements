import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiListItem extends LitElement {
  static properties = {
    href: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      background: var(--theme-surface);
      padding-left: 16px; /* Content indent */
      cursor: pointer;
    }

    :host(:active) {
      background: var(--theme-gray-6);
    }

    .container {
      display: flex;
      align-items: center;
      padding: 12px 16px 12px 0; /* Right padding */
      min-height: 44px;
      border-bottom: 1px solid var(--theme-gray-5);
    }

    /* Variable to hide border from parent list */
    :host {
      --item-border: 1px solid var(--theme-gray-5);
    }

    .container {
      border-bottom: var(--item-border);
    }

    ::slotted([slot="icon"]) {
      margin-right: 12px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
    }

    .content {
      flex: 1;
      font-size: 17px;
      color: var(--theme-text-primary);
    }

    .trailing {
      color: var(--theme-text-tertiary);
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .chevron {
      width: 14px;
      height: 14px;
      color: var(--theme-gray-3);
    }
  `;

  render() {
    return html`
      <div class="container" @click="${() => (this.href ? (window.location.href = this.href) : null)}">
        <slot name="icon"></slot>
        <div class="content"><slot></slot></div>
        <div class="trailing">
          <slot name="trailing"></slot>
          ${this.href
            ? html`
                <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              `
            : ""}
        </div>
      </div>
    `;
  }
}

customElements.define("ui-list-item", UiListItem);
