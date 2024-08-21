// input elements
// slider element
const sliderEl = document.querySelector("#slider");

sliderEl.addEventListener("input", (event) => {
    const sliderValue = event.target.value ;
    sliderEl.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${sliderValue}% , hsl(224, 65%, 95%) ${sliderValue}%  )`; 
})