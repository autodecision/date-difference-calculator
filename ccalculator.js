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
    let yearsPlural, monthsPlural, daysPlural;
    yearsPlural = differenceSingle.years != 1 ? "s" : "";
    monthsPlural = differenceSingle.months != 1 ? "s" : "";
    daysPlural = differenceSingle.days != 1 ? "s" : "";
    oneDateOutput.innerText = `The difference is ${differenceSingle.years} year${yearsPlural}, ${differenceSingle.months} month${monthsPlural}, and ${differenceSingle.days} day${daysPlural}!`
});

twoDatesBtn.addEventListener("click", () => {
    firstDateVal = moment(firstDate.value);
    secondDateVal = moment(secondDate.value);
    differenceDouble = moment.preciseDiff(firstDateVal, secondDateVal, true);
    let yearsPlural, monthsPlural, daysPlural;
    yearsPlural = differenceDouble.years != 1 ? "s" : "";
    monthsPlural = differenceDouble.months != 1 ? "s" : "";
    daysPlural = differenceDouble.days != 1 ? "s" : "";
    twoDatesOutput.innerText = `The difference is ${differenceDouble.years} year${yearsPlural}, ${differenceDouble.months} month${monthsPlural}, and ${differenceDouble.days} day${daysPlural}!`
});

document.getElementById("second-date").setAttribute("value", makeMaxDate());