// counting
let count = 0;
// selecting buttons
let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let resetBtn = document.querySelector("#reset");
let result = document.querySelector("#btn");

// function for animation
function animateColor(){
      // adding class on click
    result.classList.add("counter-pop");

    // removing class after interval
    setTimeout(() => {
        result.classList.remove("counter-pop")
    },200);

}

// function for colorUpdate
function colorUpdate(){
    if(count === 0 ) {
        result.style.color = "black";
    }
    else if(count > 0){
        result.style.color = "green";
    }
    else{
        result.style.color = "red";
    }
}
function updateUI(){

    result.innerText = count;
    colorUpdate();
    animateColor();
    saveCounter();
}
function increaseCounter(){
    count++;
    updateUI();
}
function decreaseCounter(){
    count--;
    updateUI();
}
function resetCounter(){
    count = 0;
    updateUI();
}


function saveCounter(){
    localStorage.setItem("counterValue", count);

}
function loadCounter(){
    let savedCount = localStorage.getItem("counterValue");
    if (savedCount !== null){
        count = Number(savedCount);
        result.innerText = count;
        colorUpdate();
    }
}
loadCounter();

// eventListener on incrementBtn
incrementBtn.addEventListener("click", function (){

    increaseCounter();
});

// eventListener on decrementBtn
decrementBtn.addEventListener("click", function(){
    decreaseCounter();
});

// eventListener on resetBtn
resetBtn.addEventListener("click", function(){
    resetCounter();
    
});
document.addEventListener("keydown", function(event){
    if ( event.key === "ArrowUp"){
        increaseCounter();
    }
    else if ( event.key === "ArrowDown"){
       decreaseCounter();
    }
    else if ( event.key === " "){
       event.preventDefault();
       resetCounter();
    }
});





