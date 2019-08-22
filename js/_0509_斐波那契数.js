/**
 * @param {number} N
 * @return {number}
 *
 */
var fib = function (N) {
    var a = 0, b = 1;
    while (0< N--) {
        b = b + a;
        a = b - a;
    }
    return a;
};

//

var f1 = fib(4);
console.log(f1);