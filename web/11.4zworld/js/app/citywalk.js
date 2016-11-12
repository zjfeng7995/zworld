requirejs(['../commens'],function(){
	requirejs(['jquery','app/getUrl'],function($,murl){
		var root = $('#content');
		$.ajax({
			type:"get",
			url:murl.getBaseUrl() + "/cwalk",
			success:handleData
		});
		function HandleData(data){
			console.log(data);
		}
		
	})
})