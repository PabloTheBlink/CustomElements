import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiHeader extends LitElement {
  static properties = {
    title: { type: String },
    large: { type: Boolean },
    backText: { type: String, attribute: "back-text" },
  };

  static styles = css`
    :host {
      display: block;
      background-color: var(--theme-background); /* Or blurred material */
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-content {
      display: flex;
      flex-direction: column;
      padding: 0 16px;
    }

    /* Standard inline header */
    .inline-header {
      height: var(--theme-header-height, 44px);
      display: flex;
      align-items: center;
      justify-content: var(--theme-header-justify, center);
      position: relative;
      padding: 0 var(--theme-header-padding, 0);
    }

    .back-button {
      position: absolute;
      left: 0;
      color: var(--theme-primary);
      font-size: 17px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .title-inline {
      font-weight: var(--theme-header-font-weight, 600);
      font-size: var(--theme-header-font-size, 17px);
      flex: 1;
      text-align: var(--theme-header-text-align, center);
      padding-left: var(--theme-header-title-padding-left, 0);
    }

    /* Large title */
    .large-title-container {
      padding: 8px 0 12px 0;
    }

    .title-large {
      font-weight: 700;
      font-size: 34px;
      line-height: 41px;
      letter-spacing: 0.37px;
    }

    .actions {
      position: absolute;
      right: 0;
      top: 0;
      height: 44px;
      display: flex;
      align-items: center;
    }
  `;

  render() {
    return html`
      <div class="header-content">
        <div class="inline-header">
          ${this.backText
            ? html`
                <div class="back-button">
                  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 18L2.5 10L10.5 2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  ${this.backText}
                </div>
              `
            : ""}
          ${!this.large ? html`<span class="title-inline">${this.title}</span>` : ""}

          <div class="actions">
            <slot name="trailing"></slot>
          </div>
        </div>

        ${this.large
          ? html`
              <div class="large-title-container">
                <h1 class="title-large">${this.title}</h1>
              </div>
            `
          : ""}
      </div>
    `;
  }
}

customElements.define("ui-header", UiHeader);
