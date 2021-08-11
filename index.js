function createGrid(width, heigth) {
  let arr = [];
  for (i = 0; i < width; i++) {
    arr[i] = [];
    for (j = 0; j < heigth; j++) {
      arr[i][j] = Math.floor(Math.random() * (1 - 0 + 1) - 0);
    };
  };
  return arr;
};

let mat = createGrid(10, 10);

function findingNeighbors(arr, i, j) {
  let row = arr.length -1;
  let col = arr[0].length -1;

  for (let x = i; x <= row; x++) {
    for (let y = j; y <= col; y++) {
      let xc_1 =  x - 1;
      let yc_1 = y - 1;
      let xc_2 = x - 1;
      let yc_2 = y;
      let xc_3 = x - 1;
      let yc_3 = y + 1;
      let xc_4 = x;
      let yc_4 = y + 1;
      let xc_5 = x + 1;
      let yc_5 = y + 1;
      let xc_6 = x + 1;
      let yc_6 = y;
      let xc_7 = x + 1;
      let yc_7 = y - 1;
      let xc_8 = x;
      let yc_8 = y - 1;

      if (xc_1 == -1) {
        xc_1 = row;
      }; 
      if (yc_1 == -1) {
        yc_1 = col;
      };
      if (xc_2 == -1) {
        xc_2 = row;
      };
      if (yc_2 == -1) {
        yc_2 = col;
      };
      if (xc_3 == -1 ) {
        xc_3 = row;
      }; 
      if (yc_3 == col + 1) {
        yc_3 = yc_3 - col-1;
      };
      if (yc_4 == col + 1) {
        yc_4 = yc_4 - col-1;     
      };
      if (xc_5 == row + 1) {
        xc_5 = xc_5 - row-1;
      };
      if (yc_5 == col + 1) {
        yc_5 = yc_5 - col-1;
      };
      if (xc_6 == row + 1) {
        xc_6 = xc_6 - row-1;
      };
      if (xc_7 == row + 1) {
        xc_7 = xc_7 - row-1;
      };
      if (yc_7 == -1) {
        yc_7 = col;
      };
      if (yc_8 == -1) {
        yc_8 = col;
      };
      return [arr[xc_1][yc_1], arr[xc_2][yc_2], arr[xc_3][yc_3], arr[xc_4][yc_4], arr[xc_5][yc_5], arr[xc_6][yc_6], arr[xc_7][yc_7], arr[xc_8][yc_8]];
    };
  };
}

function createGridTwo() {
  let newArray = [];
  for (let i = 0; i < mat.length; i++) {
    newArray.push(i);
    newArray[i] = [];
    for (let j = 0; j < mat[i].length; j++) {
      newArray[i].push(j);
      let neib = findingNeighbors(mat, i, j);
      var count = neib.filter(el => { return el == 1}).reduce((el, count) =>  el + count);
        if (mat[i][j] == 1) {
          if (count == 2 || count == 3) {
            newArray[i][j] = 1;
          } else {
            newArray[i][j] = 0;
          }
        }
        if (mat[i][j] == 0) {
          if (count == 3) {
            newArray[i][j] = 1;
          } else {
            newArray[i][j] = 0;
          }
        }
    }
  }
  return newArray;
}