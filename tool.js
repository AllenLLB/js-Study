//1.取css样式表和非行间样式的属性

function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];　　//需要选择属性的对象和一个伪元素字符如(:after)
    }
}


 

 //注意：该方法取得的元素属性带有单位的,比如height、width是px

//2.为了兼容通过class来获取元素

function getByClass(classname){
       var result=[];     //用来存放筛选的元素
       var elements=document.getElementsByTag("*");
       for(var i=0;i<elements.length;i++){
               if(elements[i].className==classname){
                        result.push(elements[i]);
               }
       }
       return result;
}                


//注意：获取到的是一个数组形式的,需要选择其中的加上下标就好

//3.兼容性获取事件对象

function getEvent(e){       //主要是兼容IE8及之前与大多数的浏览器
     var oEvent = e || window.event;
     return oEvent;
}

//4.添加多事件句柄

function addEvent(element,type,handle){
        if(element.addEventListener){        //DOM2级
            element.addEventListener(type,handler,false);    //执行事件冒泡流，防止捕获方法
        }else if(element.attachEvent){       //IE9之前IE5之后
            element.attachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler;    //任何元素支持的写法
        }

}


//5.移除多事件句柄

function(element,type,handler){
        if(element.removeEventListener){        //DOM2级
            element.removeEventListener(type,handler,false);    //执行事件冒泡流，防止捕获方法
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }else{
            element['on'+type]=null;    //任何元素支持的写法
        }
}


//6.返回事件的类型

function getType(e){
     var oEvent = e ||window.event;
    return oEvent.type;    //不存在兼容性问题
}

//7.返回事件所在的元素

function getE(e){
    var oEvent = e || window.event;
    return oEvent.target || oEvent.srcElement;  //兼容大多数浏览器与IE（IE是srcElement）
}

//8.取消事件冒泡

function stop(e){
     var oEvent = e || window.event;
     if(oEvent.stopPropagation){    //适用于常见大多数浏览器
            oEvent.stopPropagation();
     }else{
            oEvent.cancelBubble = true;  //取消事件冒泡，IE浏览器
     }
}


//9.取消默认行为

function prevent(e){
      var oEvent = e || window.event;
      if(oEvent.preventDefault){
           oEvent.preventDefault();
      }else{
            oEvent.returnValue=false;  //取消默认事件
      }
}


//10.为onload添加多个事件

function addLoadEvent(func){
    var oldLoad=window.onload;
    if(typeof(window.onload) != "function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldLoad();
            func();
        }
    }
}
