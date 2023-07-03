let square = document.createElement("div");
square.style.width = "100px";
square.style.height = "100px";
square.style.backgroundColor = "white";
square.style.border = "1px solid black";

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        document.container.appendChild(square)
    }
}