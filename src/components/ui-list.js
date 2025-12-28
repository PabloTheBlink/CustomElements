import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiList extends LitElement {
  static properties = {
    inset: { type: Boolean },
  };

  static styles = css`
    :host {
      display: block;
      background: var(--theme-surface);
      margin-bottom: 24px;
    }

    :host([inset]) {
      border-radius: var(--theme-radius-card);
      overflow: hidden;
      margin: 0 16px 24px 16px;
    }

    /* Remove border from last item */
    ::slotted(ui-list-item:last-of-type) {
      --item-border: none;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("ui-list", UiList);
