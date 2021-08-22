var inputTextarea = document.querySelector("textarea")
var outputDiv = document.querySelector(".output")
var btnTranslate = document.querySelector(".btn")

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json";

function getTranslationURL(inputText) {
    return serverURL + "?" + "text" + "=" + inputText;
}

function clickHandler() {
    
    inputText = inputTextarea.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(response => outputDiv.innerText = response.contents.translated)
    .catch(error => console.log(error))
}

btnTranslate.addEventListener("click",clickHandler);