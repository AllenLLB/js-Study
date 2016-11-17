/**
 * Created by Á¢²© on 2016/3/15.
 */
   
     var  Imgs=new Array("01.gif","02.gif","03.gif","04.gif",
                       "05.gif","06.gif","07.gif","08.gif","09.gif");
   
     var nodeImgs=document.getElementsByTagName("img");
  
    var Divs=document.getElementsByClassName('all');
    
    var randomNums=new Array(0);
    while (randomNums.length<9){
        radNum=getRandom();
        if(!hasSame(radNum)){
            randomNums.push(radNum);
        }
    }
   
    for(var i=0;i<Imgs.length;i++) {
     
        nodeImgs[i].src = Imgs[randomNums[i]];
    }
    randomNums.length=0;    


    function getEmpty(){
        for(var i=0;i<nodeImgs.length;i++){
            if(/09/.test(nodeImgs[i].src)){
                return nodeImgs[i].parentNode;
            }
        }
    }
   
    function moveUp(){
        if(getStyle(getEmpty(),'top')!=0){
            var a=getStyle(getEmpty(),'top');
            var b=getStyle(getEmpty(),'left');
            getEmpty().style.top=(parseInt(a)-137)+'px';
            getEmpty().style.left=b;
            getAim(((parseInt(a)-137)+'px'),b).style.top=a;
            getAim(((parseInt(a)-137)+'px'),b).style.left=b;
        }
        else {
            alert("can not top");
        }
    }

    function moveDown(){
        if(getStyle(getEmpty(),'top')!==411){
            var a=getStyle(getEmpty(),'top');
            var b=getStyle(getEmpty(),'left');
            getEmpty().style.top=(parseInt(a)+137)+'px';
            getEmpty().style.left=parseInt(b)+'px';
            getAim((parseInt(a)+137)+'px',b).style.top=a;
            getAim((parseInt(a)+137)+'px',b).style.left=b;
        }else{
            return ;
        }
    }
  
    function moveLeft(){
        if(getStyle(getEmpty(),'left')!=0){
            var a=getStyle(getEmpty(),"top");
            var b=getStyle(getEmpty(),"left");
            getEmpty().style.top=a;
            getEmpty().style.left=(parseInt(b)-137)+"px";
            getAim(a,(parseInt(b)-137)+"px").style.top=a;
            getAim(a,(parseInt(b)-137)+"px").style.left=b;
        }else{
            return ;
        }
    }
  
    function moveRight(){
        if(getStyle(getEmpty(),'left')!=411){
            var a=getStyle(getEmpty(),"top");
            var b=getStyle(getEmpty(),"left");
            getEmpty().style.left=(parseInt(b)+137)+"px";
            getEmpty().style.top=a;
            getAim(a,(parseInt(b)+137)+"px").style.top=a;
            getAim(a,(parseInt(b)+137)+"px").style.left=b;
        }else{
            return;
        }
    }



