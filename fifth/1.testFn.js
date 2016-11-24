var p = {
    $scope:{ },
    currencyFilter:function () {},
    filterFilter:function () {},
}

function b($scope , currencyFilter) {}
//通过将字符串toString后获取括号内的形参
console.log(b.toString().match(/\((.*)\)/)[1].replace(/\s+/g,'').split(','));
