<!DOCTYPE html>
<html lang="en">

<head>
    <title>UI Elements - Layout</title>
    <?php include 'common/head.php'; ?>
</head>

<body>
    <?php include 'common/sidebar.php'; ?>
    <div class="main">
        <h1>Layout & Feedback</h1>

        <div class="doc-section" id="ui-list">
            <h2>List</h2>
            <p>Grouped lists with navigation items.</p>
            <div class="preview-card">
                <div class="preview-canvas" style="display: block; padding: 20px">
                    <ui-list inset>
                        <ui-list-item href="#">
                            <span slot="icon">Wi</span>
                            Wi-Fi
                            <span slot="trailing">Home Network</span>
                        </ui-list-item>
                        <ui-list-item>
                            <span slot="icon">Bt</span>
                            Bluetooth
                            <span slot="trailing">On</span>
                        </ui-list-item>
                    </ui-list>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-list inset&gt;
  &lt;ui-list-item href="#"&gt;
    &lt;span slot="icon"&gt;Wi&lt;/span&gt;
    Wi-Fi
    &lt;span slot="trailing"&gt;Connected&lt;/span&gt;
  &lt;/ui-list-item&gt;
&lt;/ui-list&gt;</code></pre>
            </div>
        </div>

        <div class="doc-section" id="ui-alert">
            <h2>Alert & Banner</h2>
            <div class="preview-card">
                <div class="preview-canvas" style="display: block; padding: 20px">
                    <ui-alert type="info">New update available.</ui-alert>
                    <ui-alert type="error">Connection lost.</ui-alert>
                    <ui-alert type="success">Changes saved.</ui-alert>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-alert type="info"&gt;Info message&lt;/ui-alert&gt;
&lt;ui-alert type="success"&gt;Success message&lt;/ui-alert&gt;
&lt;ui-alert type="error"&gt;Error message&lt;/ui-alert&gt;</code></pre>
            </div>
        </div>

        <!-- Sheet -->
        <div class="doc-section" id="ui-sheet">
            <h2>Sheet</h2>
            <p>The interactive bottom sheet.</p>
            <div class="preview-card">
                <div class="preview-canvas">
                    <ui-button id="open-sheet-btn">Open Sheet</ui-button>
                    <ui-sheet id="demo-sheet">
                        <div style="padding: 20px; text-align: center">
                            <ui-text variant="title2">Sheet Content</ui-text>
                            <p>This is a modal sheet.</p>
                            <ui-button onclick="document.getElementById('demo-sheet').removeAttribute('is-open')">Close</ui-button>
                        </div>
                    </ui-sheet>
                    <script>
                        document.getElementById("open-sheet-btn").onclick = () => {
                            document.getElementById("demo-sheet").setAttribute("is-open", "");
                        };
                    </script>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-sheet id="my-sheet"&gt;
  &lt;div style="padding: 20px"&gt;Content&lt;/div&gt;
&lt;/ui-sheet&gt;

&lt;script&gt;
  // Open sheet
  document.getElementById('my-sheet').setAttribute('is-open', '');
&lt;/script&gt;</code></pre>
            </div>
        </div>

        <div class="doc-section" id="ui-sidebar">
            <h2>Desktop Layout</h2>
            <p>Responsive layout components: <code>&lt;ui-split-view&gt;</code> and <code>&lt;ui-sidebar&gt;</code>.</p>
            <p style="font-size: 14px; color: #666">Resize the window (>768px) to see the sidebar appear permanently.</p>

            <div class="preview-card">
                <div class="preview-canvas" style="padding: 0; height: 400px; overflow: hidden; display: block">
                    <ui-split-view>
                        <ui-sidebar slot="sidebar">
                            <span slot="header" style="font-weight: bold; font-size: 20px">My App</span>
                            <ui-list>
                                <ui-list-item href="#">Dashboard</ui-list-item>
                                <ui-list-item href="#">Messages</ui-list-item>
                                <ui-list-item href="#">Settings</ui-list-item>
                            </ui-list>
                            <span slot="footer">v1.0.0</span>
                        </ui-sidebar>

                        <div slot="detail" style="height: 100%; display: flex; align-items: center; justify-content: center; background: var(--theme-background)">
                            <ui-text variant="title2" style="color: var(--theme-text-secondary)">Select an item</ui-text>
                        </div>
                    </ui-split-view>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-split-view&gt;
  &lt;ui-sidebar slot="sidebar"&gt;
    &lt;span slot="header"&gt;App Name&lt;/span&gt;
    &lt;ui-list&gt;
      &lt;ui-list-item&gt;Menu Item&lt;/ui-list-item&gt;
    &lt;/ui-list&gt;
  &lt;/ui-sidebar&gt;
  
  &lt;div slot="detail"&gt;Main Content&lt;/div&gt;
&lt;/ui-split-view&gt;</code></pre>
            </div>
        </div>

    </div>
</body>

</html>