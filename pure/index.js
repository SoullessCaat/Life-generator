import {returnValues} from './public/returningNeighbors.js'
let div = document.createElement('div');
let table = document.getElementsByTagName('table');

const width = 10;
const heigth = 10;

const createDefaulValuesBord = (width, heigth) => {
  let arr = []
  for (let i = 0; i < width; i++) {
    arr[i] = []
    for (let j = 0; j < heigth; j++) {
      arr[i][j] = Math.floor(Math.random() * (1 - 0 + 1) - 0);
    };
  };
  return arr;
};


const returnCount = (arr, i, j) => {
  let c = returnValues(arr, i, j);
  let count = c.reduce((count, acc) => count + acc);

  return count;
};

const updateValues = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      let count = returnCount(arr, i, j);
      if (arr[i][j] === 1) {
        if (count == 3 || count == 2) {
          newArr[i][j] = 1;
        } else {
          newArr[i][j] = 0;
        }
      } 
      if (arr[i][j] == 0) {
        if (count == 3) {
          newArr[i][j] = 1;
        } else {
          newArr[i][j] = 0;
        }
      };
    }
  }
  return newArr;
};

let defaultBoard = createDefaulValuesBord(width, heigth);
let updateBoard = updateValues(defaultBoard);


const createBoard = (arr) => {
  let table = document.createElement('table');
  div.appendChild(table);
  let tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  document.body.appendChild(table);
  
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr');
    tableBody.appendChild(tr); {
      for (let j = 0; j < arr[i].length; j++) {
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

createBoard(defaultBoard);
createBoard(updateBoard);

let up = setTimeout(function update() {
  table[1].parentNode.removeChild(table[1])
  updateBoard = updateValues(updateBoard);
  setTimeout(() => {
    createBoard(updateBoard)
    console.time()
    console.timeEnd()
  }, 0)
  up = setTimeout(update, 2000) 
}, 1000)
