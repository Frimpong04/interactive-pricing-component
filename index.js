// input elements
// slider element
const sliderEl = document.querySelector("#slider");

const numberOfViews = document.querySelector(".views-number");
const amountDue = document.querySelector(".amount");

// toggle buttons
const monthlyBtn = document.querySelector(".monthly-btn");
const yearlyBtn = document.querySelector(".yearly-btn");

sliderEl.addEventListener("input", (event) => {
    const sliderValue = event.target.value ;
    sliderEl.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${sliderValue}% , hsl(224, 65%, 95%) ${sliderValue}%  )`; 

    numberOfViews.textContent = 100 * sliderValue;
    amountDue.textContent = 16 * sliderValue;
})