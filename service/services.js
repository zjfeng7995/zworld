var express = require('express');
var fs = require('fs');
var app = express();
//存储从文件读取数据
var	navData = null,
	menuData = null,
	cwalkData = null,
	bannerData = null,
	freeWalkData = null;

//读取数据
fs.readFile('data/nav.json',(err1,data1) => {
	if(err1)
		console.log(err1);
	navData = data1;

	fs.readFile('data/index/menu.json',(err2,data2) => {
		if(err2)
			console.log(err2);
		menuData = data2;

		fs.readFile('data/index/banner.json',(err3,data3) => {
			if(err3)
				console.log(err3);
			bannerData = data3;

			fs.readFile('data/index/freeWalk.json',(err4,data4) => {
				if(err4)
					console.log(err4);
				freeWalkData = data4;

				fs.readFile('data/citywalk/cityWalkList.json',(err5,data5) => {
					if(err4)
						console.log(err5);
					cwalkData = data5;

					app.listen(8888);
					console.log("服务器启动成功");
				});
			});	
		});
	});
});

//提供web服务功能
app.use(express.static('www'));

//跨域解决
app.all('/*',(req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

//启动服务接口
app.get('/cwalk',(req,res) =>{
	res.header('content-type','application/json');
	res.send(cwalkData);
})
app.get('/navLi',(req,res) => {
	res.header('content-type','application/json');
	res.send(navData);
});
app.get('/menu',(req,res) => {
	res.header('content-type','application/json');
	res.send(menuData);
});
app.get('/banner',(req,res) => {
	res.header('content-type','application/json');
	res.send(bannerData);
});
app.get('/freeWalk',(req,res) => {
	res.header('content-type','application/json');
	res.send(freeWalkData);
});
app.get('/inp',(req,res) => {
	console.log(req);
	res.send('hello')
});


//从别人服务器获取数据
var http = require('http');
app.get('/keyword/:keyword',function(req,res){

	var keyW = req.params.keyword;
	//查询本机ip
	//http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=a&timer=1478783032495&_=1478760966578
	var mreq = http.request({
		host:'z.qyer.com',//目标主机
		path:'/qcross/home/ajax?action=sitesearch&' + keyW,
		method:'get'
	},function(mres){
		mres.pipe(res);
		mres.on('end',function(){
			console.log('ok');
		});
	});
	if(/POST|PUT/i.test(req.method)){
		req.pipe(sreq);
	}else{
		mreq.end();
	}
});