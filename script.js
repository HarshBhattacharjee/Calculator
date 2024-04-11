var display = document.getElementById('display');
if (display.value.length == 0) {
    display.value = "0";        // initialize
}

function addDisplay(value) {
    if (display.value === "Invalid Input" || display.value === "0" && value !== "." && value !== " + " && value !== " - " && value !== " x " && value !== " / ") {
        display.value = value;
    } else {
        display.value += value;}
}

function delDisplay() {
    if ( display.value[display.value.length-1] == " ") {
        display.value = display.value.slice(0,-3);
    } else {
        display.value = display.value.slice(0,-1);      // slicing
    }

    if (display.value === "") {
        display.value = "0";
    }
}

function resetDisplay() {
    display.value = "0";
}

function calculate() {
    try {
        let result = eval(display.value.replace('x', '*'));
        if (result%1 !== 0) {         // if it's not int
            result = result.toFixed(3);         // limits decimal place till 3
          }
        display.value = result;
    } catch (error) {
        display.value = "Invalid Input";
    }
}
