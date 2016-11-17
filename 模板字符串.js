var name = 'zfpx';
var age = 8;
console.log(name+'今年'+age+'岁了');
console.log(`${name}今年${age}岁了`);
var str = '<ul>';
str+='<li>'+name+''+'</li>';
str+='<li>'+age+'</li>';
str+='</ul>';
console.log(`
    <ul>
        <li>${name}</li>
        <li>${age}</li>
    </ul>
`);
//ES6模板字符串