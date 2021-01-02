var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverurl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverurl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with the server! Wait and please try again later");
}

btntranslate.addEventListener("click", function clickEventHandler() {
    // input
    var inputtxt = txtinput.value;
    //processing data
    fetch(getTranslationUrl(inputtxt))
    .then(response => response.json())
    .then(json => {
        var translatedoutput = json.contents.translated;
        outputdiv.innerText = translatedoutput;
    })
    .catch(errorHandler)
});
