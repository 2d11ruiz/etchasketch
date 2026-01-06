const container = document.querySelector(".container");

const drawGrid = (size) => {
    for (let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add('boxstyle');
        square.style.flexBasis = (100/size) + "%";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        container.appendChild(square);
    }
};

drawGrid(16);

const newgrid = document.querySelector(".newgrid");

const gbutton = document.createElement("button");
gbutton.textContent = "New Grid";
gbutton.style.margin = "10px auto";
gbutton.addEventListener("click", () => {
    let ginput = prompt("Enter New Grid Size, Max is 64, Default is 16:");
    if (ginput === null) return;
    let gsize = parseInt(ginput);
    if (!isNaN(gsize) && gsize > 0 && gsize <= 64) {
        container.innerHTML = "";
        drawGrid(gsize);
    } else {
        alert("Invalid Input. Please Enter a Number Between 1 and 64. Default 16 Size Grid Drawn.");
        container.innerHTML = "";
        drawGrid(16);
    }

});
newgrid.appendChild(gbutton);