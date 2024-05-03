
const gridArea = 600;
let boxesPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${gridArea}px` ;

newGrid.addEventListener("click", () => {
    let gridSize = prompt("Please enter the no.of squares for each side");
    boxesPerSide = gridSize ;
    createGrids();
})


function setBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGrids() {

    sketchArea.textContent="";
    const totalSquares = `${boxesPerSide * boxesPerSide}`;
    const widthOrHeight = `${(gridArea / boxesPerSide)}px`;

    for(let i =0 ; i < totalSquares; i++)
    {
        const gridCells = document.createElement("div");
        gridCells.style.width = gridCells.style.height = widthOrHeight;

        sketchArea.appendChild(gridCells).className = "cell";

        gridCells.addEventListener("mouseover", setBackgroundColor);

        erase.addEventListener("click" , () => {
            gridCells.addEventListener("mouseover", () => {
                gridCells.style.backgroundColor = "white";
            })
        })

        black.addEventListener("click" , () => {
            gridCells.addEventListener("mouseover", () => {
                gridCells.style.backgroundColor = "black";
            })
        })


        clear.addEventListener("click", () => {
            gridCells.style.backgroundColor = "White";
        })


        randm.addEventListener("click", () => {
            gridCells.addEventListener("mouseover")
        })
    }
}




createGrids();



