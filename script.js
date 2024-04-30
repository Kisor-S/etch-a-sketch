const container = document.querySelector(".container");



function defaultGrid () {
    makeRows(16);
    //makeColumns(16);
}


const rows = document.querySelector(".gridRow");
const columns = document.querySelector(".gridColumn");
let row ;
function makeRows(rowNum) {
    for(let i =0 ; i< rowNum ; i++) {
        row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        for(let j=0; j<= rowNum; j++) {
            let column = document.createElement("div");
            row.appendChild(column).className = "gridColumn";
        }
    }
}


let default1 = defaultGrid();

