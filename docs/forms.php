<!DOCTYPE html>
<html lang="en">

<head>
    <title>UI Elements - Forms</title>
    <?php include 'common/head.php'; ?>
</head>

<body>
    <?php include 'common/sidebar.php'; ?>
    <div class="main">
        <h1>Forms</h1>

        <div class="doc-section" id="ui-input">
            <h2>Input</h2>
            <p>Text fields with label, helper, and error states.</p>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="width: 300px">
                        <ui-input label="Username" placeholder="Enter username"></ui-input>
                        <ui-input label="Email" type="email" value="pablo@example.com"></ui-input>
                        <ui-input label="Error State" error value="Invalid input" helper="Please fix this"></ui-input>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-input label="Email" type="email"&gt;&lt;/ui-input&gt;</code></pre>
            </div>
        </div>

        <div class="doc-section" id="ui-toggle">
            <h2>Toggle & Checkbox</h2>
            <p>Boolean selection controls.</p>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="display: flex; gap: 20px; align-items: center">
                        <ui-toggle checked></ui-toggle>
                        <ui-toggle></ui-toggle>
                        <ui-checkbox label="Remember me" checked></ui-checkbox>
                        <ui-checkbox label="Terms"></ui-checkbox>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-toggle checked&gt;&lt;/ui-toggle&gt;
&lt;ui-checkbox label="I agree"&gt;&lt;/ui-checkbox&gt;</code></pre>
            </div>
        </div>

        <!-- Button -->
        <div class="doc-section" id="ui-button">
            <h2>Button</h2>
            <p>Standard UI buttons.</p>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="display: flex; gap: 10px; flex-direction: column; width: 300px">
                        <ui-button variant="primary">Primary</ui-button>
                        <ui-button variant="secondary">Secondary</ui-button>
                        <ui-button variant="ghost">Ghost</ui-button>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-button variant="primary"&gt;Primary&lt;/ui-button&gt;
&lt;ui-button variant="secondary"&gt;Secondary&lt;/ui-button&gt;
&lt;ui-button variant="ghost"&gt;Ghost&lt;/ui-button&gt;</code></pre>
            </div>
        </div>

        <!-- Slider -->
        <div class="doc-section" id="ui-slider">
            <h2>Slider</h2>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="width: 300px">
                        <ui-slider min="0" max="100" value="50"></ui-slider>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-slider min="0" max="100" value="50" label="Volume"&gt;&lt;/ui-slider&gt;</code></pre>
            </div>
        </div>

        <!-- Segmented Control -->
        <div class="doc-section" id="ui-segmented-control">
            <h2>Segmented Control</h2>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="width: 300px">
                        <ui-segmented-control options='["Day", "Week", "Month"]' selected="0"></ui-segmented-control>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-segmented-control 
  options='["Day", "Week", "Month"]' 
  selected="0"&gt;
&lt;/ui-segmented-control&gt;</code></pre>
            </div>
        </div>

    </div>
</body>

</html>