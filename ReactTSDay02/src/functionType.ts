type Fn = (a:number, b:number)=>{
    sum:number
}

export const fn:Fn = (a, b)=>{
    return {
       sum:a+b,
    }
}
type Fn1 = (a:number, b:number)=>number
export const fn1:Fn1 = (a, b)=>a+b;

let fn2:(a:number, b:number)=>number;//定义函数和参数类型
fn2 = (x,y)=>x+y;//具体的实现
fn2(1,2);//调用
//void 是返回空;(return null/undefined)
const fn3 = ():void=>{

}
//never 类型 永远不会有结果
const error=():never=>{
    throw new Error("error");
}
//数组永远为空
const empty:never[]=[];





