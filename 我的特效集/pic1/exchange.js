/**
 * Created by ���� on 2016/3/15.
 */
    //�½�һ������,�����src���Ե�ȡֵ
     var  Imgs=new Array("01.gif","02.gif","03.gif","04.gif",
                       "05.gif","06.gif","07.gif","08.gif","09.gif");
    //һ����ǩ����,�����img����
     var nodeImgs=document.getElementsByTagName("img");
    //ȡ�ô��ͼƬ��div�ļ���
    var Divs=document.getElementsByClassName('all');
    //����һ������,����������ȡ�õ�Imgs������±�ֵ
    var randomNums=new Array(0);
    while (randomNums.length<9){
        radNum=getRandom();
        if(!hasSame(radNum)){
            randomNums.push(radNum);
        }
    }
    //����img��ǩ��src����ֵ�������������ڵ�ַ���������������ֵ
    for(var i=0;i<Imgs.length;i++) {
        //ȡ�����������ֵ
        nodeImgs[i].src = Imgs[randomNums[i]];
    }
    randomNums.length=0;    //�������,��ֹ���������

    //����ȡ�ú��հ�ͼƬ��div
    function getEmpty(){
        for(var i=0;i<nodeImgs.length;i++){
            if(/09/.test(nodeImgs[i].src)){
                return nodeImgs[i].parentNode;
            }
        }
    }
    //�����������ƶ��ĺ���moveUp()
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
    //���������ƶ��ĺ���moveDown()
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
    //���������ƶ��ĺ���moveLeft()
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
    //���������ƶ��ĺ���moveRight()
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



