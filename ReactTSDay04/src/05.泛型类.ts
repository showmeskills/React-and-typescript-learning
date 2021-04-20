namespace ClassGeneric{
    class Person<T>{
        public name: T;
        constructor(name:T){
            this.name = name;
        }
        //泛型是不能约束类的静态成员
        static look(a:string){

        }
        private run(a:T){

        }
        protected run1(a:T){

        }
        run2(a:T){

        }
        eat<U>(a:U){

        }
    }
    const person = new Person<string>("Terry");
    person.run2("111");
    person.eat<number>(123);
}