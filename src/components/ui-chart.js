import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class UiChart extends LitElement {
  static properties = {
    type: { type: String }, // 'line', 'bar'
    data: { type: Array },
    color: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 60px; /* Default height for sparklines */
    }

    svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }
  `;

  constructor() {
    super();
    this.data = [10, 40, 30, 70, 50, 90, 60]; // Default data
    this.color = "var(--theme-primary)"; // Default color
  }

  // Simple path generator for sparkline
  getLinePath(data, width, height) {
    if (!data || data.length === 0) return "";
    const max = Math.max(...data);
    const min = Math.min(...data); // Or 0
    const range = max - min || 1;

    const stepX = width / (data.length - 1);

    let d = `M 0 ${height - ((data[0] - min) / range) * height}`;

    for (let i = 1; i < data.length; i++) {
      const x = i * stepX;
      const y = height - ((data[i] - min) / range) * height;
      d += ` L ${x} ${y}`;
    }
    return d;
  }

  render() {
    // Mock dimensions since we don't have ResizeObserver setup easily here
    // Ideally we'd use viewbox 0 0 100 100 and preserveAspectRatio="none"
    const width = 100;
    const height = 40;

    const path = this.getLinePath(this.data, width, height);

    return html`
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
        ${this.type === "bar"
          ? html`
              <!-- Simple Bar Mock -->
              ${this.data.map((val, i) => html` <rect x="${i * (width / this.data.length)}" y="${height - (val / Math.max(...this.data)) * height}" width="${width / this.data.length - 2}" height="${(val / Math.max(...this.data)) * height}" fill="${this.color}" rx="2" /> `)}
            `
          : html`
              <path d="${path}" fill="none" stroke="${this.color}" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <!-- End dot -->
              <circle cx="100" cy="${height - ((this.data[this.data.length - 1] - Math.min(...this.data)) / (Math.max(...this.data) - Math.min(...this.data) || 1)) * height}" r="3" fill="#fff" stroke="${this.color}" stroke-width="2" vector-effect="non-scaling-stroke" />
            `}
      </svg>
    `;
  }
}

customElements.define("ui-chart", UiChart);
