## ng-app
启动angular，指定一个模块名。让angular以哪个模块来启动，指定一个根作用域$rootScope
## 创建模块
```
var app = angular.module('模块名字',['模块名字']);
```
## 通过模块来创建控制器
控制器默认不会执行，买一送一，创建独立作用域，在指定范围内取当前作用域上的数据
```
<div ng-controller='控制器的名字'>
    <div>{{name}}</div>
    <input type="text" ng-model="name">
</div>
```
```
app.controller('控制器的名字',['$scope','$rootScope',function(a,b){
    //$scope.name = 'hello'
}])
```

## ng-model
- 第一步先会获取作用域上的值
- 上级作用域找，如果未找到
- 会声明一个变量，在当前作用域上

## {{}}
- 简单的运算和取值
- 三元运算符
- 赋值

## ng-bind
标签内不能写内容  

- 同{{}}用法，可以防止闪烁

## ng-cloak
默认要给所有的ng-cloak标签增加一个css
```
[ng-cloak]{
    display:none;
}
```

## ng-repeat遍历数据(指令)
循环谁，就把ng-repeat写在谁身上
```
<ul ng-repeat="(数组和对象的key,数组和对象的value) in 作用域定义的数据(arr,obj) track by $index">
    {{$index}}
    {{$odd}}
    {{$even}}
    {{$last}}
    {{$first}}
    {{$middle}}
    <li></li>
</ul>
```

## ng-事件名
可以调用作用域的函数

## 自动执行作用域上的方法
- 只要作用域上有内容发生变化，sum函数就会被调用
```
{{sum()}}
```