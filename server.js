var 
url = require('url'),
fs = require('fs'),
http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {    
  
  req.path = url.parse(req.url).pathname;
  switch(req.method) {
    case 'GET':
      if(req.path === '/'){
        res.writeHead(200);
        fs.readFile(__dirname+'/public/webbuild/webbuild.html', function(err, data){
          if(err) console.log(err);
          res.end(data);
        })
      } else {
        res.writeHead(200);
        fs.readFile(__dirname+'/public/webbuild'+req.path, function(err, data) {
          if(err) console.log(err);
          res.end(data);
        })
      }
      break;
    default:
      res.end(404);
  }
});
server.listen(process.env.PORT || 8080);

console.log('Listening...');