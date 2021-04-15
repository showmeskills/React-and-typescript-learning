"use strict";
//枚举 enum 
/**
* 枚举:一组有名字的常量集合(有序的系列集合)
* 0,1,2,3,4,5
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let gender = Gender.Male;
//console.log(gender)//==>0;
console.log(Gender[0]); //===>Male 可以通过遍历获取
/**
 * 枚举 使用数组返回元素,使用元素返回数字
 */
var week;
(function (week) {
    week[week["Mon"] = 0] = "Mon";
    week[week["Tue"] = 1] = "Tue";
    week[week["Wed"] = 2] = "Wed";
    week[week["Turs"] = 3] = "Turs";
    week[week["Fri"] = 4] = "Fri";
    week[week["Sat"] = 5] = "Sat";
    week[week["Sun"] = 6] = "Sun";
})(week || (week = {}));
let day = week.Mon;
console.log(day); //=>0;
console.log(week[5]); //=>Sat;
//枚举是可以改变 数值
var weeks;
(function (weeks) {
    weeks[weeks["Mon"] = 1] = "Mon";
    weeks[weeks["Tue"] = 2] = "Tue";
    weeks[weeks["Wed"] = 3] = "Wed";
    weeks[weeks["Turs"] = 4] = "Turs";
    weeks[weeks["Fri"] = 5] = "Fri";
    weeks[weeks["Sat"] = 6] = "Sat";
    weeks[weeks["Sun"] = 7] = "Sun";
})(weeks || (weeks = {}));
let day1 = weeks.Mon;
console.log(day1); //=>1;
console.log(weeks[5]); //=>Fri;
//字符串类型(枚举) 字符串枚举
//字符串枚举是没有反向的数字的 不可以通过Message[0]获取值
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\u5931\u8D25\u4E86";
})(Message || (Message = {}));
let msg = Message.Success;
console.log(msg);
//console.log(Message[0]);会报错
//异构枚举 数字和字符串混用
var IosEnum;
(function (IosEnum) {
    IosEnum[IosEnum["Y"] = 0] = "Y";
    IosEnum["N"] = "no";
})(IosEnum || (IosEnum = {}));
let m = 0 /* Jan */;
console.log(m); //0
//console.log(Month[1]);
//枚举成员; 枚举成员是只读不能修改它的值;
var Char;
(function (Char) {
    //常量成员 const enum
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 3] = "c";
    //计算枚举成员 computed enum
    //计算枚举成员后 一定赋值(不然会报错)
    //计算枚举成员后 不可以添加添加字符串枚举;
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = [1, 2, 3].length] = "e";
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}));
