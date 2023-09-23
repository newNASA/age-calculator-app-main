const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const days = document.querySelector(".days");
const months = document.querySelector(".months");
const years = document.querySelector(".years");
const label__day = document.querySelector(".label__day");
const label__month = document.querySelector(".label__month");
const label__year = document.querySelector(".label__year");
const dayspan = document.querySelector(".dayspan");
const monthspan = document.querySelector(".monthspan");
const yearspan = document.querySelector(".yearspan");
const button = document.querySelector("button");

function buttonClicked() {
    let dayValue = parseInt(day.value);
    let monthValue = parseInt(month.value) - 1;
    let yearValue = parseInt(year.value);
    const check_month = [3, 5, 8, 10];
    const check_month2 = [0, 1, 2, 4, 6, 7, 9, 11];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (!day.value || !month.value || !yearValue) {
        if (!day.value) {
            day.style.border = "1px solid var(--error)";
            label__day.style.color = "var(--error)";
            dayspan.style.color = "var(--error)";
            dayspan.textContent = "This field is required"
        } else {
            day.style.border = "1px solid var(--input-border-color)";
            dayspan.style.color = "initial";
            label__day.style.color = "var(--label-color)";
            dayspan.textContent = ""
        }

        if (!month.value) {
            month.style.border = "1px solid var(--error)";
            label__month.style.color = "var(--error)";
            monthspan.style.color = "var(--error)";
            monthspan.textContent = "This field is required";
        } else {
            month.style.border = "1px solid var(--input-border-color)";
            monthspan.style.color = "initial";
            label__month.style.color = "var(--label-color)";
            monthspan.textContent = ""
        }

        if (!year.value) {
            year.style.border = "1px solid var(--error)";
            label__year.style.color = "var(--error)";
            yearspan.style.color = "var(--error)";
            yearspan.textContent = "This field is required";
        } else {
            year.style.border = "1px solid var(--input-border-color)";
            yearspan.style.color = "initial";
            label__year.style.color = "var(--label-color)";
            yearspan.textContent = ""
        }
    } else if (day.value && month.value && year.value) {
        if (check_month.includes(monthValue) && dayValue == 31 || monthValue == 1 && dayValue >= 29) {
            dayspan.textContent = "Must be a valid date"
            year.style.border = "1px solid var(--error)";
            label__year.style.color = "var(--error)";
            yearspan.style.color = "var(--error)";
            month.style.border = "1px solid var(--error)";
            label__month.style.color = "var(--error)";
            monthspan.style.color = "var(--error)";
            day.style.border = "1px solid var(--error)";
            label__day.style.color = "var(--error)";
            dayspan.style.color = "var(--error)";
        } else if (check_month2.includes(monthValue) && dayValue > 31) {
            dayspan.textContent = "Must be valid day"
            day.style.border = "1px solid var(--error)";
            label__day.style.color = "var(--error)";
            dayspan.style.color = "var(--error)";
        }
        else if (monthValue > 12) {
            monthspan.textContent = "Must be valid month"
            month.style.border = "1px solid var(--error)";
            label__month.style.color = "var(--error)";
            monthspan.style.color = "var(--error)";
        }else if(yearValue > currentYear){
            yearspan.textContent = "Must be in the past";
            year.style.border = "1px solid var(--error)";
            label__year.style.color = "var(--error)";
            yearspan.style.color = "var(--error)";
        } else {
            day.style.border = "1px solid var(--input-border-color)";
            dayspan.style.color = "initial";
            label__day.style.color = "var(--label-color)";
            dayspan.textContent = ""
            month.style.border = "1px solid var(--input-border-color)";
            monthspan.style.color = "initial";
            label__month.style.color = "var(--label-color)";
            monthspan.textContent = ""
            year.style.border = "1px solid var(--input-border-color)";
            yearspan.style.color = "initial";
            label__year.style.color = "var(--label-color)";
            yearspan.textContent = ""
            const formattedDay = dayValue < 10 ? `0${dayValue}` : dayValue;
            const formattedMonth = (monthValue + 1) < 10 ? `0${monthValue + 1}` : monthValue + 1;

            const currentDate = new Date();
            const enteredDate = new Date(`${yearValue}-${formattedMonth}-${formattedDay}`);

            const timeDifferenceInMilliseconds = currentDate - enteredDate;

            const millisecondsInADay = 1000 * 60 * 60 * 24;
            const daysDifference = Math.floor(timeDifferenceInMilliseconds / millisecondsInADay);

            const yearsDifference = Math.floor(daysDifference / 365);
            const monthsDifference = Math.floor((daysDifference % 365) / 30);
            const remainingDays = daysDifference % 30;

            years.textContent = yearsDifference;
            months.textContent = monthsDifference;
            days.textContent = remainingDays;
        }
    }
}

button.addEventListener('click', buttonClicked);