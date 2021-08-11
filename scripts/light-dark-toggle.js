var button = document.getElementById("toggle-btn"), count=0;
button.onclick = function() {
    count += 1;
    console.log(count);
    toggle();
}
function toggle() {
    if(count%2!=0) {
        document.body.style.cssText = 'background: #DEDEDE;\n' +
            'background: -webkit-radial-gradient(circle farthest-corner at center center, #DEDEDE 0%, #FFFAFA 55%);\n' +
            'background: -moz-radial-gradient(circle farthest-corner at center center, #DEDEDE 0%, #FFFAFA 55%);\n' +
            'background: radial-gradient(circle farthest-corner at center center, #DEDEDE 0%, #FFFAFA 55%); color: black;'
        document.getElementById("active-button").style.color="rgb(0, 131, 213)";
        var elems = document.querySelectorAll(".tool-tag");
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].style.boxShadow = "2px 2px 2px 1px #cfcbcb";
        }
    }
    else {
        document.body.style.cssText = 'background: rgb(52,52,52);\n' +
            '    background: radial-gradient(circle, rgba(52,52,52,1) 0%, rgba(6,6,6,1) 52%);\n' +
            '    color: white;';
        document.getElementById("active-button").style.color="white";
        var elems = document.querySelectorAll(".tool-tag");
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].style.boxShadow = "revert";
        }
    }
}
//TODO: References for future improvements
//https://www.simpleweblearning.com/how-to-create-light-dark-mode-toggle-with-css-and-javascript/
//https://codepen.io/chen1223/pen/PobxwMj
//https://www.w3schools.com/howto/howto_css_switch.asp
//https://codepen.io/juliogcampos/pen/BzdjwY