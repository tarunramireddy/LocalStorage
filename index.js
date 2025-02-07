let saveButton = document.getElementById("saveBtn");
let textAreaElement = document.getElementById("textplacement");

saveButton.onclick = function () {
    let userEnteredText = textAreaElement.value;
    console.log("Saving text to localStorage:", userEnteredText); // Debug log
    localStorage.setItem("userEnteredText", userEnteredText);
};

let storedUserInputValue = localStorage.getItem("userEnteredText");
console.log("Retrieved from localStorage:", storedUserInputValue); // Debug log

if (storedUserInputValue === null) {
    textAreaElement.value = "";
} else {
    textAreaElement.value = storedUserInputValue;
}
