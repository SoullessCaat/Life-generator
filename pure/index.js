import {findingNeighbors} from './public/fingindNeighbors.js'
import {returnValues} from './public/returningNeighbors.js'

let table = document.createElement('table');
let tableC = document.createElement('table');
let tableBody = document.createElement('tbody');
let tableCBody = document.createElement('tbody');
table.appendChild(tableBody);
tableC.appendChild(tableCBody);


const width = 10;
const heigth = 10;

function createGrid(width, heigth) { 
  let arr = []; 
  for (let i = 0; i < width; i++) {
    arr[i] = [];
    let tr = document.createElement('tr');
      tableBody.appendChild(tr); {
        for (let j = 0; j < heigth; j++) {
          arr[i][j] = Math.floor(Math.random() * (1 - 0 + 1) - 0);
          let td = document.createElement('td');
          td.innerHTML = arr[i][j];
          if (arr[i][j] === 1) {
            td.className = 'live';
          } else {
            td.className = 'die';
          };
          tr.appendChild(td);
      };
    };
  };
  return arr; 
};


let arr = [
  [1, 0, 1, 0, 1], 
  [1, 1, 1, 1, 1], 
  [0, 1, 0, 0, 0], 
  [1, 1, 0, 0, 0]
]



let mat = createGrid(width, heigth);

const createGridTwo = (width, heigth) => {                            
  let newArray = [];
  for (let i = 0; i < width; i++) {
    newArray[i] = [];
    let trC = document.createElement('tr');
    tableCBody.appendChild(trC); {
      for (let j = 0; j < heigth; j++) {
        let neib = returnValues(mat, i, j);    
        let count = neib.reduce((count, acc) => count + acc); 
        if (mat[i][j] == 1) {
          if (count == 2 || count == 3) {
            newArray[i][j] = 1;
          } else {
            newArray[i][j] = 0;
          };
        };
        if (mat[i][j] == 0) {
          if (count == 3) {
            newArray[i][j] = 1;
          } else {
            newArray[i][j] = 0;
          };
        };
        let tdC = document.createElement('td');
        tdC.innerHTML = newArray[i][j];
        if (newArray[i][j] === 1) {
          tdC.className = 'live';
        } else {
          tdC.className = 'die';
        }
        trC.appendChild(tdC);
      };
    };
  };
 
  return newArray;
}
let matTwo = createGridTwo(width, heigth);



console.log(mat)
console.log(matTwo)
document.body.appendChild(table);
document.body.appendChild(tableC);