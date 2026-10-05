const body = document.querySelector("body");
const themeSwitcher = document.querySelector("#theme-switcher-button");
const themeMenu = document.querySelector("#theme-dropdown");
const themeOptions = document.querySelectorAll("[role='menuitem']");
const statusMessage = document.querySelector("[aria-live='polite']");

const themes = [
    { name: "corporate", message: "Corporate theme activated!" },
    { name: "personal", message: "Personal theme activated!" },
]

themeSwitcher.addEventListener('click', () => {
    themeMenu.hidden = !themeMenu.hidden;
    themeSwitcher.setAttribute('aria-expanded', `${!themeMenu.hidden}`);

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedTheme = option.getAttribute('id').split('-')[1];
            // console.log(selectedTheme);
            body.setAttribute('class', `theme-${selectedTheme}`);
            statusMessage.textContent = themes.find(theme => theme.name === selectedTheme).message;
        })
    })

    statusMessage.textContent = themeMenu.hidden ? '' : statusMessage.textContent;
});