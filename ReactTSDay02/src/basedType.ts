export const fun = ()=>{
    let a:number = 123;
    let b:string = "123";
    let c:boolean = true;
    let un:undefined = undefined;//javascript 是变量
    let un1:undefined = void 0;
    let nu:null = null;//null 是个关键字 
    //object 类型; 对象/数组/函数
    let obj1:object = {a:1,b:2,c:3};
    let obj2:object = [1,"2"];
    let obj3:object = function(){};
    let obj4:{
        a:number,
        b:string,
        c:boolean
    }={
        a:123,
        b:"string",
        c:true
    };

}