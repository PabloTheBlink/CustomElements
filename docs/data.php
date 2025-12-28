<!DOCTYPE html>
<html lang="en">

<head>
    <title>UI Elements - Data</title>
    <?php include 'common/head.php'; ?>
</head>

<body>
    <?php include 'common/sidebar.php'; ?>
    <div class="main">
        <h1>Data Display</h1>

        <!-- Card -->
        <div class="doc-section" id="ui-card">
            <h2>Card</h2>
            <p>The fundamental building block for content.</p>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="width: 300px">
                        <ui-card>
                            <div style="padding: 16px">
                                <ui-text variant="headline">Card Title</ui-text>
                                <ui-text variant="body" color="secondary">This is a standard card with some content inside it.</ui-text>
                            </div>
                        </ui-card>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-card&gt;
  &lt;div style="padding: 16px"&gt;
    &lt;ui-text variant="headline"&gt;Card Title&lt;/ui-text&gt;
    &lt;ui-text variant="body" color="secondary"&gt;Content...&lt;/ui-text&gt;
  &lt;/div&gt;
&lt;/ui-card&gt;</code></pre>
            </div>
        </div>

        <!-- Metric Card -->
        <div class="doc-section" id="ui-metric-card">
            <h2>Metric Card</h2>
            <p>A specialized card for displaying health metrics with charts and status trends.</p>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="width: 300px; display: flex; flex-direction: column; gap: 16px;">
                        <ui-metric-card label="Walking Heart Rate" value="98 BPM" status="Above Average" statusColor="orange"></ui-metric-card>
                        <ui-metric-card label="Steps" value="10,245" chart-type="bar" chart-data='[5,8,10,15,12,10,11]'></ui-metric-card>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;!-- Simple Metric --&gt;
&lt;ui-metric-card label="Heart Rate" value="98 BPM" status="Normal" statusColor="green"&gt;&lt;/ui-metric-card&gt;

&lt;!-- Chart Metric --&gt;
&lt;ui-metric-card 
  label="Steps" 
  value="10,245" 
  chart-type="bar" 
  chart-data='[5,8,10,15,12,10]'&gt;
&lt;/ui-metric-card&gt;</code></pre>
            </div>
        </div>

        <div class="doc-section" id="ui-text">
            <h2>Text</h2>
            <p>Typography components following semantic guidelines.</p>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div>
                        <ui-text variant="large-title">Large Title</ui-text>
                        <ui-text variant="title1">Title 1</ui-text>
                        <ui-text variant="title2">Title 2</ui-text>
                        <ui-text variant="headline">Headline</ui-text>
                        <ui-text variant="body">Body text</ui-text>
                        <ui-text variant="caption1" color="secondary">Caption 1 (Secondary)</ui-text>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-text variant="large-title"&gt;Large Title&lt;/ui-text&gt;
&lt;ui-text variant="title1"&gt;Title 1&lt;/ui-text&gt;
&lt;ui-text variant="headline"&gt;Headline&lt;/ui-text&gt;
&lt;ui-text variant="body"&gt;Body text&lt;/ui-text&gt;
&lt;ui-text variant="caption1" color="secondary"&gt;Caption 1&lt;/ui-text&gt;</code></pre>
            </div>
        </div>

        <!-- Code Window -->
        <div class="doc-section" id="ui-code-window">
            <h2>Code Window</h2>
            <p>A macOS-style window for displaying code snippets.</p>
            <div class="preview-card">
                <div class="preview-canvas" style="display: block; padding: 30px; background: #eef1f5">
                    <ui-code-window title="Main.js">
                        <span style="color:#ff79c6">function</span> <span style="color:#50fa7b">hello</span>() {
                        <span style="color:#ff79c6">return</span> <span style="color:#f1fa8c">"Hello World"</span>;
                        }
                    </ui-code-window>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-code-window title="Script.js"&gt;
  console.log("Hello");
&lt;/ui-code-window&gt;</code></pre>
            </div>
        </div>

    </div>
</body>

</html>