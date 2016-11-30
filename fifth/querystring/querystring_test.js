var str = 'username=123&password=456';
var querystring = require('querystring');
//JSON.parse  JSON.stringify
//解析查询字符串
console.log(querystring.parse(str,'&!','=!'));
var obj = { username: '123', password: '456' };
//解析成查询字符串
console.log(
querystring.stringify(obj,'&!','=!'));