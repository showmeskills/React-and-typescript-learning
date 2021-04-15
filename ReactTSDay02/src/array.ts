//定义元祖类型
type Demo3 = [string,number,boolean,string];

class ArrayDemo{
    //普通定义数组
    demo():number[]{
        let result:number[] = [1,23,5,6,];
        console.log(result);
        return result;
    }
    //范型数组
    demo1():Array<number>{
        let res:number[] =[1,23,5,6,122222];
        console.log(res);
        return res;
    }
    //灵活类型
    demo2():Array<number | string | boolean>{
        let res:Array<number | string | boolean> =[1,2,4,5,"100","string",true];
        console.log(res);
        return res;
    }
    //元祖类型 定义数组的内的元素类型和长度
    demo3():Demo3{

        let tuple :[string,number,boolean,string] =["string",122,true,"string2"]
        //元祖越界 可以往元祖数组push额外的数据,但是不能使用它
        tuple.push(100);
        console.log(tuple);//[ 'string', 122, true, 'string2', 100 ]
        return tuple
    }
}

export default ArrayDemo