// tag ul
var oUl=getByClass("list1")[0];
// tag div
var oDiv=getByClass("list2")[0];
// tag lis
var aLi=oUl.getElementsByTagName("li");
// tag divs
var aDiv=oDiv.getElementsByTagName("div");

function run(){
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			var _this=this;
			_this.className="active";
			_this.onclick=function(){
				for(var j=0;j<aDiv.length;j++){
					aDiv[j].style.display="none";
				}
				aDiv[_this.index].style.display="block";	//注意：此处应该用this而不是aLi[i]
			}

			_this.onmouseout=function(){
				_this.className=null;
			}
		}
	}
}

// run
run();