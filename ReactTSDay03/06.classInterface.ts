namespace ClassInterface{
    //类 类型的接口
    //implements;
    //接口只能约束类的共有成员 public
    //接口中不能约束 private,static,protected
    interface CarInterface{
        name:string;
        color:string;
        brand:string;
        size:number;
        year:number;
        
    }
    interface CarFunctions{
        speed(kio:number):number;
    }
 
    class Car implements CarInterface,CarFunctions{
        public year:number;
        constructor(public name:string,public color:string,public size:number,public brand:string,year:number){
            this.year = year;
        }
        speed(kio:number){
            return kio;
        }
    }
    interface WithContructor{
        new(name:string,color:string,size:number,brand:string,year:number):Car
    }
    const createCar = (newClass:WithContructor,name:string,color:string,size:number,brand:string,year:number)=>{
        return new newClass(name,color,size,brand,year)
    }
    let newCar = createCar(Car,"BMW","Red",1000,"Sedan",1990);
    console.log(newCar.name)
}