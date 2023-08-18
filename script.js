const input = document.querySelector(".inputer");
const button = document.querySelector(".additem");
let filter = document.querySelector("#selected");
const listitem = document.querySelector(".items");

button.addEventListener("click",additem);
listitem.addEventListener("click", delectitem);
filter.addEventListener("click" , filtering);

function length(){
    return input.value.length;
}

function additem(event){
        
        console.log("Clicked");
        event.preventDefault();

        const divelement = document.createElement("div");
          divelement.classList.add("Todo");

        const checkeditem = document.createElement("button");
            checkeditem.innerText = "Checked";
            checkeditem.classList.add("button1");
            divelement.appendChild(checkeditem);
        
        const textvalue = document.createElement("li");
            textvalue.innerText= input.value;
            textvalue.classList.add("middlevalue");
            divelement.appendChild(textvalue);

        const delectbutton = document.createElement("button");
            delectbutton.innerText= "Delect";
            delectbutton.classList.add("button3");
            divelement.appendChild(delectbutton);

            listitem.appendChild(divelement);
            input.value="";
}
function delectitem(event){
    const item = event.target;
    if(item.classList[0] === "button3"){
        const todo = item.parentElement;
        todo.classList.add("animation");
        todo.addEventListener("transitioned", function(){
            todo.remove();
        })
    }
    if(item.classList[0] == "button1"){
        const todo = item.parentElement;
        todo.classList.toggle("Completed");
    }
}

function filtering(event){
    const todos = items.childNodes;
    todos.forEach(function (todo) {
        switch(event.target.value){
            case "All":
                todo.style.display = "flex";
                break;
            case "Completed":
                if(
                todo.classList.contains("Completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "Uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display ="flex";
                }else{
                    todo.style.display ="none";
                }
                break;
        }

    });
}
  