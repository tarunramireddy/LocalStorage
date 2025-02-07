let saveButton = document.getElementById("saveBtn");
let textAreaElement = document.getElementById("textplacement");

saveButton.onclick = function(){
    let userEnteredText = textAreaElement.value;
    localStorage.setItem("userEnteredText", userEnteredText);
}

let storedUserInputValue = localStorage.getItem("userEnteredText");
if(storedUserInputValue === null){
    textAreaElement.value = "";
}
else{
    textAreaElement.value = storedUserInputValue;
}
