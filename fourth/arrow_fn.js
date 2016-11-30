/*var a = function () {
 return a+b;
 };*/
// const a =(a,b)=>{return a+b};
/*
let a = (a, b)=>{
    let q = (a+b)*3;
    return q;
};
console.log(a(1, 2));
var obj = {
    a:1,
    b:function () {
        //console.log(this);
        setTimeout(()=>{
            console.log(this);//箭头函数中没有this指向的问题，指向的就是上一级的this
        });
    }
};
obj.b();


function A() {
    this["+"]=(a,b)=>a+b;
    this["-"]=(a,b)=>a-b;
}
a = new A();
console.log(a);

*/


function A() {
    this.a = 1;
    this.b = 2;
    return this;
}
console.log(A.call(A.prototype));




