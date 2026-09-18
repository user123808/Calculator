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
        let expression = display.value;

        expression = expression.replace(/\^/g, "**");
        expression = expression.replace(/(\d+)!/g, "factorial($1)");

        display.value = eval(expression);

    } catch {
        display.value = "Error";
    }
}
function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function sqrtNumber() {
    try {
        display.value = Math.sqrt(Number(display.value));
    } catch {
        display.value = "Error";
    }
}

function changecalculator() {
    window.location.href = "index.html";
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
