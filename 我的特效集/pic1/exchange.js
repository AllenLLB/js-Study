/**
 * Created by 立博 on 2016/3/15.
 */
    //新建一个数组,来存放src属性的取值
     var  Imgs=new Array("01.gif","02.gif","03.gif","04.gif",
                       "05.gif","06.gif","07.gif","08.gif","09.gif");
    //一个标签集合,来存放img对象
     var nodeImgs=document.getElementsByTagName("img");
    //取得存放图片的div的集合
    var Divs=document.getElementsByClassName('all');
    //设置一个数组,用来存放随机取得的Imgs数组的下标值
    var randomNums=new Array(0);
    while (randomNums.length<9){
        radNum=getRandom();
        if(!hasSame(radNum)){
            randomNums.push(radNum);
        }
    }
    //设置img标签的src属性值————来自于地址数组索引到的随机值
    for(var i=0;i<Imgs.length;i++) {
        //取得随机的索引值
        nodeImgs[i].src = Imgs[randomNums[i]];
    }
    randomNums.length=0;    //清除数组,防止浏览器奔溃

    //首先取得含空白图片的div
    function getEmpty(){
        for(var i=0;i<nodeImgs.length;i++){
            if(/09/.test(nodeImgs[i].src)){
                return nodeImgs[i].parentNode;
            }
        }
    }
    //先设置向上移动的函数moveUp()
    function moveUp(){
        if(parseInt(getStyle(getEmpty(),'top'))!=0){
            var a=getStyle(getEmpty(),'top');
            var b=getStyle(getEmpty(),'left');
            getEmpty().style.top=(parseInt(a)-137)+'px';
            getEmpty().style.left=parseInt(b)+"px";
            getAim((parseInt(a)-137),parseInt(b)).style.top=parseInt(a)+"px";
            getAim((parseInt(a)-137),parseInt(b)).style.left=parseInt(b)+"px";
        }else{
           alert('Can not Up');
        }
    }
    //设置向下移动的函数moveDown()
    function moveDown(){
        if(parseInt(getStyle(getEmpty(),'top'))!=274){
            var a=getStyle(getEmpty(),'top');
            var b=getStyle(getEmpty(),'left');
            getEmpty().style.top=(parseInt(a)+137)+'px';
            getEmpty().style.left=parseInt(b)+'px';
            getAim((parseInt(a)+137),parseInt(b)).style.top=parseInt(a)+'px';
            getAim((parseInt(a)+137),parseInt(b)).style.left=parseInt(b)+'px';
        }else{
            alert("Can not Down");
        }
    }
    //设置向左移动的函数moveLeft()
    function moveLeft(){
        if(parseInt(getStyle(getEmpty(),'left'))!=0){
            var a=getStyle(getEmpty(),"top");
            var b=getStyle(getEmpty(),"left");
            getEmpty().style.top=parseInt(a)+"px";
            getEmpty().style.left=(parseInt(b)-137)+"px";
            getAim(parseInt(a),(parseInt(b)-137)).style.top=parseInt(a)+"px";
            getAim(parseInt(a),(parseInt(b)-137)).style.left=parseInt(b)+"px";
        }else{
            alert("Can not left");
        }
    }
    //设置向右移动的函数moveRight()
    function moveRight(){
        if(parseInt(getStyle(getEmpty(),'left'))!=274){
            var a=getStyle(getEmpty(),"top");
            var b=getStyle(getEmpty(),"left");
            getEmpty().style.left=(parseInt(b)+137)+"px";
            getEmpty().style.top=parseInt(a)+"px";
            getAim(parseInt(a),(parseInt(b)+137)).style.top=parseInt(a)+"px";
            getAim(parseInt(a),(parseInt(b)+137)).style.left=parseInt(b)+"px";
        }else{
            alert("Can not right");
        }
    }



