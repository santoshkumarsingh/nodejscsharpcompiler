// server.js
var http = require('http');
var visits = 0;
var fileName =
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        var exec = require('child_process').exec;
        exec('C:\\Windows\\Microsoft.NET\\Framework\\v3.5\\csc.exe /t:exe /out:MyApplication.exe Hello.cs', function (error, stdout, stderr) {
            console.log('stdout: ', stdout);
            console.log('stderr: ', stderr);
            if (error !== null) {
                console.log('exec error: ', error);
            }
            else{
                exec("MyApplication.exe",function(err,out,stde){
                   
                    res.end(out); 
                    
                });
                
            }
        });
    }).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// script.js
