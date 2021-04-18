
//枚举 enum 
/**
* 枚举:一组有名字的常量集合(有序的系列集合)
* 0,1,2,3,4,5
*/
enum Gender{
    Male,//0 默认为0
    Female,//1 默认为1
}

let gender: Gender = Gender.Male;

//console.log(gender)//==>0;

console.log(Gender[0])//===>Male 可以通过遍历获取

/**
 * 枚举 使用数组返回元素,使用元素返回数字
 */
enum week{
    Mon,
    Tue,
    Wed,
    Turs,
    Fri,
    Sat,
    Sun,
}

let day:week = week.Mon;

console.log(day);//=>0;
console.log(week[5]);//=>Sat;

//枚举是可以改变 数值
enum weeks{
    Mon=1,
    Tue,
    Wed,
    Turs,
    Fri,
    Sat,
    Sun,
}

let day1:weeks = weeks.Mon;

console.log(day1);//=>1;
console.log(weeks[5]);//=>Fri;

//字符串类型(枚举) 字符串枚举
//字符串枚举是没有反向的数字的 不可以通过Message[0]获取值
enum Message{
    Success = "恭喜成功了",
    Fail = "抱歉失败了"
}

let msg:Message = Message.Success;
console.log(msg)
//console.log(Message[0]);会报错
//异构枚举 数字和字符串混用
enum IosEnum{
    Y,
    N="no",
}

//常量枚举 =>编译后 只会有数字不会保留元素
const enum Month{
    Jan,
    Feb,
    Mar,
}

let m:Month = Month.Jan;
console.log(m);//0
//报错console.log(Month[1]);

//枚举成员; 枚举成员是只读不能修改它的值;
enum Char{
    //常量成员 const enum
    a,  //无初始值
    b = Char.a,//对已有枚举成员的引用
    c = 1+2,//表达式

    //计算枚举成员 computed enum
    //计算枚举成员后 一定赋值(不然会报错)
    //计算枚举成员后 不可以添加添加字符串枚举;
    d = Math.random(),
    e = [1,2,3].length,
    f = 4,//必须赋值
}
