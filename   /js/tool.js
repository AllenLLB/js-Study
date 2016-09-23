/*==============================封装通过class来选取元素============================*/
function getByClass(classname){
	var elements=document.getElementsByTagName("*");
	var result=[];
	for(var i=0;i<elements.length;i++){
		if(elements[i].className==classname){
			result.push(elements[i]);
		}
	}
	return result;
}

/*======================================封装选取行内以外的样式============================================*/
function getStyle(element,attr){
	if(element.currentStyle){
		return element.currentStyle[attr];					//IE低版本
	}else{
		return window.getComputedStyle(element,null)[attr];		//w3c
	}
}


/*=================================================完美运动框架================================================*/
/*运动的实质先取当前位置、再设置速度、再根据速度进行移动[在移动的时候判断是否达到了目标点,若到了时候进行清除定时器]*/
function startMove(obj,json,callback){
	clearInterval(obj.timer);
	//每次定时器都是执行一组属性
	obj.timer=setInterval(function(){
		var bstop=true;         //这一次运动都结束了，所有的值都到了指定位置。否则一个属性结束的时候另一个不结束就会把定时器结束了
		for(var attr in json){
			//取当前位置
			var iCur;
			if(attr=='opacity'){
				iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur=parseInt(getStyle(obj,attr));
			}
			//设置运动速度(这里用的是缓冲运动的思想)
			var iSpeed=(json[attr]-iCur)/10;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);	//向上向下取整

			//判断停止的条件(由于几个属性的值不同,设置时不同于前面的设置[单个值时候的设置])
			if(iCur!=json[attr]){
				bstop=false;
			}
			//设置新的属性值[区别透明度和其他属性]
			if(attr=='opacity'){
				obj.style.opacity=(iCur+iSpeed)/100;
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
			}else{
				obj.style[attr]=(iCur+iSpeed)+"px";
			}
		}
		if(bstop){
			clearInterval(obj.timer);
			if(callback){
				callback();
			}
		}
	},20);
}



