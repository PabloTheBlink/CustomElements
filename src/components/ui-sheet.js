import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiSheet extends LitElement {
  static properties = {
    isOpen: { type: Boolean, reflect: true, attribute: "is-open" },
  };

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2000;
      pointer-events: none;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    :host([is-open]) {
      pointer-events: auto;
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity 0.3s;
    }

    :host([is-open]) .backdrop {
      opacity: 1;
    }

    .sheet {
      position: relative;
      width: 100%;
      max-width: 600px; /* Tablet constraint */
      max-height: 90vh;
      background: var(--theme-surface);
      border-radius: 20px 20px 0 0; /* Sheet look */
      padding-bottom: 34px; /* Safe area */
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    :host([is-open]) .sheet {
      transform: translateY(0);
    }

    .grabber-container {
      width: 100%;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .grabber {
      width: 36px;
      height: 5px;
      background: var(--theme-gray-3);
      border-radius: 2.5px;
    }

    .content {
      flex: 1;
      overflow-y: auto;
      padding: 0 16px 16px 16px;
    }
  `;

  close() {
    this.isOpen = false;
    this.dispatchEvent(new CustomEvent("close"));
  }

  render() {
    return html`
      <div class="backdrop" @click="${this.close}"></div>
      <div class="sheet">
        <div class="grabber-container"><div class="grabber"></div></div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("ui-sheet", UiSheet);
