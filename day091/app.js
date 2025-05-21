const body = document.getElementById("body")
const button = document.getElementsByClassName("btn")[0]
const span = document.getElementById("counter")
console.log(span)


button.addEventListener("click", handleIncrement)

let count = 0

function handleIncrement(){
    console.log("Button clicked")
    count -= 1
    span.textContent = count
}