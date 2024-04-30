const container = document.querySelector(".container");



function defaultGrid () {
    makeRows(16);
    //makeColumns(16);
}

let row ;
function makeRows(rowNum) {
    for(let i =0 ; i< rowNum ; i++) {
        row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        for(let j=0; j< rowNum; j++) {
            let column = document.createElement("div");
            row.appendChild(column).className = "gridColumn";

            column.addEventListener('mouseover', () =>
            {
                column.style.backgroundColor = "black";
            });
        }
    }
}

const rows = document.getElementsByClassName(".gridRow");
const columns = document.getElementsByClassName(".gridColumn");


let default1 = defaultGrid();

