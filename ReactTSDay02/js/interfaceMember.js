"use strict";
let obj = {
    id: 0,
    name: "Terrance"
};
const strArr = ["1", "2", "3"];
const obj1 = {
    name: "Terrance",
    jobs: "web developer"
};
const obj2 = {
    name: "Terrance",
};
let fn = (a, b) => a + b;
function getLib() {
    let lib = (() => { }); //类型断言
    lib.version = "1111这个是混合接口";
    lib.doSomething = () => { };
    return lib;
}
let lib1 = getLib();
console.log(lib1.version);
