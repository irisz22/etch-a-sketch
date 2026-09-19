const container = document.getElementById("container");
const newDiv = document.createElement("div");

const button = document.querySelector("button");
let size = 16;
let sideLength = 600;

button.addEventListener('click', () => {
    size = Number(prompt("Enter number of squares per side:"));
    if (size > 100) {
        window.alert("The maximum is 100! Try again.");
    } else {
        console.log(size);
        clearGrid();
        createGrid(size);
    }
});

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            let side = sideLength / size;

            newDiv.style.backgroundColor = "grey";
            newDiv.style.height = `${side}px`;
            newDiv.style.width = `${side}px`;

            newDiv.addEventListener('mouseenter', () => {
                //console.log("listening");
                //newDiv.classList.add('hoverClass');
                newDiv.style.backgroundColor = "pink";
                //console.log("added");
            });

            console.log("new div created");
            container.appendChild(newDiv);
        }
    }
}

function clearGrid() {
    container.replaceChildren();
}

createGrid(16);