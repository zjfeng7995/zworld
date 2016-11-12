define(['jquery', 'app/getUrl'], function($, murl) {
	function FreeWalk(root) {
		$.ajax({
			async:false,
			url: murl.getBaseUrl() + '/freeWalk',
			type: 'get',
			success: HandleDate
		})

		function HandleDate(data) {
			
			
			//创建li里面的内容
			for(var i = 0; i < data.length; i++) {
				var li = $('<li></li>').attr('class', 'baseli');
				var lia = $('<a></a>');
				lia.attr('href', '#').html(data[i]['title']);
				li.append(lia);
				root.append(li);
				//创建下面的box里面的内容
				var divBox = $('<div></div>').attr('class', 'divBox').appendTo(li);
				var mdata = data[i]['data'];
				mdata.forEach(function(elem, index) {
					var box = $('<div></div>').attr('class', 'box' + index).appendTo(divBox);
					var imga = $('<a></a>').attr('href', '#').appendTo(box);
					var img = $('<img />').attr('src', mdata[index]['imgUrl']).appendTo(imga);
					var h5 = $('<h5></h5>').html(mdata[index]['price']).appendTo(box);
					var title = $('<p></p>').appendTo(box);
					var titlea = $('<a></a>').attr('href', '#').html(mdata[index]['title']).appendTo(title);
					var time = $('<p></p>').html(mdata[index]['time']).appendTo(box);
				});
				var morebox = $('<div></div>').attr('class', 'box6').appendTo(divBox);
				var morea = $('<a></a>').attr('href', '#').appendTo(morebox);
				var moreimg = $('<img />').attr('src','images/more.gif').appendTo(morea);
			}
		}
	};
	return FreeWalk;
})