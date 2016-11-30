var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
var querystring = require('querystring');
var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    //增加跨域头 所有域下都可以访问我
    res.setHeader('Access-Control-Allow-Origin', '*');
    //运行跨域地址
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    //允许头类型
    res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PUT,POST'); //允许跨域方法
    if (req.method == 'OPTIONS')res.end();//发送post请求时会先发送一个options请求 res.end即可
    // window.hash window.name iframe postMessage jsonp 后台配置
    if(pathname =='/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/getUser'){
        res.end(JSON.stringify({name:1}));
    }else{
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                var code = 404;
                res.statusCode = code;
                var STATUS_CODE = require('_http_server').STATUS_CODES;
                res.end(STATUS_CODE[code]);
            }
        });
    }
});
server.listen(80);