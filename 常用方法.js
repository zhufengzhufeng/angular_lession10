//增删改查
//查询数组中的某一个
var name = 'zf1';
var arr = [{name:'zf1'},{name:'zf'},{name:'zf2'}];
var obj = arr.find(function (item) { //如果返回true则表示找到了，返回找到的那一项
    return item.name == name; //zf2 == zf2 true
});
console.log(obj);
//删除某一个
//拿出name为zf的那一项删除掉
var arr = [{name:'zf1'},{name:'zf'},{name:'zf2'}];
var arrFilter = arr.filter(function (item) {
    return item.name!=name; //返回true的表示这一项留下，返回一个新的数组
});
console.log(arrFilter);
//修改 map
var name = {name:'zf1000'};
var arr = [{name:'zf1'},{name:'zf'},{name:'zf2'}];
var arrMap = arr.map(function (item,index) {
    if(index==1){
        return name;
    }
    return item;
});
console.log(arrMap);