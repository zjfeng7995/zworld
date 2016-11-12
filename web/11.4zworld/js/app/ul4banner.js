define(['jquery','app/getUrl'],function($,murl){
	//发送请求并处理数据
	function BannerUl(root){
		$.ajax({
			type:"get",
			url:murl.getBaseUrl() + "/menu",
			async:true,
			success:HandlerData
		});
		function HandlerData(data){
			data.forEach(function(elem,index){
				var div = $('<div></div>');
				var h4 = $('<h4></h4>');
				var p = $('<p></p>');
				
				$(root[index]).append(div);
				//侧导航上的标题
				h4.html(data[index]['title']);
				div.append(h4);
				div.append(p);
				//侧导航上的文字
				for (var i = 0; i < data[index]['mainCity'].length; i++) {
					var a = $('<a></a>');
					a.attr('href','#');
					p.append(a);
					a.html(data[index]['mainCity'][i]);
				}
				//旁边的box的信息
				var div1 = $('<div></div>');
				div1.attr('class','cityBox');
				div.append(div1);
				//右侧四大块
				var newData = data[index]['moreCity'];
				for (var j = 0; j < newData.length; j++) {
					var div11 = $('<div></div>');
					div1.append(div11);
					var h3 = $('<h3></h3>');
					h3.appendTo(div11);
					//每块的标题部分h3
					h3.html(newData[j]['cityName']);
					//每块的内容部分p
					var p1 = $('<p></p>')
					p1.appendTo(div11);
					for (var k = 0; k < newData[j]['items'].length; k++) {
						var a1 = $('<a></a>');
						a1.attr('href','#');
						if(index == 5){
							$('<img />').attr('src',newData[j]['items'][k]).appendTo(a1);
						}else{
							a1.html(newData[j]['items'][k]);
						}
						a1.appendTo(p1);
					}
				}
				//图片部分
				$('<img />').attr('src',data[index]['moreCityImg']).appendTo(div1);
			})
			
			//给ul右边的box添加鼠标事件
			$('.ul>div').mouseenter(function(){
				var i = $('.ul>div').index(this);
				$('.cityBox:eq(' + i + ')').css('display','block');
			})
			$('.ul>div').mouseleave(function(){
				var i = $('.ul>div').index(this);
				$('.cityBox:eq(' + i + ')').css('display','none');
			})
		}
	}
	return BannerUl;
})