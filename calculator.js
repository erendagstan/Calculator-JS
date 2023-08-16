let calculation = localStorage.getItem('calculation') || ' ';
displayCalc();
function updateCalc(value) {

    calculation += value;

    displayCalc();

    localStorage.setItem('calculation', calculation);

}

function displayCalc(){
    document.querySelector('.js-sum').innerHTML = calculation;

    localStorage.setItem('calculation', calculation);
}

function clearBtnFunction(){
    calculation = ' ';
    document.querySelector('.js-sum').innerHTML = ' ';
}
