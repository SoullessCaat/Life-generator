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


export {findingNeighbors}