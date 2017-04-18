/**
 * 斐波那契数列
 * f(n) = 0 (n = 0)
 * f(n) = 1 (n = 1)
 * f(n) = f(n - 1) + f(n - 2) (n > 1)
 * 类似问题： 一只青蛙 一次能跳2个阶梯 或者跳1个阶梯 如果有n阶梯 有几种跳法？
 */
let fibonacci = (function() {
    let memory = [0, 1];
    return function(n) {
        if(memory[n] !== undefined) {
            return memory[n];
        }
        return memory[n] = (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
    };
})();