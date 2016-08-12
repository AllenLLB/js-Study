/*
*缓冲运动即速度逐渐变慢,最后停止、距离越远速度越大、速度由距离决定、速度=(目标值-当前值)/缩放系数
*bug及解决:速度取整(Math方法),不然会闪
*Math.ceil(iSpeed)	向上取整
*Math.floor(iSpeed)向下取整
*/



/** 
 * 运动框架-4-缓冲动画 
 *某些值不能停止的问题也随之被解决
 */ 
function startMove(element, iTarget) { 
    clearInterval(timer); 
    timer = setInterval(function () { 
    //因为速度要动态改变，所以必须放在定时器中 
        var iSpeed = (iTarget - element.offsetLeft) / 10; //(目标值-当前值)/缩放系数=速度 
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //速度取整 
        if (element.offsetLeft === iTarget) {//结束运动 
            clearInterval(timer); 
        } else { 
            element.style.left = element.offsetLeft + iSpeed + "px"; 
        } 
    }, 30); 
} 