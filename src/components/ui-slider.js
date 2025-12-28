import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiSlider extends LitElement {
  static properties = {
    min: { type: Number },
    max: { type: Number },
    value: { type: Number },
    step: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 44px; /* Touch target */
      display: flex;
      align-items: center;
    }

    .slider-container {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: var(--theme-gray-5);
      border-radius: 2px;
    }

    .track-active {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: var(--theme-primary);
      border-radius: 2px;
    }

    input[type="range"] {
      position: absolute;
      left: 0;
      top: -13px; /* Center over track */
      width: 100%;
      height: 30px;
      opacity: 0;
      cursor: pointer;
      margin: 0;
      z-index: 2;
    }

    /* Custom Thumb for visual */
    .thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: var(--theme-slider-thumb-size, 28px);
      height: var(--theme-slider-thumb-size, 28px);
      background: var(--theme-slider-thumb-color, white);
      border-radius: 50%;
      box-shadow: var(--theme-shadow-card);
      z-index: 1;
      pointer-events: none;
      transition: transform 0.1s;
    }

    :host(:active) .thumb {
      transform: translate(-50%, -50%) scale(1.1);
    }
  `;

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.value = 50;
    this.step = 1;
  }

  handleInput(e) {
    this.value = Number(e.target.value);
    this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value } }));
  }

  render() {
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;

    return html`
      <div class="slider-container">
        <div class="track-active" style="width: ${percentage}%"></div>
        <div class="thumb" style="left: ${percentage}%"></div>
        <input type="range" .min="${this.min}" .max="${this.max}" .step="${this.step}" .value="${this.value}" @input="${this.handleInput}" />
      </div>
    `;
  }
}

customElements.define("ui-slider", UiSlider);
