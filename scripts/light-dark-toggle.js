var container = document.getElementsByClassName("container")[0];
var button = document.getElementById("toggle-btn"), count=0;

checkTheme();

function checkTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.getElementById('toggle-btn').setAttribute('checked', 'checked');
        container.removeAttribute('data-theme');
        container.setAttribute('data-theme', 'light');
        count += 1;
        return count;
    }
    else {
        localStorage.setItem('theme', 'dark');
        container.removeAttribute('data-theme');
        container.setAttribute('data-theme', 'dark');
        count=0;}
}

button.onclick = function() {
    count += 1;
    console.log(count);
    toggle();
}

function toggle() {
    if(count%2!=0) {
        container.removeAttribute('data-theme');
        container.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        container.removeAttribute('data-theme');
        container.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}
// document.getElementById('toggle-btn').addEventListener('change', (event) => {
//     event.target.checked ? container.removeAttribute('data-theme') : container.setAttribute('data-theme', 'light');
// });

// https://harlemsquirrel.github.io/css/javascript/2017/12/08/dark-light-mode-persistent-switcher.html
// https://www.simpleweblearning.com/how-to-create-light-dark-mode-toggle-with-css-and-javascript/
// https://codepen.io/chen1223/pen/PobxwMj
// https://www.w3schools.com/howto/howto_css_switch.asp
// https://codepen.io/juliogcampos/pen/BzdjwY
// https://dev.to/sbrevolution5/creating-a-toggleable-dark-mode-theme-ned