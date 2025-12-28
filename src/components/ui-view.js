import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiView extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-bottom: var(--safe-area-bottom, 83px); /* Safe area for tab bar */
    }

    .content {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      -webkit-overflow-scrolling: touch;
      padding-top: 0; /* Let header handle top padding if needed, or use safe-area */
    }
  `;

  render() {
    return html`
      <slot name="header"></slot>
      <div class="content">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    `;
  }
}

customElements.define("ui-view", UiView);
