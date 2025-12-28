<!DOCTYPE html>
<html lang="en">

<head>
    <title>UI Elements - Intro</title>
    <?php include 'common/head.php'; ?>
</head>

<body>
    <?php include 'common/sidebar.php'; ?>

    <div class="main">
        <div class="doc-section" id="intro">
            <h1>UI Custom Elements</h1>
            <p>A set of themed Web Components. Build beautiful mobile-first web applications with adaptable aesthetics.</p>
        </div>

        <div class="doc-section" id="setup">
            <h2>Setup</h2>
            <p>Import the compiled main script and the theme CSS file.</p>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;link rel="stylesheet" href="./src/styles/theme.css"&gt;
&lt;script type="module" src="./src/main.js"&gt;&lt;/script&gt;</code></pre>
            </div>
        </div>

        <div class="doc-section" id="colors">
            <h2>Colors & Theme</h2>
            <p>The library uses semantic CSS variables. This allows for easy theming (e.g. iOS, Material, Cyberpunk) and dark mode support.</p>

            <h3>Semantic Palette</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; margin-bottom: 30px">
                <div class="preview-card" style="margin: 0; text-align: center">
                    <div style="height: 60px; background: var(--theme-primary)"></div>
                    <div style="padding: 10px">
                        <code style="display: block; font-size: 11px">--theme-primary</code>
                    </div>
                </div>
                <div class="preview-card" style="margin: 0; text-align: center">
                    <div style="height: 60px; background: var(--theme-success)"></div>
                    <div style="padding: 10px">
                        <code style="display: block; font-size: 11px">--theme-success</code>
                    </div>
                </div>
                <div class="preview-card" style="margin: 0; text-align: center">
                    <div style="height: 60px; background: var(--theme-warning)"></div>
                    <div style="padding: 10px">
                        <code style="display: block; font-size: 11px">--theme-warning</code>
                    </div>
                </div>
                <div class="preview-card" style="margin: 0; text-align: center">
                    <div style="height: 60px; background: var(--theme-danger)"></div>
                    <div style="padding: 10px">
                        <code style="display: block; font-size: 11px">--theme-danger</code>
                    </div>
                </div>
            </div>

            <h3>Theme Variables</h3>
            <table>
                <tr>
                    <th>Variable</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>--theme-background</code></td>
                    <td>#F2F2F7</td>
                    <td>App background color.</td>
                </tr>
                <tr>
                    <td><code>--theme-surface</code></td>
                    <td>#FFFFFF</td>
                    <td>Card and sheet background.</td>
                </tr>
                <tr>
                    <td><code>--theme-text-primary</code></td>
                    <td>#000000</td>
                    <td>Main text color.</td>
                </tr>
                <tr>
                    <td><code>--theme-radius-card</code></td>
                    <td>20px</td>
                    <td>Border radius for cards.</td>
                </tr>
            </table>
        </div>
    </div>
</body>

</html>