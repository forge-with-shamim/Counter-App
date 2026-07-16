let count = 0;
let incrementBttn = document.querySelector("#increment");

let result = document.querySelector("#btn")

incrementBttn.addEventListener("click", function (){
    console.log("button is clicked");
    count++;
    result.innerText = count;
    if ( count > 0 ){
        result.style.color = "green"
    }
     else if ( count == 0 ){
        result.style.color = "black"
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
    result.style.color = "black"
    
})
// let button = document.querySelector("#maincontainer")
// button.addEventListener("dblclick", function(){

//    display.style.backgroundColor = "red";

// })

i


