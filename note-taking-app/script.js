const noteEl = document.querySelector('#note');
const statusEl = document.querySelector('#status');
let currentContent = '';

window.addEventListener("DOMContentLoaded", () => {
    currentContent = noteEl.textContent;
})

noteEl.addEventListener('blur', () => {
    const newContent = noteEl.innerHTML;

    if (newContent === currentContent) {
        return;
    }
    currentContent = newContent;
    statusEl.textContent = 'Note saved successfully!';
});

noteEl.addEventListener('focus', () => {
    statusEl.textContent = '';
})