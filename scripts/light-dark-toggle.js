var button = document.getElementById("toggle-btn"), count=0;
var element=document.getElementsByClassName("dev-stage");
button.onclick = function() {
    count += 1;
    console.log(count);
    toggle();
}
function toggle() {
    if(count%2!=0) {
        document.body.style.cssText = 'background: rgb(249,245,245); ' +
            'background: radial-gradient(circle, rgba(249,245,245,1) 0%, rgba(214,213,213,1) 52%);color: black;';
        document.getElementById("active-button").style.color="rgb(0, 131, 213)";
    }
    else {
        document.body.style.cssText = 'background: rgb(52,52,52);\n' +
            '    background: radial-gradient(circle, rgba(52,52,52,1) 0%, rgba(6,6,6,1) 52%);\n' +
            '    color: white;';
        document.getElementById("active-button").style.color="white";
    }
}
//TODO: References for future improvements
//https://www.simpleweblearning.com/how-to-create-light-dark-mode-toggle-with-css-and-javascript/
//https://codepen.io/chen1223/pen/PobxwMj
//https://www.w3schools.com/howto/howto_css_switch.asp
//https://codepen.io/juliogcampos/pen/BzdjwY