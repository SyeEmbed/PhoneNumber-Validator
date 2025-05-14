const userInput = document.getElementById('user-input');
const results = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const countryCode = '^(1\\s?)?';
const areaCode = '(\\(\\d{3}\\)|\\d{3})';
const separator = '[\\s\\-]?';
const middle = '\\d{3}';
const last = '\\d{4}'
const finalNumber = new RegExp(
    `${countryCode}${areaCode}${separator}${middle}${separator}${last}$`
);

function isValidNumber(number){
    return finalNumber.test(number); 
};

checkBtn.addEventListener("click", () => {

    const number = userInput.value;

    if(!userInput.value){
        alert('Please provide a phone number');
        return
    };

    results.textContent = isValidNumber(number)
        ? `Valid US number: ${number}`
        : `Invalid US number: ${number}`;

    userInput.value = '';

    return number;

});

clearBtn.addEventListener("click", () => {
    results.textContent = '';
    userInput.value = '';
});