"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedType_1 = require("./basedType");
basedType_1.fun();
const functionType_1 = require("./functionType");
functionType_1.fn(123, 123);
//console.log(fn1(568,789));
const array_1 = __importDefault(require("./array"));
const arrayDemo = new array_1.default();
// arrayDemo.demo();
// arrayDemo.demo1();
// arrayDemo.demo2();
//arrayDemo.demo3();//tuple越界
