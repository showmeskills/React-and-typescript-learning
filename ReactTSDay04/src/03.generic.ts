//对类型抽象->泛型 (对值的抽象->类型)
//对不确定的类型使用泛型
const fn = (a:number, b:number):number =>a;

const fn1 = <T,S>(a:T, b:S):T =>a;

fn1<number,string>(123,"123");

//函数重载
function fn2(a:number, b:number):number;
function fn2(a:string, b:string):string;
function fn2(a:any, b:any):any{
    return a + b;
}

const fn3 =(a:number|string):number=>{
    let b:number = 0;
    if(typeof a === "number"){
        b = a;
    }
    return b;
}

const fn4 = <T,S> (str:T[],num:S):T[]=>{
    return str;
}

fn4<string,number>(['122','333','44'],222);

//泛型函数类型

type Info = <T>(arg:T)=>T;
const info:Info = (arg)=>{
    return arg;
}
info<string>("111");

// const fn6 =(a:any)=>(b:any)=>(c:any):any=>{
//     return c;
// }

// function fn7(){
//     return function a(){
//         return function b(){
//             return function c(){
//                 return c;
//             }
//         }
//     }
// }