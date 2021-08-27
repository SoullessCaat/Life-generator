const findLeftUpper = (arr, i, j) => {
    let indexMaxRow = arr[0].length - 1;
    let indexMaxColumn = arr.length - 1;
    let indexMinRow = 0;
    let indexMinColumn = 0;

    let x = i - 1;
    let y = j - 1;
    
    if (x < indexMinColumn) {
        x = indexMaxColumn;
    }; 
    if (y < indexMinRow) {
        y = indexMaxRow;
    };

    return { x, y };
};

const findUpper = (arr, i, j) => {
    let indexMaxRow = arr[0].length - 1;
    let indexMaxColumn = arr.length - 1;
    let indexMinRow = 0;
    let indexMinColumn = 0;

    let x = i - 1;
    let y = j;

    if (x < indexMinColumn) {
        x = indexMaxColumn;
    };
    if (y < indexMinRow) {
        y = indexMaxRow;
    };

    return { x, y }
}

const findRightUpper = (arr, i, j) => {
    let indexMaxRow = arr[0].length - 1;
    let indexMaxColumn = arr.length - 1;
    let indexMinRow = 0;
    let indexMinColumn = 0;

    let x = i - 1;
    let y = j + 1;

    if (x < indexMinColumn) {
        x = indexMaxColumn;
    }; 
    if (y > indexMaxRow) {
        y = indexMinRow;
    };

    return { x, y };
};


const findRight = (arr, i, j) => {
    let indexMaxRow = arr[0].length - 1;
    let indexMinRow = 0;

    let x = i;
    let y = j + 1;

    if (y > indexMaxRow) {
        y = indexMinRow;     
    };

    return { x, y };
}

const findRightLower = (arr, i, j) => {
    let indexMaxRow = arr[0].length - 1;
    let indexMaxColumn = arr.length - 1;
    let indexMinRow = 0;
    let indexMinColumn = 0;
    
    let x = i + 1;
    let y = j + 1;

    if (x > indexMaxColumn) {
        x = indexMinColumn;
    };
    if (y > indexMaxRow) {
        y = indexMinRow;
    };

    return { x, y };
}


const findLower = (arr, i, j) => {
    let indexMaxColumn = arr.length - 1;
    let indexMinColumn = 0;
    
    let x = i + 1;
    let y = j;

    if (x > indexMaxColumn) {
        x = indexMinColumn;
    };

    return { x, y };
}

const findLeftLower = (arr, i, j) => {
    let indexMaxRow = arr[0].length - 1;
    let indexMaxColumn = arr.length - 1;
    let indexMinRow = 0;
    let indexMinColumn = 0;

    let x = i + 1;
    let y = j - 1;

    if (x > indexMaxColumn) {
        x = indexMinColumn;
    };
    if (y < indexMinRow) {
        y = indexMaxRow;
    };

    return { x, y };
}


const findLeft = (arr, i, j) => {
    let indexMaxRow = arr[0].length - 1;
    let indexMinRow = 0;

    let x = i;
    let y = j - 1;

    if (y < indexMinRow) {
        y = indexMaxRow;
    };

    return { x, y };
}


const findingNeighbors = (arr, i, j) => {
    const neighborghts = {
        leftUpper: findLeftUpper(arr, i, j),
        upper: findUpper(arr, i, j),
        rightUpper: findRightUpper(arr, i, j),
        left: findLeft(arr, i, j),
        right: findRight(arr, i, j),
        leftLower: findLeftLower(arr, i, j),
        lower: findLower(arr, i, j),
        rightLower: findRightLower(arr, i, j) ,
    }
     
    return neighborghts
};

let arr = [
    [1, 0, 1, 0, 1], 
    [1, 1, 1, 1, 1], 
    [0, 1, 0, 0, 0], 
    [1, 1, 0, 0, 0]
];

let count = []


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


module.exports = {returnNeigRightUpper, arr, returnNeigLeft, returnNeigLowerLeft, returnNeigLower, returnNeigRightLower, returnNeigRight, returnUpper, returnNeigLeftUpper}