var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
var user = {name:1};
var querystring = require('querystring');
var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/getUser'){
        //拼到url后面的可以通过query获取
        var cb = urlObj.query.callback; //getDate(user)
        //res.end(cb+"("+JSON.stringify(user)+")");
        user = JSON.stringify({name:1});
        res.end(`${cb}(${user})`);//后台只需拼接一个函数执行即可
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