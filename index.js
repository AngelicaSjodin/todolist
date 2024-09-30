const addButton=document.getElementById('addButton');


document.getElementById("addButton").addEventListener("click",addToList)
document.getElementById("input").addEventListener("keypress",function(event){
    if (event.key === "enter") {
        addToList();
    }
});

function addToList(){
    const input = document.getElementById('input');
    const inputText=input.value();

    if (inputText !== ""){
        const list = document.getElementById("list");
        const listItem = document.createElement("li");

    }
}


