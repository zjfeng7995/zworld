requirejs.config({
	baseUrl:"js/lib",
	paths:{
		"app":"../app",
		"jquery":"jquery-3.1.1",
		"myutile":"../app/myutile"
	},
	shim:{
		"myutil":{
			exports:"creatXHR"
		}
	}
});


