var barEl = [];
let delay = 300;

// var container = document.createElement("div");
// document.getElementById("main").appendChild(container);
// function to generate bars
// size
// let countElement = document.querySelector('#arrSize');
// countElement.addEventListener('input', () => {
//     num = parseInt(countElement.value);
// });
generateBars();

function generateBars(num = 30) {
    clearBox()
    for (let i = 0; i < num; i += 1) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        barEl.push(value);
        bar.style.height = `${value * 3}px`;
        bar.style.background = "white";
        bar.style.border = "1px solid black"
        bar.style.transform = `translateX(${i * 30}px)`;
        bar.classList.add(`barNo${i}`);
        document.getElementById("main").appendChild(bar);
    }
}
function clearBox() {
    let bar = document.querySelector("#main");
    // console.log(document.querySelector("#main"))
    bar.innerHTML = '';
}
//speeed
let delayElement = document.querySelector('#sortSpeed');

delayElement.addEventListener('input', () => {
    //console.log(delayElement.value), 
    //console.log(typeof(delayElement.value));
    delay = 360 - parseInt(delayElement.value);               // 360 - 300 min delay
});






