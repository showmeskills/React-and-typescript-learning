"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.group = void 0;
//any是任意类型
//unknown是未知类型 它比any安全
const group = () => {
    let value;
    value.foo.group;
    value();
    let value1; //unknown 是对象,函数,实例==>对象类型为unkown
    //value1.foo.group;//error
    //value1();//
};
exports.group = group;
