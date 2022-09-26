

// Target input
var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");
// Target Calculation Buttons
var add = document.querySelector("#add");
var sub = document.querySelector("#sub");
var mul = document.querySelector("#mul");
var div = document.querySelector("#div");
var mod = document.querySelector("#mod");
var ac = document.querySelector("#ac");
// Target Result Text
var finalResult = document.querySelector("#finalResult");

var number1value = 0;
var number2value = 0;

// Define Events

number1.addEventListener('change', 
    function() {
        number1value = number1.value;
    }
);
number2.addEventListener('change', 
    function() {
        number2value = number2.value;
    }
);

add.addEventListener('click', 
    function() {
        var Total = parseInt(number1value) + parseInt(number2value);
        finalResult.textContent = Total;
    }
);
sub.addEventListener('click', 
    function() {
        var Total = parseInt(number1value) - parseInt(number2value);
        finalResult.textContent = Total;
    }
);
mul.addEventListener('click', 
    function() {
        var Total = parseInt(number1value) * parseInt(number2value);
        finalResult.textContent = Total;
    }
);
div.addEventListener('click', 
    function() {
        var Total = parseInt(number1value) / parseInt(number2value);
        finalResult.textContent = Total;
    }
);
mod.addEventListener('click', 
    function() {
        var Total = parseInt(number1value) % parseInt(number2value);
        finalResult.textContent = Total;
    }
);
ac.addEventListener('click', 
    function() {
        number1.value = 0;
        number2.value = 0;
        finalResult.textContent = '0';
    }
);