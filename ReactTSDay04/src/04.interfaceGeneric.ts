namespace InterfaceGeneric{
    //泛型函数
    interface Generic {
        <T>(a:T):T;
    }

    const fn :Generic =a=>a;
    fn<string>("1");

    //接口泛型使用函数
    interface InterGeneric<T,S,E,R>{
        run<T,S>(a:T[],b:S[]):T[];
        name:T;
        age:E;
        blood:R;
        str:S;
    }

    const obj :InterGeneric<string,number,boolean,string>={
        name:"111",
        age:true,
        blood:"A",
        str:111,
        run:<T,S>(a:T[],b:S[]):T[]=>a,
    }
}