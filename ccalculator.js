const onlyDate = document.getElementById("only-date");
const onlyDateBtn = document.getElementById("only-date-btn");
const oneDateOutput = document.getElementById("one-date-output");
const firstDate = document.getElementById("first-date");
const secondDate = document.getElementById("second-date");
const twoDatesBtn = document.getElementById("two-dates-btn");
const twoDatesOutput = document.getElementById("two-dates-output");
let onlyDateVal, firstDateVal, secondDateVal, differenceSingle, differenceDouble;

function makeMaxDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;    
    return today;
}

onlyDateBtn.addEventListener("click", () => {
    onlyDateVal = moment(onlyDate.value);
    differenceSingle = moment.preciseDiff(onlyDateVal, moment(), true);
    oneDateOutput.innerText = `The difference is ${differenceSingle.years} years, ${differenceSingle.months} months, and ${differenceSingle.days} days!`
});

twoDatesBtn.addEventListener("click", () => {
    firstDateVal = moment(firstDate.value);
    secondDateVal = moment(secondDate.value);
    differenceDouble = moment.preciseDiff(firstDateVal, secondDateVal, true);
    twoDatesOutput.innerText = `The difference is ${differenceDouble.years} years, ${differenceDouble.months} months, and ${differenceDouble.days} days!`
});

document.getElementById("second-date").setAttribute("value", makeMaxDate());