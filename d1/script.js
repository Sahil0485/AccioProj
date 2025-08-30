let counter = 1;

let curr = document.getElementById("curr");
let dec = document.getElementById("dec");
let inc = document.getElementById("inc");
let clr = document.querySelector("#clr");
let err = document.querySelector("#err");

dec.addEventListener("click", (e) => {
    if(counter <= 0) err.style.display = "block";
    else counter--;
    curr.innerHTML = `Your current count is : ${counter}`;
})

inc.addEventListener("click", (e) => {
    if(counter >= 0) err.style.display = "none";
    counter++;
    curr.style.display = "block";
    curr.innerHTML = `Your current count is : ${counter}`;
})

clr.addEventListener("click", (e) => {
    counter = 0;
    curr.style.display = "none";
})

curr.innerHTML = `Your current count is : ${counter}`;