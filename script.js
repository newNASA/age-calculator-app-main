const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const days = document.querySelector(".days");
const months = document.querySelector(".months");
const years = document.querySelector(".years");
const button = document.querySelector("button");

function buttonClicked() {
    let dayValue = parseInt(day.value);
    let monthValue = parseInt(month.value) - 1;
    let yearValue = parseInt(year.value);

    const currentDate = new Date();
    const enteredDate = new Date(`${yearValue}-${monthValue + 1}-${dayValue}`);

    const timeDifferenceInMilliseconds = currentDate - enteredDate;

    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor(timeDifferenceInMilliseconds / millisecondsInADay);

    const yearsDifference = Math.floor(daysDifference / 365);
    const monthsDifference = Math.floor((daysDifference % 365) / 30); 
    const remainingDays = daysDifference % 30; 

    years.textContent = yearsDifference
    months.textContent = monthsDifference
    days.textContent = remainingDays
}

button.addEventListener('click', buttonClicked);
