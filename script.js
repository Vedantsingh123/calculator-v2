let inputBox = document.querySelector(".input");
let clearAll = document.querySelector(".clear-all");
let delet = document.querySelector(".delet");
let buttons = document.querySelectorAll(".button");
let equal = document.querySelector(".equal");

buttons.forEach((button) => {
    if (button.textContent != "AC" && button.textContent != "DE" && button.textContent != "=") {

        button.addEventListener('click', () => {
            let value = inputBox.value;
            let lastChar = value.charAt(inputBox.value.length - 1);
            if (value === "0" && !"./*-+".includes(button.textContent)) {
                inputBox.value = button.textContent;
                return;
            }
            if (!"./*-+".includes(button.textContent) || !"./*-+".includes(lastChar)) {
                inputBox.value += button.textContent;
            }
        });
    }
});

clearAll.addEventListener('click', () => {
    inputBox.value = "0";
});

delet.addEventListener('click', () => {
    inputBox.value = inputBox.value.slice(0, -1);
    if (inputBox.value.length == 0) {
        inputBox.value = "0";
    }
});

equal.addEventListener('click', () => {
    inputBox.value = eval(inputBox.value);
});
