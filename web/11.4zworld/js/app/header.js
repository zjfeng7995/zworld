$(document).ready(function() {
	$('#headerli10 p').mouseenter(function() {
		clearTimeout;
		$('#headerli10 img').attr('src', "../images/icon.gif")
		$('#headerli10 p input').animate({
			width: "200px"
		}, 100);
	});
	$('#headerli10 p').mouseleave(function() {
		if($('#inpmsg').val() == ""){
			setTimeout(function() {
				$('#headerli10 img').attr('src', "../images/img3.gif")
			}, 100);
			$(window.parent.document).find('#kwbox').html("").css('display','none');
			$('#headerli10 p input').animate({
				width: "0px"
			}, 100)
		}
	});
	
	//搜索框的效果
	var inp = document.getElementById('inpmsg');
	inp.onkeyup = function(e){
		var e = e || window.event;
		if(inp.value !== ""){
			$(window.parent.document).find('#kwbox').css('display','block')
			Handler(inp.value);
		}else{
		}
	}
	function Handler(keyw){
		//1.创建XMLHttpRequest对象
		var baseURL = 'http://10.0.161.107:8888/keyword/keyword=';
		function createXHR(){
			if(typeof XMLHttpRequest !="undefined"){
				return new XMLHttpRequest();
			}else if(typeof ActiveXObject !="undefined"){
				if(typeof arguments.callee.activeXSring != "string"){
					var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
					for (var i = 0;i<versions.length;i++) {
						try{
							new ActiveXObject(versions[i]);
							arguments.callee.activeXString = versions[i]
						}catch(e){
							
						}
					}
				}
				return new ActiveXObject(arguments.callee.activeXSring);
			}else{
				throw new Error("无法正常创建ajax对象");
			}
		}
		var xhr = createXHR();
		//2.初始化open方法
		xhr.open('get',baseURL + keyw);
		//3.初始化send方法
		xhr.send(null);
		//4.处理返回来的数据
		xhr.onreadystatechange = function(){
			if(xhr.status == 200 || xhr.status == 304){
				if(xhr.readyState == 4){
					HandlerResponse(xhr.responseText);
				}
			}
		}
		function HandlerResponse(data){
			var root = $(window.parent.document).find('#kwbox');
			var list = JSON.parse(data)['data']['list']
			var ul = $('<ul></ul>').appendTo(root);
			var li,img,p,div,a;
			console.log(list);
			list.forEach(function(elem,index){
				if(list[index]['en_name'] == undefined){
					a = $('<a></a>').attr('href',list[index]['url']).html(list[index]['word'])
					div = $('<div></div>').appendTo(ul).append(a);
				}else{
					li = $('<li></li>').appendTo(ul);
					img = $('<img />').attr('src',list[index]['src']).appendTo(li);
					p = $('<p></p>').html(list[index]['en_name']).appendTo(li);
					p = $('<p></p>').html(list[index]['belong_name']).appendTo(li);
				}
			})
		}
	}
	
})