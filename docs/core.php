<!DOCTYPE html>
<html lang="en">

<head>
    <title>UI Elements - Core</title>
    <?php include 'common/head.php'; ?>
</head>

<body>
    <?php include 'common/sidebar.php'; ?>
    <div class="main">
        <h1>Core Components</h1>

        <!-- App & View -->
        <div class="doc-section" id="ui-app">
            <h2>App & View</h2>
            <p>The root containers for the application structure. <code>&lt;ui-app&gt;</code> handles global theming and font smoothing.</p>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-app&gt;
  &lt;ui-view&gt;
    &lt;!-- Page Content --&gt;
  &lt;/ui-view&gt;
&lt;/ui-app&gt;</code></pre>
            </div>
        </div>

        <!-- Header -->
        <div class="doc-section" id="ui-header">
            <h2>Header</h2>
            <p>Standard navigation header. Supports large titles and back buttons.</p>

            <h3>Standard Inline</h3>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="width: 320px; height: 100px; border: 1px solid #ccc; position: relative; overflow: auto; background: var(--theme-background);">
                        <ui-header title="Settings" back-text="Back"></ui-header>
                        <div style="padding: 16px; opacity: 0.5;">Content...</div>
                    </div>
                </div>
            </div>

            <h3>Large Title</h3>
            <div class="preview-card">
                <div class="preview-canvas">
                    <div style="width: 320px; height: 150px; border: 1px solid #ccc; position: relative; overflow: auto; background: var(--theme-background);">
                        <ui-header title="Health" large>
                            <div slot="trailing" style="color: var(--theme-primary)">Profile</div>
                        </ui-header>
                        <div style="padding: 16px; opacity: 0.5;">Content...</div>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;!-- Inline Header --&gt;
&lt;ui-header title="Settings" back-text="Back"&gt;&lt;/ui-header&gt;

&lt;!-- Large Title Header --&gt;
&lt;ui-header title="Health" large&gt;
  &lt;div slot="trailing" style="color: var(--theme-primary)"&gt;Profile&lt;/div&gt;
&lt;/ui-header&gt;</code></pre>
            </div>
        </div>

        <!-- Tab Bar -->
        <div class="doc-section" id="ui-tab-bar">
            <h2>Tab Bar</h2>
            <p>Bottom navigation bar with translucent blur effect.</p>
            <div class="preview-card">
                <div class="preview-canvas" style="min-height: 150px">
                    <div style="width: 320px; height: 100%; position: relative">
                        <ui-tab-bar inline>
                            <ui-tab-item icon="home" label="Summary" active>
                                <svg slot="icon" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </ui-tab-item>
                            <ui-tab-item icon="search" label="Browse">
                                <svg slot="icon" viewBox="0 0 24 24">
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                </svg>
                            </ui-tab-item>
                        </ui-tab-bar>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="copy-btn">Copy</button>
                <pre><code>&lt;ui-tab-bar&gt;
  &lt;ui-tab-item icon="home" label="Summary" active&gt;
    &lt;svg slot="icon" viewBox="0 0 24 24"&gt;...&lt;/svg&gt;
  &lt;/ui-tab-item&gt;
  &lt;ui-tab-item icon="search" label="Browse"&gt;
    &lt;svg slot="icon" viewBox="0 0 24 24"&gt;...&lt;/svg&gt;
  &lt;/ui-tab-item&gt;
&lt;/ui-tab-bar&gt;</code></pre>
            </div>
        </div>
    </div>
</body>

</html>