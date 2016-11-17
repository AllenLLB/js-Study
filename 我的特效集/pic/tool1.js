/**
 * Created by 立博 on 2016/3/18.
 */

//取随机数的函数
function getRandom(){
    return Math.floor(Math.random()*9);
}
//判断随机数是否在数组中存在
function hasSame(item){
    for(var i=0;i<randomNums.length;i++){
        if(item==randomNums[i]){
            return true;
        }
    }
    return false;
}
//取得所需要与空白交换的div
function getAim(top,left){
    for(var i=0;i<Divs.length;i++){
        if(getStyle(Divs[i],'top')==top&&getStyle(Divs[i],'left')==left){
            console.log(Divs[i]);
            return Divs[i];
        }
    }
}


//获取外部样式表的样式
function getStyle(element,attr){
    if(element.currentStyle){
        return element.currentStyle[attr];  //针对ie
    }else{
        return window.getComputedStyle(element,null)[attr]; //针对w3c
    }
}

