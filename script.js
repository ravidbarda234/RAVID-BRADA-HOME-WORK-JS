
// rotation
const array = [12, 6, 43, 5, 7, 2, 5];
const rotateByOne = array => {
    for (let i = 0; i < array.length - 1; i++) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    };
}
Array.prototype.rotateBy = function (n) {
    const { length: l } = this;
    if (n >= l) {
        return;
    };
    for (let i = 0; i < n; i++) {
        rotateByOne(this);
    };
};
const a = [1, 2, 3, 4, 5, 6, 7];
a.rotateBy();// put a number here
console.log(a);



