import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiSidebarItem extends LitElement {
  static properties = {
    active: { type: Boolean, reflect: true },
    label: { type: String },
    count: { type: String }, // optional count bubble
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 4px;
      cursor: pointer;
      user-select: none;
    }

    .item {
      display: flex;
      align-items: center;
      padding: 10px 12px;
      border-radius: 10px;
      transition: background-color 0.2s;
      color: var(--theme-text-primary);
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
    }

    :host([active]) .item {
      background-color: var(--theme-warning, #ff9500); /* Default active color for Notes-like apps is often yellow/orange or theme color */
      color: var(--theme-white, #fff); /* Force white text on active usually */
    }

    /* Use theme primary if preferred, but Notes is often specific. Let's use var(--theme-primary) but with an override option */
    :host([active]) .item {
      background-color: var(--theme-sidebar-item-active-bg, var(--theme-warning));
      color: #fff;
    }

    /* Hover state for non-active */
    .item:hover:not(.active-state) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    :host([active]) .item:hover {
      /* Darken slightly */
      filter: brightness(0.95);
    }

    .icon {
      margin-right: 12px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .label {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .count {
      font-size: 13px;
      opacity: 0.6;
    }
    :host([active]) .count {
      opacity: 0.9;
      color: #fff;
    }
  `;

  render() {
    return html`
      <div class="item ${this.active ? "active-state" : ""}">
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <span class="label">${this.label}</span>
        ${this.count ? html`<span class="count">${this.count}</span>` : ""}
      </div>
    `;
  }
}

customElements.define("ui-sidebar-item", UiSidebarItem);
