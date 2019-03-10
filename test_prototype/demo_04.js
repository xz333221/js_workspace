var o={
  a:1,
  f:function () {
    console.log(this.a+1);
  }
}
var oo=Object.create(o);//oo继承o
oo.a=2;
console.log(oo.f());//3