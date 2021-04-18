//参数
namespace parameters{
    //可选参数 ? 就会有undefined
    const fn = (a:number, b?: number)=>b? a+b : a;//因为返回是一个number 所以要给它一个判断
    fn(1);
    
    //参数默认值
    const fn1 = (a:number, b:number=5)=>b? a+b : a;
    fn1(1);

    const fn2 = (a:number, b:number=1,c:number,d:number=2)=> a+b+c+d;
    let num = fn2(1,undefined,2,undefined)//给它一个undefined就会使用默认值

    console.log(num)

    //剩余参数
    const fn3 = (a:number, ...result:number[])=>{
        console.log(a);//1
        console.log(result);//2,3,4
    }
    fn3(1,2,3,4,5);

    //函数重载
   function add(...result:number[]):number
   function add(...result:string []):string
   function add(...result:any):any{
        if(typeof result[0] === "number"){
            return result.reduce((pre:number,item:number)=>pre+item,0)
        }
        if(typeof result[0] === "string"){
            return result.join("-");
        }
   }
   let num1 = add(1,2,3,4,5)
   console.log(num1);
   let str = add('1','2','3',"5");
   console.log(str);

}