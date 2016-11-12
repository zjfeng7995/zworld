requirejs(['../commens'],function(){
	requirejs (['jquery','app/index4nav','app/lunbo4banner','app/ul4banner','app/freeWalk'],
	function($,nav,lunbo,bannerUl,freewalk){
		
		var root1 = $('#nav>ul');
		nav(root1);
		
		var root2 = $('#wrap');
		lunbo(root2);
		
		var root3 = $('#banner .ul div div');
		bannerUl(root3);
		var root4 = $('#freeWalk .Box');
		freewalk(root4);
		
		//nav部分
		$('#headerImgBox div').click(function(){
			$('#headerImgBox').css('display','none')
		});
	
		$('#navicon').mouseenter(function(){
			$('#navicon img:eq(1)').css('top','10px');
		}).mouseleave(function(){
			$('#navicon img:eq(1)').css('top','12px');
		});
	
		//轮播图上导航栏
		for (var i = 1; i < 8; i++) {
			$('.bannerSpanI:eq(' + (i-1) + ') img').attr('src','images/bannericon' + i + '.gif');
		};
		
		//主体部分的导航
		function fn(m){
			$(m).mouseenter(function(){
				if($(this.lastElementChild).css('display') == 'none'){
					$(m + ' .divBox').css('display','none');
					$(this.lastElementChild).fadeIn(500);
					$(m).css('border-bottom','none');
					$(this).css('border-bottom','3px solid #14cea5');
					$(m + ' a').css('color','#656999');
					$(this.firstElementChild).css('color','#14cea5');
				};
			})
		}
		fn('#freeWalk .baseli');
		fn('#cityPlay .baseli');
		fn('#theme .baseli');
	})
	
	
})






























	
	

