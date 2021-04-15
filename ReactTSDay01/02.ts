/**
 * TS 中的类型
 * 类型 
 * let num :number =123;
 * let str :string = "1111";
 * let bool :boolean = true;
 * let a: null = null;
 * let b: undefined = undefined;
 * let o :any = 任何值
 * tsc --init =>tsconfig.json;
 * let sym: Symbol = Symbol("hello");
 */

import express,{Application} from "express";
const app:Application = express();
const port:number = 3000;
app.listen(port,()=>console.log("3000 port is listening"));

