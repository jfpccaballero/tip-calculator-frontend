let percentages = document.querySelectorAll(".tip-percentage");
let bill = document.querySelector(".bill-amount");
let people = document.querySelector(".people");
let tipPerson = document.querySelector(".result-tip");
let tipTotal = document.querySelector(".result-total");
let reset = document.querySelector(".reset");
let custom = document.querySelector(".custom");
let message = document.createElement("div");
people.before(message);

message.innerHTML= "Can't be zero";
message.style.display = "none";
tipPerson.innerHTML = "$0.00" ;
tipTotal.innerHTML = "$0.00" ;

percentages.forEach ( percentage => {
    percentage.onclick = () => {
        people.onkeyup = () => {
            if (people.value == 0 ) {
                people.classList.add("warning");
                message.style.display = "block";
                message.classList.add("warning-msg");
            } else {
                people.classList.remove("warning");
                message.style.display = "none";
                let total =  (bill.value * percentage.value) / 100;
                total = Math.round((total + Number.EPSILON) * 100) / 100;
                let perPerson = total / people.value;
                perPerson =  Math.round((perPerson + Number.EPSILON) * 100) / 100;
                tipPerson.innerHTML = "$" + perPerson;
                tipTotal.innerHTML = "$" + total;
            }
        }
    }
});

reset.onclick = () => {
    people.value = "";
    bill.value = "";
    custom.value = "";
    tipPerson.innerHTML = "$0.00" ;
    tipTotal.innerHTML = "$0.00" ;
}