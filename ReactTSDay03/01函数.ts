//函数总结 TS中函数的用法
//函数的声明 (约束和实现一起)
const fn =(a:number, b:number): number =>{
    return a + b;
}
//声明函数类型（约束)
let fn1:(a:number, b:number)=>number;
//实现
fn1 = (a,b)=>{
    return a + b;
}

//类型别名 (相当于类型的变量,不是值的变量)
//使用type关键声明一个类型,就相当于给属性预先设定一个类型
type Fn3 = (a:number, b:number)=> number;
//赋值实现
let fn3 :Fn3 = (a,b)=>a+b;

type ty = number | string;
let a:ty =3;


//函数接口
interface fn4{
    (a:number, b:number): number;
}
let fun:fn4 = (a,b)=>a+b;