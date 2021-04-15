"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn1 = exports.fn = void 0;
const fn = (a, b) => {
    return {
        sum: a + b,
    };
};
exports.fn = fn;
const fn1 = (a, b) => a + b;
exports.fn1 = fn1;
let fn2; //定义函数和参数类型
fn2 = (x, y) => x + y; //具体的实现
fn2(1, 2); //调用
//void 是返回空;(return null/undefined)
const fn3 = () => {
};
//never 类型 永远不会有结果
const error = () => {
    throw new Error("error");
};
//数组永远为空
const empty = [];
