"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayDemo {
    //普通定义数组
    demo() {
        let result = [1, 23, 5, 6,];
        console.log(result);
        return result;
    }
    //范型数组
    demo1() {
        let res = [1, 23, 5, 6, 122222];
        console.log(res);
        return res;
    }
    //灵活类型
    demo2() {
        let res = [1, 2, 4, 5, "100", "string", true];
        console.log(res);
        return res;
    }
    //元祖类型 定义数组的内的元素类型和长度
    demo3() {
        let tuple = ["string", 122, true, "string2"];
        //元祖越界 可以往元祖数组push额外的数据,但是不能使用它
        tuple.push(100);
        console.log(tuple); //[ 'string', 122, true, 'string2', 100 ]
        return tuple;
    }
}
exports.default = ArrayDemo;
