//泛型约束
namespace GenericContraint{

    //约束中 可以定义泛型可以有的属性
    interface Contraint{
        length:number;
        push():void;
        unshift():void;
    }
    const fn = <T extends Contraint>(a:T):T=>{
        return a;
    }
    fn<string[]>(["123",'231']);
    interface Fn{
        filter():void;
    }
    const fn2 = <T extends Fn> (a:T):T=>{
        return a;
    }
  
    
}


