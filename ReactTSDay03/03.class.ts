namespace IntroductionClass{
    
    class Car{
        /**
         * 在TS 属性一定给个初始值
         * 或者在constructor 
         * name:stirng 
         * constructor(name:string){
         * this.name = name
         * }
         * TS,ES 
         * 类的属性都是实例属性和方法 非static 成员
         * 类的方法和属性都是在原型上 static 成员 
         * Car.prototype.run = ()=>{}
         * car.name 实例
         */
        static color:string="green";
        constructor(public name:string, public brand:string){
            //name和brand是实例属性
        }
        run(meter:number){
            console.log("it can run",meter);
        }
    }

    const car = new Car("Sedan","BMW");
    const name = car.name;
    const brand = car.brand;
    car.run(1000);
    const color = Car.color;
    console.log(color);
    class GTR extends Car{
        constructor(public name:string,public brand:string,public color:string){
            super(name,brand);//这里是父类的name和brand;子类构造器中的属性和父类的不一样的
        }
    }

    const gtr = new GTR("SedanGTR","Nissan","REd");
    const gtrName = gtr.name;
    const gtrBrand = gtr.brand;
    const gtrColor = gtr.color;
    gtr.run(22222);
    console.log(gtrName,gtrBrand,gtrColor)
}