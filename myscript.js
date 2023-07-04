let square = document.createElement("div");
square.style.width = "20px";
square.style.height = "20px";
square.style.backgroundColor = "white";
square.style.border = "1px solid black";

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        $("#container").append("<div class='grid'></div>");
    };
};
$(".grid").width(960/x);
$(".grid").height(960/x);