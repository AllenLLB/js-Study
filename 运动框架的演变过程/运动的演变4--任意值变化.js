/*
 *由于设置某些值变化,例如border时会由于offset系列属性的问题而产生bug,故先封装getStyle()
 *对属性值进行取得
*/

/** 
 * 获取实际样式函数 
 * @param   {HTMLElement}   element  需要寻找的样式的html节点 
 * @param   {String]} attr 在对象中寻找的样式属性 
 * @returns {String} 获取到的属性 
 */ 
function getStyle(element, attr) { 
    //IE写法 
    if (element.currentStyle) { 
        return element.currentStyle[attr]; 
    //标准 
    } else { 
        return getComputedStyle(element, false)[attr]; 
    } 
} 



 

/** 
 * 运动框架-4-任意值变化 
 * @param {HTMLElement} element 运动对象 
 * @param {string}      attr    需要改变的属性。 
 * @param {number}      iTarget 目标值 
 */ 
function startMove(element, attr, iTarget) { 
    clearInterval(element.timer); 
    element.timer = setInterval(function () { 
        //因为速度要动态改变，所以必须放在定时器中 
    var iCurrent=0; 
    iCurrent = parseInt(getStyle(element, attr));//实际样式大小 
        var iSpeed = (iTarget - iCurrent) / 10; //(目标值-当前值)/缩放系数=速度 
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //速度取整 
        if (iCurrent === iTarget) {//结束运动 
            clearInterval(element.timer); 
        } else { 
            element.style[attr] = iCurrent + iSpeed + "px"; 
        } 
    }, 30); 
}


/** 
 * 运动框架-5-兼容透明度 
 * @param {HTMLElement} element 运动对象 
 * @param {string}      attr    需要改变的属性。 
 * @param {number}      iTarget 目标值 
 */ 
function startMove(element, attr, iTarget) { 
    clearInterval(element.timer); 
    element.timer = setInterval(function () { 
        //因为速度要动态改变，所以必须放在定时器中 
        var iCurrent = 0; 
        if (attr === "opacity") { //为透明度时执行。 
            iCurrent = Math.round(parseFloat(getStyle(element, attr)) * 100); 
        } else { //默认情况 
            iCurrent = parseInt(getStyle(element, attr)); //实际样式大小 
        } 
        var iSpeed = (iTarget - iCurrent) / 10; //(目标值-当前值)/缩放系数=速度 
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //速度取整 
        if (iCurrent === iTarget) {//结束运动 
            clearInterval(element.timer); 
        } else { 
            if (attr === "opacity") { //为透明度时，执行 
                element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")"; //IE 
                element.style.opacity = (iCurrent + iSpeed) / 100; //标准 
            } else { //默认 
                element.style[attr] = iCurrent + iSpeed + "px"; 
            } 
        } 
    }, 30); 
} 
 