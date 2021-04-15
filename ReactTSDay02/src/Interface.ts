//接口定义
interface List{
    id:number;
    name:string;
    age:number;
}
interface Result{
    data:Array<List>
}



let result:Result = {
    data:[
        {id:1,name:"A",age:3,},
        {id:2,name:"B",age:4},
    ]
}


/*
鸭式辩型法, 绕过它检测的方法 多个sex 不会报错；
let result = {
    data:[
        {id:1,name:"A",age:3,sex:0},
        {id:2,name:"B",age:4},
    ]
}

类型断言1
//给它一个类型断言;绕过它的检测
let result:Result = {
    data:[
        {id:1,name:"A",age:3,sex:0},
        {id:2,name:"B",age:4},
    ]
} as Result
类型断言2
let result:Result = <Result> {
    data:[
        {id:1,name:"A",age:3,sex:0},
        {id:2,name:"B",age:4},
    ]
} 
*/



const render=(result:Result)=>{
    result.data.forEach(value=>{
        console.log(value.id);
        console.log(value.name);
        console.log(value.age);
    })
}

render(result);


// interface Obj{
//     id:number;
//     name:string;
// }

// let obj:Obj = {
//     id:0,
//     name:"Terrance",
// }