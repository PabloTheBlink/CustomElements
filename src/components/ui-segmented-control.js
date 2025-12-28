import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiSegmentedControl extends LitElement {
  static properties = {
    options: { type: Array }, // ['Option 1', 'Option 2']
    selected: { type: Number },
  };

  static styles = css`
    :host {
      display: flex;
      background-color: var(--theme-segment-bg, var(--theme-gray-5));
      border-radius: var(--theme-radius-button, 9px);
      padding: var(--theme-segment-padding, 2px);
      height: 32px;
      position: relative;
      user-select: none;
    }

    .segment {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 500;
      color: var(--theme-text-primary);
      position: relative;
      z-index: 2;
      cursor: pointer;
      text-align: center;
      transition: opacity 0.2s, color 0.2s;
    }

    .segment.selected-segment {
      color: var(--theme-segment-text-selected, var(--theme-text-primary));
      font-weight: 600;
    }

    /* Selected state visual */
    .indicator {
      position: absolute;
      top: var(--theme-segment-padding, 2px);
      bottom: var(--theme-segment-padding, 2px);
      background: var(--theme-segment-thumb-bg, var(--theme-surface));
      border-radius: var(--theme-radius-button, 7px);
      box-shadow: var(--theme-segment-shadow, 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05));
      transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      z-index: 1;
    }
  `;

  constructor() {
    super();
    this.options = [];
    this.selected = 0;
  }

  select(index) {
    this.selected = index;
    this.dispatchEvent(new CustomEvent("change", { detail: { index } }));
  }

  render() {
    const width = 100 / this.options.length;
    const transform = `translateX(${this.selected * 100}%)`;

    return html`
      <div class="indicator" style="width: calc(${width}% - 4px); transform: translateX(${this.selected * 100}%) translateX(2px);"></div>
      <!-- CSS logic for positioning needs to be cleaner, using simplified absolute for now -->
      <!-- Actually, safer to use left/width with calc -->
      <div class="indicator" style="width: calc((100% - 4px) / ${this.options.length}); left: 2px; transform: translateX(${this.selected * 100}%);"></div>

      ${this.options.map((option, index) => html` <div class="segment ${this.selected === index ? "selected-segment" : ""}" @click="${() => this.select(index)}">${option}</div> `)}
    `;
  }
}

customElements.define("ui-segmented-control", UiSegmentedControl);
