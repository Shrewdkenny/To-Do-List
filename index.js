const button = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");


button.addEventListener("click", function(){
    var paragrapgh = document.createElement("p")
    paragrapgh.classList.add("paragraph-styling")
    paragrapgh.innerText = inputField.value;
    toDoContainer.appendChild(paragrapgh);
    inputField.value = ""
    paragrapgh.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragrapgh);})

})
 
