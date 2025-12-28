import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import "./ui-chart.js";

export class UiMetricCard extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    status: { type: String },
    statusColor: { type: String }, // 'blue', 'green', etc.
    trend: { type: String }, // 'down', 'up', 'flat'
    trendLabel: { type: String },
    chartType: { type: String }, // 'line' or 'bar'
    chartData: { type: Array },
    chartColor: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }

    .card-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
    }

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .label-with-icon {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--theme-text-secondary);
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: -0.08px;
    }

    .value {
      font-size: 28px;
      font-weight: 600; /* Apple Design often uses font-weight 600-700 for metrics */
      letter-spacing: 0.3px;
      margin-top: 4px;
      display: flex;
      align-items: baseline;
      gap: 4px;
    }

    .unit {
      font-size: 17px;
      color: var(--theme-text-secondary);
      font-weight: 500;
    }

    .status {
      font-size: 13px;
      font-weight: 500;
      margin-top: 2px;
    }

    .chart-container {
      margin-top: 16px;
      height: 60px;
    }

    /* Trend Pill */
    .trend-container {
      margin-top: auto;
      padding-top: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .trend-icon {
      width: 16px;
      height: 16px;
      background: var(--theme-danger); /* Default to down/bad for demo */
      border-radius: 50%;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
    }
  `;

  render() {
    return html`
      <ui-card>
        <div class="card-content">
          <div class="header">
            <div class="label-with-icon">
              <slot name="icon"></slot>
              <span>${this.label}</span>
            </div>
          </div>

          ${this.chartType === "bar"
            ? html`
                <!-- Layout for VO2 Max style (value left, chart right) -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: center;">
                  <div>
                    <div class="value">${this.value}</div>
                    <div class="status" style="color: var(--ui-${this.statusColor || "blue"})">${this.status}</div>
                  </div>
                  <div>
                    <ui-chart type="bar" .data="${this.chartData || [50]}" color="var(--theme-primary)"></ui-chart>
                  </div>
                </div>
              `
            : html`
                <!-- Layout for standard metric (chart, then value) or vice versa. 
                     The image shows VFC: Chart, then Value, then Trend.
                     History FCR: Value, Status, Chart.
                     Let's make it flexible by just rendering in order. -->

                <!-- VFC Style if chart is first? No, let's stick to a generic order: Value, Status, Chart, Trend -->
                ${this.chartType === "line"
                  ? html`
                      <div style="height: 60px; margin-bottom: 8px;">
                        <ui-chart type="line" .data="${this.chartData}" color="${this.chartColor || "var(--theme-warning)"}"></ui-chart>
                      </div>
                    `
                  : ""}

                <div class="value">${(this.value || "").split(" ")[0]} <span class="unit">${(this.value || "").split(" ")[1] || ""}</span></div>

                ${this.status ? html` <div class="status" style="color: var(--ui-${this.statusColor})">${this.status}</div> ` : ""}
                ${this.trend
                  ? html`
                      <div class="trend-container">
                        <div class="trend-icon" style="background-color: ${this.trend === "down" ? "var(--theme-danger)" : "var(--theme-success)"}">${this.trend === "down" ? "↓" : "↑"}</div>
                        <ui-text variant="caption2" color="secondary">${this.trendLabel}</ui-text>
                      </div>
                    `
                  : ""}
              `}
        </div>
      </ui-card>
    `;
  }
}

customElements.define("ui-metric-card", UiMetricCard);
