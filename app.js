"use strict";

const clickButton = document.querySelector ("#click-button")
const resetButton = document.querySelector ("#reset-button")
let countDisplay = document.querySelector ("#counter")
let count = 0


clickButton.addEventListener("click", function () {
    count = count + 1
    countDisplay.textContent = count

    if (count > 10) {
        countDisplay.style.color = "lightgreen"
    } else {
        countDisplay.style.color =  "#ffd700"
    }
});

resetButton.addEventListener("click", function () {
    count = 0
    countDisplay.textContent = count
    countDisplay.style.color = "#ffd700"
});


