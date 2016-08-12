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
 * 完美运动框架 
 * @param {HTMLElement} element 运动对象 
 * @param {JSON}        json    属性：目标值       
 *   @property {String} attr    属性值 
 *   @config   {Number} target  目标值 
 * @param {function}    func    可选，回调函数，链式动画。 
 */ 
function startMove(element, json, func) { 
    var flag = true; //假设所有运动到达终点. 
    clearInterval(element.timer); 
    element.timer = setInterval(function () { 
        for (var attr in json) { 
            //1.取当前的属性值。 
            var iCurrent = 0; 
            if (attr === "opacity") { //为透明度时执行。 
                iCurrent = Math.round(parseFloat(getStyle(element, attr)) * 100); 
            } else { //默认情况 
                iCurrent = parseInt(getStyle(element, attr)); //实际样式大小 
            } 
            //2.算运动速度,动画缓冲效果 
            var iSpeed = (json[attr] - iCurrent) / 10; //(目标值-当前值)/缩放系数=速度 
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //速度取整 
 
            //3.未到达目标值时，执行代码  
            if (iCurrent != json[attr]) { 
                flag = false; //终止条件 
                if (attr === "opacity") { //为透明度时，执行 
                    element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")"; //IE 
                    element.style.opacity = (iCurrent + iSpeed) / 100; //标准 
                } else { //默认 
                    element.style[attr] = iCurrent + iSpeed + "px"; 
                } 
            } else { 
                flag = true; 
            } 
            //4. 运动终止，是否回调 
            if (flag) { 
                clearInterval(element.timer); 
                if (func) { 
                    func(); 
                } 
            } 
        } 
    }, 30); 
} 


/*
 *说明：
使用JSON传递多个值
 
使用for in循环，遍历属性，与值。
 
定时器问题!(运动提前停止)
 
在循环外设置变量,假设所有的值都到达了目的值为true
 
在循环中检测是否到达目标值,若没有值未到则为false
 
在循环结束后,检测是否全部达到目标值.是则清除定时器


实现：
 
删除attr与iTarget两个形参，改为json
 
在函数开始时，设置一个标记var flag = true; //假设所有运动到达终点.
 
在定时器内使用for in，遍历属性与目标，改写原来的attr与iTarget，为json的属性与值
 
修改运动终止条件，只有每一项的实际属性值iCurrent，等于目标值json[attr]时，flag才为true。清除定时器，判断是否回调。
 
否则，继续执行代码，直到所有属性值等于目标值。

*/