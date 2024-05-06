
const gridArea = 700;
let boxesPerSide = 16;
let mouseIsDown = false;
let blk = true;
let ran = true;
let ers = true;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${gridArea}px` ;
const randm = document.querySelector("#randm");

newGrid.addEventListener("click", () => {
    let gridSize = prompt("Please enter the no.of squares for each side");
    boxesPerSide = gridSize ;
    createGrids();
})


function setBackgroundColorBlack(){
    if(blk){
        if(mouseIsDown){
            this.style.backgroundColor = "black";
        }
    }
}

function eraseBackgroundColor() {
    if(ers){
        if(mouseIsDown){
            this.style.backgroundColor = "white";
        }
    }
}

const hex = '0123456789ABCDEF';
function setBackgroundRandColor () {
    if(ran){
        if(mouseIsDown){
            let color = '#';
            for (let i = 0 ; i < 6 ; i++){
                color = color + hex[Math.floor(Math.random() * 16)];
            }
            this.style.backgroundColor = color
        } ;
    }
}


function createGrids() {

    if(boxesPerSide < 2 || boxesPerSide > 100){
        alert("Please enter a number between 2 and 100");
    }

    else {

        sketchArea.textContent="";
        const totalSquares = `${boxesPerSide * boxesPerSide}`;
        const widthOrHeight = `${(gridArea / boxesPerSide)}px`;

        for(let i =0 ; i < totalSquares; i++)
        {
            const gridCells = document.createElement("div");
            gridCells.style.width = gridCells.style.height = widthOrHeight;

            sketchArea.appendChild(gridCells).className = "cell";

            gridCells.addEventListener("mouseenter", setBackgroundColorBlack);
            gridCells.addEventListener("mousedown", function(){mouseIsDown = true});
            gridCells.addEventListener("mouseup", function(){mouseIsDown = false});

            erase.addEventListener("click" , () => {
                blk = false;
                ran = false;
                ers = true;
                gridCells.addEventListener("mouseover", eraseBackgroundColor);
            });

            black.addEventListener("click" , () => {
                ran = false;
                ers = false;
                blk = true ;
                gridCells.addEventListener("mouseover", setBackgroundColorBlack);
            });
            
            clear.addEventListener("click", () => {
                gridCells.style.backgroundColor = "White";
            })


            randm.addEventListener("click", () => {
                ran = true;
                ers = false;
                blk = false;
                gridCells.addEventListener("mouseover", setBackgroundRandColor);
            });
        }
    }
}

createGrids();



