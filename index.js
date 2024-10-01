
const inputField = document.getElementById('input');
const listField = document.getElementById("list");

function addList(){

    if(inputField.value !== ""){
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listField.appendChild(li); //appendchild

        let span = document.createElement("span");
        span.innerHTML = "Delete";
        li.appendChild(span);
    }
    inputField.value = "";
    Save();
}

listField.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        Save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

function Save(){
    localStorage.setItem("data", listField.innerHTML);
}
function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show();