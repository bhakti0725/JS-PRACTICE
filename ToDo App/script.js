const inputBOx= document.getElementById("inputbox");
const lContainer= document.getElementById("listcontainer");

function addTask(){
    if(inputBOx.value === ''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBOx.value;
        lContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBOx.value=" ";
saveData();
}

lContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", lContainer.innerHTML);
}

function showList(){
    lContainer.innerHTML=localStorage.getItem("data");
}
showList();