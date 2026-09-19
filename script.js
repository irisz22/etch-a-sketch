const container = document.getElementById("container");
const newDiv = document.createElement("div");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");

        newDiv.style.backgroundColor = "grey";
        newDiv.style.height = '24px';
        newDiv.style.width = '24px';

        console.log("new div created");
        container.appendChild(newDiv);
    }
}
