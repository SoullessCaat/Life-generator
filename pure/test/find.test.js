const {findingNeighbors, findLeftUpper, findUpper, findRightUpper, findLeft, findRight, findLeftLower, findLower, findRightLower, arr} = require('./find')

test('should return first neighbors', () => {
    expect(findLeftUpper(arr, 0, 0)).toStrictEqual({x: 3, y: 4})
});
test('should return first neighbors', () => {
    expect(findLeftUpper(arr, 1, 1)).toStrictEqual({x: 0, y: 0})
});
test('should return first neighbors', () => {
    expect(findLeftUpper(arr, 1, 0)).toStrictEqual({x: 0, y: 4})
});
test('should return first neighbors', () => {
    expect(findLeftUpper(arr, 0, 1)).toStrictEqual({x: 3, y: 0})
});

test('should return second neighbors', () => {
    expect(findUpper(arr, 0, 0)).toStrictEqual({x: 3, y: 0})
});
test('should return second neighbors', () => {
    expect(findUpper(arr, 1, 1)).toStrictEqual({x: 0, y: 1})
});

test('should return third neighbors', () => {
    expect(findRightUpper(arr, 0, 0)).toStrictEqual({x: 3, y: 1})
});
test('should return third neighbors', () => {
    expect(findRightUpper(arr, 1, 1)).toStrictEqual({x: 0, y: 2})
});
test('should return third neighbors', () => {
    expect(findRightUpper(arr, 1, 4)).toStrictEqual({x: 0, y: 0})
});
test('should return third neighbors', () => {
    expect(findRightUpper(arr, 0, 4)).toStrictEqual({x: 3, y: 0})
});

test('should return fourth neighbors', () => {
    expect(findRight(arr, 0, 0)).toStrictEqual({x: 0, y: 1})
});
test('should return fourth neighbors', () => {
    expect(findRight(arr, 0, 4)).toStrictEqual({x: 0, y: 0})
});

test('should return fifth neighbors', () => {
    expect(findRightLower(arr, 0, 0)).toStrictEqual({x: 1, y: 1})
});
test('should return fifth neighbors', () => {
    expect(findRightLower(arr, 3, 4)).toStrictEqual({x: 0, y: 0})
});
test('should return fifth neighbors', () => {
    expect(findRightLower(arr, 0, 4)).toStrictEqual({x: 1, y: 0})
});

test('should return sixth neighbors', () => {
    expect(findLower(arr, 0, 0)).toStrictEqual({x: 1, y: 0})
});
test('should return sixth neighbors', () => {
    expect(findLower(arr, 3, 4)).toStrictEqual({x: 0, y: 4})
});


test('should return seventh neighbors', () => {
    expect(findLeftLower(arr, 0, 0)).toStrictEqual({x: 1, y: 4})
});
test('should return seventh neighbors', () => {
    expect(findLeftLower(arr, 3, 4)).toStrictEqual({x: 0, y: 3})
});
test('should return seventh neighbors', () => {
    expect(findLeftLower(arr, 3, 0)).toStrictEqual({x: 0, y: 4})
});
test('should return seventh neighbors', () => {
    expect(findLeftLower(arr, 1, 1)).toStrictEqual({x: 2, y: 0})
});

test('should return eighth neighbors', () => {
    expect(findLeft(arr, 0, 0)).toStrictEqual({x: 0, y: 4})
});
test('should return eighth neighbors', () => {
    expect(findLeft(arr, 1, 1)).toStrictEqual({x: 1, y: 0})
});

test('should return all nighbors', () => {
    expect(findingNeighbors(arr, 1, 1)).toStrictEqual({
        left: {x: 1, y: 0},
        leftLower: {x: 2, y: 0},
        leftUpper: {x: 0, y: 0},
        lower: {x: 2, y: 1},
        right: {x: 1, y: 2},
        rightLower: {x: 2, y: 2},
        rightUpper: {x: 0, y: 2},
        upper: {x: 0, y: 1}
    });
});