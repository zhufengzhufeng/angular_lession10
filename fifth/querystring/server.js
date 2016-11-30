//安装文件时没有进行初始化，导致文件安装到上级目录
var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
var querystring = require('querystring');
var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/user'){
        //  username=123&password=456 查询串
        //  {username:123,password:456} JSON串
        var str = '';
        req.on('data',function (data) {
            str+=data
        });
        req.on('end',function () {
            res.end(JSON.stringify(querystring.parse(str)));
        });
        //什么方法有请求体 POST PUT
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