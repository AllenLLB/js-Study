/** 
 * 运动框架-1-动起来 
 * @param {HTMLElement} element 进行运动的节点 
 */ 
var timer = null; 
function startMove(element) { 
    timer = setInterval(function () {//定时器 
        element.style.left = element.offsetLeft + 5 + "px"; 
    }, 30); 
} 


/*
 * 设置终止运动的条件iTarget
*/


/** 
 * 运动框架-2-运动终止 
 * @param {HTMLElement} element 进行运动的节点 
 * @param {number}      iTarget 运动终止条件。 
 */  
function startMove(element, iTarget) { 
    timer = setInterval(function () { 
        element.style.left = element.offsetLeft + 5 + "px"; 
        if (element.offsetLeft === iTarget) {//停止条件 
            clearInterval(timer); 
        } 
    }, 30); 
} 

/*
 *注意：上述运动中存在些许bug:速度取得某些值时没法停止、到达位置后再点还会运动、
 		重复点击速度加快、无法修改速度的值

 		解决bug的方法:
 			--把运动和停止用(if/else)来写
 			--在又一次点击时先关闭之前的定时器
 			--把速度的值保存在变量里面
*/




/** 
 * 运动框架-3-解决Bug 
 */ 
function startMove(element, iTarget) { 
    clearInterval(timer);//在开始运动时,关闭已有定时器 
    timer = setInterval(function () { 
        var iSpeed = 5;//把速度用变量保存 
        //把运动和停止隔开(if/else) 
        if (element.offsetLeft === iTarget) {//结束运动 
            clearInterval(timer); 
        } else { 
            element.style.left = element.offsetLeft + iSpeed + "px"; 
        } 
    }, 30); 
} 


/*
 *此次设置时运动可以左右自己控制
*/

//判断距离目标位置，达到自动变化速度正负 
var iSpeed = 0; 
if (element.offsetLeft < iTarget) { 
    iSpeed = 5; 
} else { 
    iSpeed = -5; 
} 


/*
 *匀速运动中加入了透明度
*/
//透明度浏览器兼容实现 
if (alpha === iTarget) { 
    clearInterval(time); 
} else { 
    alpha += speed; 
    element.style.filter = 'alpha(opacity:' + alpha + ')'; //兼容IE 
    element.style.opacity = alpha / 100;//标准 
} 
