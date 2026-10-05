const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');

        panels.forEach(panel => panel.setAttribute('hidden', 'true'));
        const associatedPanel = tab.getAttribute('aria-controls');
        const panel = document.querySelector(`#${associatedPanel}`);
        panel.hidden = false;
    })
})