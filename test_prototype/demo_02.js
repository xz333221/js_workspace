function f() {
  this.a=1;
  this.b=2;
}
var o=new f();
o.b=3;
o.c=4;
o.constructor.prototype.a=8;
o.constructor.prototype.bb=7;
o.__proto__.cc=9;
f.prototype.a=3;
f.prototype.e=5;

console.log(o.a);//1
console.log(o.b);//3
console.log(o.c);//4
console.log(o.d);// undefined
console.log(o.e);// 5
console.log(o.bb);// 7
console.log(o.cc);// 9

