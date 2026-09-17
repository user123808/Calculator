const display = document.getElementById("display");

function addtoDisplay(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function cleardisplay() {
    display.value = "0";
}

function deletelast() {
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        addtoDisplay("1");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "2") {
        addtoDisplay("2");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "3") {
        addtoDisplay("3");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "4") {
        addtoDisplay("4");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "5") {
        addtoDisplay("5");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "6") {
        addtoDisplay("6");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "7") {
        addtoDisplay("7");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "8") {
        addtoDisplay("8");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "9") {
        addtoDisplay("9");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "0") {
        addtoDisplay("0");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
        addtoDisplay("+");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "-") {
        addtoDisplay("-");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "*") {
        addtoDisplay("*");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "/") {
        addtoDisplay("/");
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Space") {
        cleardisplay();
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculate();
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        deletelast();
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === ",") {
        addtoDisplay(".");
    }
});
