/**
 * Created by ���� on 2016/3/15.
 */
var myImages=new Array("pic/1.gif","pic/2.jpg","pic/3.jpg","pic/4.jpg");
var img=document.getElementsByTagName("img")[0];
// img.src=myImages[1];    //ע�⣺src����style.src

var index=0;
function nextPic(){
    if(index<myImages.length){
        img.src=myImages[index];
        index++;
    }
    else{
        //index=0;     ���(��������һ��)���Խ���ѭ���л�
        //img.src=myImages[index];
        alert("The last!");
    }
}
function previousPic(){
    if(index>0){
        index--;
        img.src=myImages[index];
    }
    else{
        //index=myImages.length; ���(��������һ��)���Խ���ѭ���滻
        //img.src=myImages[index];
        alert("The first!");
    }
}

