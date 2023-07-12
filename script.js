

document.querySelector(".btn").addEventListener("click", showInput);


function showInput(){
    let inputbox = document.getElementById("input")
    
    let textBox = document.getElementById("text-box");
    textBox.innerHTML = inputbox.value;
}