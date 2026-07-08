let count = 0;
let incrementBttn = document.querySelector("#increment");

let result = document.querySelector("#btn")
let display = document.querySelector("#maincontainer");

incrementBttn.addEventListener("click", function (){
    console.log("button is clicked");
    count++;
    result.innerText = count;
    if ( count > 0 ){
        result.style.color = "green"
    }
     else if ( count == 0 ){
        result.style.color = "blue"
    }
    
   
})

let decrementBtn = document.querySelector("#decrement")
decrementBtn.addEventListener("click", function(){
    if (count < 0 ){
        result.style.color = "red"
    }
    count--;
    result.innerText = count;
})

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function(){
    count = 0
   
    result.innerText = count;
    
})
// let button = document.querySelector("#maincontainer")
// button.addEventListener("dblclick", function(){

//    display.style.backgroundColor = "red";

// })

i


