import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiSidebar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--theme-sidebar-bg, rgba(245, 245, 247, 0.8)); /* Transparent-ish on iOS */
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    .header-slot {
      padding: 16px;
      padding-top: 48px; /* Safeish area */
    }

    .content-slot {
      flex: 1;
      padding: 0 16px;
      overflow-y: auto;
    }

    .footer-slot {
      padding: 16px;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
  `;

  render() {
    return html`
      <div class="header-slot">
        <slot name="header"></slot>
      </div>
      <div class="content-slot">
        <slot></slot>
      </div>
      <div class="footer-slot">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

customElements.define("ui-sidebar", UiSidebar);
