
const inputField = document.getElementById('input');
const listField = document.getElementById("list");



function save(){
    var storage = [];
    var tasks = document.querySelectorAll("li");
    for(var i=0; i < tasks.length; i++){
        storage.push(tasks[i].innerHTML);
    }
    localStorage.setItem("items",JSON.stringify(storage));
}
function load(){
    const storedItems = JSON.parse(localStorage.getItem("items"));
    console.log(storedItems)
    document.getElementById("log").innerHTML = storedItems;
}

function addList(){

    if(inputField.value !== ""){
        
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listField.appendChild(li); 

        //let span = document.createElement("span");
        //span.innerHTML = "&#128280;";
        //li.appendChild(span);

        //let p = document.createElement("p");
        //p.innerHTML = "delete";
        //li.appendChild(p);
        
    }
    save()
    inputField.value = "";
    
}

listField.addEventListener("click", function(e){
    
    if((e.target.tagName === "LI")){
        e.target.style.textDecoration = "line-through";
    }

    //if(e.target.tagName === "P"){
    //    e.target.parentElement.remove();
    //}
        
});

window.onload = load()