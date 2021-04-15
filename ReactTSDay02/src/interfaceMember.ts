//可选成员 ?
//只读 readonly
interface Obj{
    readonly id: number;
    name: string;
    age?:number;
}

let obj: Obj={
    id:0,
    name:"Terrance"
}


//数组接口
interface StringArray{
    [index: number]:string;
}

const strArr: StringArray= ["1", "2", "3"];
//定一个字符串接口,就不能返回数字;也可以定义number
interface Names{
    [n:string]:string;//最后返回的是string
}
const obj1: Names = {
    name:"Terrance",
    jobs:"web developer"
}
//混合索引使用
interface Name2{
    [n:string]:string;
    [x:number]:string;//报错==>[x:number]:number; 返回string 就可以返回number了
}

const obj2:Name2 = {
    name:"Terrance",
}

//函数类型接口
interface Func{
    (x:number,y:number):number
}

let fn:Func = (a,b)=>a+b;

//混合函数接口 (函数式变成)
interface Lib{
    ():void;
    version:string;
    doSomething():void;
}

function getLib():Lib{
    let lib:Lib = (()=>{}) as Lib;//类型断言 不要类型断言会报错lib 中缺少version和doSomething
    lib.version = "1111这个是混合接口";
    lib.doSomething = ()=>{};
    return lib;
}

let lib1 = getLib();
console.log(lib1.version)