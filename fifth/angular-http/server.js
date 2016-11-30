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
    }else if(pathname == '/getUser'){
        res.end(JSON.stringify([1,2,3]));
    }else if(pathname =='/addUser'){
        var str = '';
        req.on('data',function (data) {
            str+=data;
        });
        req.on('end',function () {
            console.log(JSON.parse(str));
            res.end('ok');
        })
    }else{
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('');
            }
        });
    }
});
server.listen(80);