import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiCodeWindow extends LitElement {
  static properties = {
    lang: { type: String },
    title: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }

    .window {
      background: var(--theme-code-bg, #1e1e1e);
      border-radius: var(--theme-radius-card, 12px);
      box-shadow: var(--theme-card-shadow, 0 10px 30px rgba(0, 0, 0, 0.2));
      overflow: hidden;
      font-family: "SF Mono", "Menlo", "Monaco", "Courier New", monospace;
      color: #f8f8f2;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header {
      background: rgba(255, 255, 255, 0.03);
      padding: 12px 16px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .controls {
      display: flex;
      gap: 8px;
      margin-right: 16px;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .dot.red {
      background-color: #ff5f56;
    }
    .dot.yellow {
      background-color: #ffbd2e;
    }
    .dot.green {
      background-color: #27c93f;
    }

    .title {
      color: rgba(255, 255, 255, 0.4);
      font-size: 13px;
      margin-left: auto;
      margin-right: auto;
      transform: translateX(-26px); /* Balance the dots */
      font-family: system-ui, sans-serif;
    }

    .content {
      padding: 20px;
      overflow-x: auto;
      font-size: 13px;
      line-height: 1.6;
      white-space: pre;
    }

    /* Basic syntax coloring simulation */
    ::slotted(.keyword) {
      color: #ff79c6;
    }
    ::slotted(.string) {
      color: #f1fa8c;
    }
    ::slotted(.function) {
      color: #50fa7b;
    }
    ::slotted(.comment) {
      color: #6272a4;
    }
    ::slotted(.tag) {
      color: #ff79c6;
    }
    ::slotted(.attr) {
      color: #50fa7b;
    }
  `;

  render() {
    return html`
      <div class="window">
        <div class="header">
          <div class="controls">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          ${this.title ? html`<span class="title">${this.title}</span>` : ""}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("ui-code-window", UiCodeWindow);
