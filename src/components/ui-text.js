import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiText extends LitElement {
  static properties = {
    variant: { type: String }, // title1, title2, body, caption, footnote
    color: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      margin: 0;
    }

    /* Variants matching System Human Interface Guidelines */
    :host([variant="large-title"]) {
      font-size: 34px;
      line-height: 41px;
      font-weight: 700;
      letter-spacing: 0.37px;
    }

    :host([variant="title1"]) {
      font-size: 28px;
      line-height: 34px;
      font-weight: 700;
      letter-spacing: 0.36px;
    }

    :host([variant="title2"]) {
      font-size: 22px;
      line-height: 28px;
      font-weight: 700;
      letter-spacing: 0.35px;
    }

    :host([variant="title3"]) {
      font-size: 20px;
      line-height: 25px;
      font-weight: 600;
      letter-spacing: 0.38px;
    }

    :host([variant="headline"]) {
      font-size: 17px;
      line-height: 22px;
      font-weight: 600;
      letter-spacing: -0.41px;
    }

    :host([variant="body"]) {
      font-size: 17px;
      line-height: 22px;
      font-weight: 400;
      letter-spacing: -0.41px;
    }

    :host([variant="callout"]) {
      font-size: 16px;
      line-height: 21px;
      font-weight: 400;
      letter-spacing: -0.32px;
    }

    :host([variant="subhead"]) {
      font-size: 15px;
      line-height: 20px;
      font-weight: 400;
      letter-spacing: -0.24px;
    }

    :host([variant="footnote"]) {
      font-size: 13px;
      line-height: 18px;
      font-weight: 400;
      letter-spacing: -0.08px;
    }

    :host([variant="caption1"]) {
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
    }

    :host([variant="caption2"]) {
      font-size: 11px;
      line-height: 13px;
      font-weight: 400;
      letter-spacing: 0.07px;
    }

    /* Colors */
    :host([color="secondary"]) {
      color: var(--theme-text-secondary);
    }
    :host([color="tertiary"]) {
      color: var(--theme-text-tertiary);
    }
    :host([color="blue"]) {
      color: var(--theme-primary);
    }
    :host([color="red"]) {
      color: var(--theme-danger);
    }
    :host([color="green"]) {
      color: var(--theme-success);
    }
    :host([color="orange"]) {
      color: var(--theme-warning);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("ui-text", UiText);
