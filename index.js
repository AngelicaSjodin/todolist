
const inputField = document.getElementById('input');
const listField = document.getElementById("list");

function addList(){

    if(inputField.value !== ""){
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listField.appendChild(li); 

        let span = document.createElement("span");
        span.innerHTML = "Check";
        li.appendChild(span);

        let p = document.createElement("p");
        p.innerHTML = "delete";
        li.appendChild(p);

    }
    inputField.value = "";
}

listField.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.style.textDecoration = "line-through";
    }

    if(e.target.tagName === "P"){
        e.target.parentElement.remove();
    }
    
        
});

