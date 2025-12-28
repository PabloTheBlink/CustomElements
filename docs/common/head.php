<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link id="theme-link" rel="stylesheet" href="../src/styles/themes/ios.css" />
<link rel="stylesheet" href="styles.css" />
<script type="module" src="../src/main.js"></script>
<script>
    // Theme Switcher Logic
    function switchTheme(theme) {
        const link = document.getElementById("theme-link");
        if (link) link.href = `../src/styles/themes/${theme}.css`;
        localStorage.setItem('ui-theme', theme);
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('ui-theme') || 'ios';
        const switcher = document.getElementById('theme-switcher');
        if (switcher) {
            switcher.value = savedTheme;
            switchTheme(savedTheme);
            switcher.addEventListener('change', (e) => switchTheme(e.target.value));
        }
    });
</script>
