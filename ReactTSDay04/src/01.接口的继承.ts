//接口的继承
namespace a{
    interface Car{
        name:string;
        brand:string;
        color:string;
        run():void;
    }

    interface Sedan extends Car{
        height:number;
        width:number;
        look():void;
    }

    class Car implements Sedan{
        constructor(public name:string,public brand:string,public color:string,public height:number,public width:number){
            
        }
        run(){

        }
        look(){

        }
    }
}

//接口的多继承
namespace b{
    interface Car{
        name:string;
        brand:string;
        color:string;
        run():void;
    }
    interface GTR{
        wheel:number;
    }
    interface Sedan extends Car,GTR{
        height:number;
        width:number;
        look():void;
    }
    
    class Car implements Sedan{
        constructor(
            public name:string,
            public brand:string,
            public color:string,
            public height:number,
            public width:number,
            public wheel:number
            ){
            
        }
        run(){

        }
        look(){

        }
    }
}