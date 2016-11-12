define(['jquery','app/getUrl'],function($,murl){
	function createNav(root){
		$.ajax({
			url:murl.getBaseUrl() + "/navLi",
			type:"get",
			success:handlerData
		})
		function handlerData(data){
			data.forEach(function(elem,index){
				var li = $('<li></li>');
				var a = $('<a></a>');
				a.html(elem["name"]);
				a.appendTo(li);
				li.appendTo(root);
			})
		}
	}
	return createNav;
})