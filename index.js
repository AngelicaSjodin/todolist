
const inputField = document.getElementById('input');
const listField = document.getElementById("list");

function addList(){

    if(inputField.value !== ""){
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listField.appendChild(li); 

        let span = document.createElement("span");
        span.innerHTML = "check";
        li.appendChild(span);
    }
    inputField.value = "";
}

listField.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.style.textDecoration = "line-through";
    }
},false);

