var container = document.getElementsByClassName("container")[0];
var button = document.getElementById("toggle-btn"), count=0;
button.onclick = function() {
    count += 1;
    console.log(count);
    toggle();
}
function toggle() {
    if(count%2!=0) {
        container.removeAttribute('data-theme');
        container.setAttribute('data-theme', 'light');
    }
    else {
        container.removeAttribute('data-theme');
        container.setAttribute('data-theme', 'dark');
    }
}
// document.getElementById('toggle-btn').addEventListener('change', (event) => {
//     event.target.checked ? container.removeAttribute('data-theme') : container.setAttribute('data-theme', 'light');
// });
// https://harlemsquirrel.github.io/css/javascript/2017/12/08/dark-light-mode-persistent-switcher.html
