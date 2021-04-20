interface StringObj{
    [index: number]:string;
}

let obj:StringObj = {
    1:"1",
    "2":"1",
    "3":"1",
    "4":"1",
    "5":"1",
}

interface Name{
    [n:number]:string;
}

let obj1:Name = {
    0:"string",
}


interface NN{
    [n:string]:string;
    [n:number]:string;
}

let arr:NN ={
    0:"1",
}


//函数式编程

//混合函数接口 (函数式变成)
interface Lib{
    ():void;
    version:string;
    doSomething():void;
    }
    
    function getLib():Lib{
    let lib:Lib = (()=>{}) as Lib;//类型断言 不要类型断言会报错lib 中缺少version和doSomething
    //类型断言写法2 let lib:Lib = <Lib>(()=>{}); 
    lib.version = "1111这个是混合接口";
    lib.doSomething = ()=>{};
    return lib;
    }
    
    let lib1 = getLib();
    console.log(lib1.version)