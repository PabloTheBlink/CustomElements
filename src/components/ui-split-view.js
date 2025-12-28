import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiSplitView extends LitElement {
  static styles = css`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: var(--theme-background);
    }

    .sidebar-container {
      width: var(--theme-sidebar-width, 320px);
      flex-shrink: 0;
      border-right: 1px solid var(--theme-sidebar-border-right, rgba(0, 0, 0, 0.1));
      background-color: var(--theme-sidebar-bg, var(--theme-background));
      display: none; /* Hidden by default on mobile */
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
    }

    .detail-container {
      flex: 1;
      height: 100%;
      overflow: hidden;
      position: relative;
      background-color: var(--theme-background);
    }

    /* Desktop Breakpoint */
    @media (min-width: 768px) {
      .sidebar-container {
        display: flex;
      }
    }
  `;

  render() {
    return html`
      <div class="sidebar-container">
        <slot name="sidebar"></slot>
      </div>
      <div class="detail-container">
        <slot name="detail"></slot>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("ui-split-view", UiSplitView);
