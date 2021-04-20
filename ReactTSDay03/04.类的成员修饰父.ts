namespace allCar{
    class Car{
        /**
         * 在TS 属性一定给个初始值
         * 或者在constructor 
         * name:stirng 
         * constructor(name:string){
         * this.name = name
         * }
         * 或者 constructor(public name:string){}
         * TS,ES 
         * 类的属性都是实例属性和方法 非static 成员 实例后
         * 类的方法和属性都是在原型上 static 成员 类访问
         * Car.prototype.run = ()=>{}
         * car.name 实例
         * 
         * readonly,static,private,protected,public
         * 
         * 当类的constructor 被private 是不可能被实例和继承
         * 当类的constructor 被protected 是不可能被实例只能继承
         * 
         */
        public static color:string="green";
        private size:number = 1000;
        constructor(public name:string, public brand:string){
            //name和brand是实例属性
        }
        run(meter:number){
            console.log("it can run",meter);
        }
        public static good(){
            console.log('这个是父类car')
        }
        private buy(){
            console.log('are you ready to buy it');
        }
        get getSize(){
            return this.size
        }
        set setSize(size:number){
            this.size = size;
        }
    }

    const car = new Car("Sedan","BMW");
    const name = car.name;
    const brand = car.brand;
    car.run(1000);
    const color = Car.color;
    console.log(color);
    //使用类内部的方法修改
    car.setSize=52523;//使用set关键字后就是函数了
    //读取private,使用类内部的方法
    const size = car.getSize;
    console.log("private===>",size);

    class GTR extends Car{
        constructor(public name:string,public brand:string,public color:string){
            super(name,brand);//这里是父类的name和brand;子类构造器中的属性和父类的不一样的
        }
    }

    const gtr = new GTR("SedanGTR","Nissan","RED");
    const gtrName = gtr.name;
    const gtrBrand = gtr.brand;
    const gtrColor = gtr.color;
    gtr.run(22222);
    GTR.good();//子类也可以获取父类的static 成员就是 类属性
    console.log(gtrName,gtrBrand,gtrColor)
}