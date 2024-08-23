// input elements
// slider element
const sliderEl = document.querySelector("#slider");

const numberOfViews = document.querySelector(".views-number");
const amountDue = document.querySelector(".amount");

// toggle buttons
const toggleEl = document.querySelector("#check-box");
const duration = document.querySelector(".per-duration");


let timeFrame = 12;
let startAmount = 16;
let currentAmout;

toggleEl.addEventListener("change", (e) => {
   console.log(e.target.checked);
   if(e.target.checked) {
    duration.textContent ="year";
    timeFrame = 12;
    startAmount = 16 * 12;
    amountDue.textContent = startAmount;
    sliderEl.value=1;
    numberOfViews.textContent = 100;
    sliderEl.style.background = 'hsl(224, 65%, 95%)';
   
    console.log(timeFrame, startAmount);

   } else {
    duration.textContent = "month";
    timeFrame = 1;
    startAmount = 16;
    amountDue.textContent = startAmount;
    sliderEl.value=1;
    numberOfViews.textContent = 100;
    sliderEl.style.background = 'hsl(224, 65%, 95%)';
    console.log(timeFrame, startAmount);
   }
});



sliderEl.addEventListener("input", (event) => {
    const sliderValue = event.target.value ;
    sliderEl.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${sliderValue}% , hsl(224, 65%, 95%) ${sliderValue}%  )`; 
    numberOfViews.textContent = 100 * sliderValue;

    amountDue.textContent =  startAmount * timeFrame * sliderValue;
    // if(!duration.checked) {
    //     // duration.textContent = "month";
    //     // amountDue.textContent = 16 * sliderValue;
    //     amountDue.textContent = startAmount * timeFrame * sliderValue;
    // } else {
    //     // duration.textContent ="year";
    //     // amountDue.textContent = 16 * 12 * sliderValue;
    //     amountDue.textContent = startAmount * timeFrame * sliderValue;
    // }
   
})