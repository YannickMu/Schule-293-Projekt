function init() {

    const ymqsc = document.getElementById('ymqscph');
    const pre = document.getElementById('prehome');
    ymqsc.style.height = pre.offsetHeight + 'px';

    document.getElementById('menu-toggle').addEventListener('change', function() {
        const nav = document.getElementById('navi');
        if (this.checked) {
            nav.style.backgroundColor = 'var(--bg)';  // Change as needed
        } else {
            nav.style.backgroundColor = 'rgba(255,255,255,0.3)'; // Reset to initial or default
        }
    });
};
