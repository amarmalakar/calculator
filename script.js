const calculator__body = document.getElementById('calculator__body');
const dataTheme = document.querySelectorAll('[data-theme]')
const screen = document.getElementById('screen')

// ['navyBlue', 'purple', 'gray']

let currTheme = 'navyBlue';

const changeTheme = (theme) => {
    currTheme = theme;
    calculator__body.className = theme;
    for (let i = 0; i < dataTheme.length; i++) {
        if (dataTheme[i].dataset.theme === currTheme) {
            dataTheme[i].className = "num__listbox--dot active";
        } else {
            dataTheme[i].className = "num__listbox--dot";
        }
    }
    console.log(currTheme);
}

// Calculation Functions
const addMoreNums = (el) => screen.value += el;
const reset = () => screen.value = '';
const calculate = () => screen.value = eval(screen.value);
const deleteNum = () => {
    if (screen.value.length === 0) return null;
    let numToArr = screen.value.split('');
    numToArr.pop()
    screen.value = numToArr.join('');
}