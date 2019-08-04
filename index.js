var http = require('http')//http模块创建服务器
var fs = require('fs')//path模块根据系统内部自动识别url类型
var url = require('url')//fs模块用于读写文件
var path = require('path')//url模块自动解析用户的url得到一些有用的信息



http.createServer(function(req, res){

  var pathObj = url.parse(req.url, true)
  console.log(pathObj)//得到了一些url的数据，其中有用的就是pathname在后面会用到
  var filePath = path.join(__dirname, 'sample','test.html')//用path模块自动的拼接一个url
  console.log(filePath)


  switch (pathObj.pathname) {
    case '/123':
      res.end( fs.readFileSync(filePath) )//路由是/123时会读取filePath
      break;
    case '/233':
      res.end( JSON.stringify({a:1,b:2}))//路由是233时会显示JSON格式的一个数据
    default:
      res.end( fs.readFileSync(filePath) )//不满足以上条件时，默认读取filePath
  }
}).listen(9080)//端口9080



