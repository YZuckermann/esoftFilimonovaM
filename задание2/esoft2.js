function deepCopy(ob) {
    if (Array.isArray(ob)) {
        var copy = [];
        for (var i = 0; i < ob.length; i++) {
            if (Array.isArray(ob[i])) {
                copy.push(deepCopy(ob[i]));
            } else {
                copy.push(ob[i]);
            }
        }
        return copy;
    } else {
        return ob;
    }
}

var arr = [5, 'Divnaya', 5.0];
var arrCopy = deepCopy(arr);

console.log(arr);
console.log(arrCopy);

arrCopy.splice(0, 1, "street");

console.log(arr);
console.log(arrCopy);
