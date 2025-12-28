<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>
<div class="sidebar">
    <a href="index.php" class="brand"><span style="font-size: 24px">✨</span> UI Elements</a>

    <div style="margin-bottom: 20px">
        <label style="font-size: 12px; font-weight: 600; color: #86868b; text-transform: uppercase">Theme</label>
        <select id="theme-switcher" style="width: 100%; padding: 8px; margin-top: 5px; border-radius: 6px; border: 1px solid #d2d2d7">
            <option value="ios">iOS 18</option>
            <option value="material">Material Design 3</option>
            <option value="cyberpunk">Cyberpunk 2077</option>
            <option value="dracula">Dracula</option>
        </select>
    </div>

    <div class="nav-group">
        <div class="nav-title">Getting Started</div>
        <a href="index.php" class="nav-link <?= $current_page == 'index.php' ? 'active' : '' ?>">Introduction</a>
    </div>

    <div class="nav-group">
        <div class="nav-title">Components</div>
        <a href="core.php" class="nav-link <?= $current_page == 'core.php' ? 'active' : '' ?>">Core (App, Header)</a>
        <a href="data.php" class="nav-link <?= $current_page == 'data.php' ? 'active' : '' ?>">Data Display (Cards, Charts)</a>
        <a href="forms.php" class="nav-link <?= $current_page == 'forms.php' ? 'active' : '' ?>">Forms (Input, Toggle)</a>
        <a href="layout.php" class="nav-link <?= $current_page == 'layout.php' ? 'active' : '' ?>">Layout & Feedback</a>
    </div>
</div>