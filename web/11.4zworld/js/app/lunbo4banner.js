define(['jquery','app/getUrl'],function($,murl){
	function Lunbo(root){
		//发送ajax请求并处理获取的数据
		$.ajax({
			type:"get",
			url:murl.getBaseUrl() + "/banner",
			success:HandlerMsg
		});
		function HandlerMsg(data){
			data.forEach(function(elem,index){
				var div = $('<div></div>');
				var a = $('<a></a>');
				var img = $('<img />');
				img.attr('src',elem['imgUrl']);
				a.attr('href',elem['href']);
				img.appendTo(a);
				a.appendTo(div);
				div.appendTo(root);
			})
			
			//轮播图
			var index = 0;
			var x = 0;
			var timer = null;
			function Timer(){
				if(index<3){
					index++;
				}else{
					index = 0;
				}
				Setval(index);
				
			}
			function Setval(index){
				x = (-1583)*index;
				$(root).animate({'left':x + 'px'},500);
				$('#bannerIndex span').css('background','#023a77');
				$('#bannerIndex span:eq(' + index + ')').css('background','#ff7367');
			}
			//设置轮播时间间隔
			timer = setInterval(Timer,2200);
			
			//设置鼠标滑入事件
			$('#imgShow').mouseenter(function(e){
				clearInterval(timer);
			});
			$('#imgShow').mouseleave(function(e){
				timer = setInterval(Timer,2200);
			});
			
			//设置鼠标点击事件
			$('#bannerToLeft').click(function(ev){
				if(index>0){
					index--;
				}else{
					index = 3;
				}
				Setval(index);
			});
			
			$('#bannerToRight').click(function(e){
				if(index<3){
					index++;
				}else{
					index = 0;
				}
				Setval(index);
			});
			
			$('#bannerIndex').click(function(e){
				var e = e||window.event;
				var target = e.target || e.srcElement;//target代表事件源
				index = $('#bannerIndex span').index(target);
				Setval(index);
			})
		}
	}
	return Lunbo;
})