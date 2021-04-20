//接口继承类

namespace c{
    class Car{
        name:string="big car";
        year:number=1980;
        static height:number;
        private width:number = 20;
        protected abc:string="111";
        run (){

        }
    }
    //接口可以继承类的实例属性和方法, 
    //接口继承类,相当于接口把类的成员抽离出来
    //但是类中的静态成员不会被接口继承
    interface GTR extends Car{}
    // let gtr:GTR = {
    //     name:"big car",
    //     year:1999,
    //     //width:222,
    //     //abc:"2222",
    //     run(){

    //     },
    // }
    //类实行继承类的接口,但是类中有private和protected 属性 会报错
    // class Track implements GTR{
    //     public name:string="TTT";
    //     public year:number=1999;
    //     run(){

    //     }
    // }

    //解决方法
    class Track extends Car implements GTR{
        name:string="big car";
        year:number=1980;
        static height:number;
        protected abc:string="111";
    }
    //接口只能约束类class的共有成员(public)
    //接口继承类的时候会把 public static private protected 抽离出来
    //再通过子类继承父类 实行继承类的接口,就可以正常使用了
}