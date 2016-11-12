define({
	baseUrl:"http://localhost",
	port:8888,
	getBaseUrl:function(){
		return this.baseUrl +　":" + this.port;
	}
})