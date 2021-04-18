namespace AbstractClass{
    /**
     * 抽象类:
     * 公共的方法和属性
     * 不能被实例,只能用来被继承
     * 多态:在不同的字类中实现父类的同一个方法
     */
    abstract class Monster{
        abstract monster:string;
        abstract HP:number;
        abstract MP:number;
        abstract coordinationX:number;
        abstract coordinationY:number;
        abstract attack():void;//不写方法体
        abstract weapon():void;
    }
    class LevelOneMonster extends Monster{

        constructor(public monster:string, public HP:number, public MP:number, public coordinationX:number, public coordinationY:number){
            super();
        }
       attack(){
        console.log("it holds an axes");
       }
       weapon(){
           console.log("it is a weapon");
       }
    }

    const levelOneMonster = new LevelOneMonster("loong gor",1000,20,50,60);
    const monster = levelOneMonster.monster;
    levelOneMonster.attack();
    levelOneMonster.weapon();
    console.log(monster);
    class LevelTwoMonster extends Monster{

        constructor(public monster:string, public HP:number, public MP:number, public coordinationX:number, public coordinationY:number){
            super();
        }
       attack(){
        console.log("it holds an knife");
       }
       weapon(){
           console.log("it has two weapons");
       }
    }
}