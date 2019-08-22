/**
 * @param {number} N
 * @return {number}
 *通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

 F(0) = 0,   F(1) = 1
 F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 给定 N，计算 F(N)。

 来源：力扣（LeetCode）-
 链接：https://leetcode-cn.com/problems/fibonacci-number
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