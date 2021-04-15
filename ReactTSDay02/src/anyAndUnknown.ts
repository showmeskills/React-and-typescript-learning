//any是任意类型
//unknown是未知类型 它比any安全
export const group = ()=>{
    let value :any;
    value.foo.group;
    value();
    let value1 :unknown;//unknown 是对象,函数,实例==>对象类型为unkown
    //value1.foo.group;//error
    //value1();//
}