var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

btntranslate.addEventListener("click", function clickEventHandler() {
    outputdiv.innerText = txtinput.value;
});