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
