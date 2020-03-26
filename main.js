"use strict"
// MY AGE
function calculateAge() {
    let myBirthDay = new Date("1988-06-21");
    let currentDate = new Date();
    let age = currentDate.getFullYear() - myBirthDay.getFullYear();
    let month = currentDate.getMonth() - myBirthDay.getMonth();
    if ( month < 0 || month === 0 && currentDate.getDate() < myBirthDay.getDate()) {
        age--;
    }
    return age;
}
let ageInfo = document.querySelector('.my-age');
let myAge = calculateAge();
let years;
let lastNumber = myAge % 10;
if(lastNumber == 1) {    
    years = "год";      
} else if (lastNumber > 1 && lastNumber < 5) {
    years = "года";
} else {
    years = "лет";
}
ageInfo.textContent = "Возраст: " + myAge + " " + years;
