var oUl=getByClass("kills")[0];
var aLi=oUl.getElementsByTagName("li");

for(var i=0;i<aLi.length;i++){
	aLi[i].onmouseover=function(){
		var _this=this;		//传递一个_this
		startMove(_this,{fontSize:30,textIndent:20});
	}
	aLi[i].onmouseout=function(){
		var _this=this;
		startMove(_this,{fontSize:25,textIndent:0});
	}
}