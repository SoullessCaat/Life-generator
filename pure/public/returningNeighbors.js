import { findingNeighbors } from "./fingindNeighbors.js";


const returnNeigLeftUpper = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.leftUpper.x;
            j = n.leftUpper.y;
            return arr[i][j];
        }
    }
};

const returnUpper = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.upper.x;
            j = n.upper.y;
             return arr[i][j];
        }
    }
};

const returnNeigRightUpper = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.rightUpper.x;
            j = n.rightUpper.y;
            return arr[i][j];
        }
    }
}

const returnNeigRight = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.right.x;
            j = n.right.y;
            return arr[i][j];
        }
    }
};
const returnNeigRightLower = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.rightLower.x;
            j = n.rightLower.y;
            return arr[i][j];
        }
    }
};
const returnNeigLower = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.lower.x;
            j = n.lower.y;
            return arr[i][j];
        }
    }
};
const returnNeigLowerLeft = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.leftLower.x;
            j = n.leftLower.y;
            return arr[i][j];
        }
    }
}
;const returnNeigLeft = (arr, i, j) => {
    let n = findingNeighbors(arr, i, j);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            i = n.left.x;
            j = n.left.y;
            return arr[i][j];
        }
    }
}

function returnValues(arr, i, j) {
    let count = [];
    count.push(returnNeigLeftUpper(arr, i, j));
    count.push(returnUpper(arr, i, j));
    count.push(returnNeigRightUpper(arr, i, j));
    count.push(returnNeigRight(arr, i, j));
    count.push(returnNeigRightLower(arr, i, j));
    count.push(returnNeigLower(arr, i, j));
    count.push(returnNeigLowerLeft(arr, i, j));
    count.push(returnNeigLeft(arr, i, j));

    return count;
}

export {returnValues}