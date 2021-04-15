/*
 npm i flow-bin -D 也是js静态语言检查工具
 npx flow init 创建flow检查工具.flowconfig
 添加@flow 给文件 npx flow 就会自动检查
 移除方法一:
 flow-remove-types 移除类型 执行npx flow-remove-types + path
 npx flow-remove-types src -d dist
 移除方法二:
 @babel 也可以删除类型
 包 npm i @babel/core @babel/cli @babel/preset-flow -D
 npx babel src -d dist 
*/
/**
 * @flow
 */
const num = (a :number, b :number)=>{
    return a + b;
}

//num(1,3);
num("string",4);