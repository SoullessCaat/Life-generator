const {returnNeigRightUpper, arr,  returnNeigLeft, returnNeigLowerLeft, returnNeigLower, returnNeigRightLower, returnNeigRight, returnUpper, returnNeigLeftUpper} = require('./returnNeighbors')

test('should return value koords', () => {
    expect(returnNeigLeftUpper(arr, 0, 0)).toStrictEqual(0)
});
test('should return value koords', () => {
    expect(returnUpper(arr, 0, 0)).toStrictEqual(1)
});
test('should return value koords', () => {
    expect(returnNeigRightUpper(arr, 0, 0)).toStrictEqual(1)
});

test('should return value koords', () => {
    expect(returnNeigRight(arr, 0, 0)).toStrictEqual(0)
});
test('should return value koords', () => {
    expect(returnNeigRightLower(arr, 0, 0)).toStrictEqual(1)
});
test('should return value koords', () => {
    expect(returnNeigLower(arr, 0, 0)).toStrictEqual(1)
});
test('should return value koords', () => {
    expect(returnNeigLowerLeft(arr, 0, 0)).toStrictEqual(1)
});
test('should return value koords', () => {
    expect(returnNeigLeft(arr, 0, 0)).toStrictEqual(1)
});
