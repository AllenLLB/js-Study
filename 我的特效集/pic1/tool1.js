/**
 * Created by ���� on 2016/3/18.
 */

//ȡ������ĺ���
function getRandom(){
    return Math.floor(Math.random()*9);
}
//�ж�������Ƿ��������д���
function hasSame(item){
    for(var i=0;i<randomNums.length;i++){
        if(item==randomNums[i]){
            return true;
        }
    }
    return false;
}
//ȡ������Ҫ��հ׽�����div
function getAim(top,left){
    for(var i=0;i<Divs.length;i++){
        if(parseInt(getStyle(Divs[i],'top'))==top&&parseInt(getStyle(Divs[i],'left'))==left){
            console.log(Divs[1]);
            return Divs[i];
        }
    }
}
//��ȡ�ⲿ��ʽ�����ʽ
function getStyle(obj,attr){
    //return this.elements[i].style[attr];    //ע�⣺���ַ����޷���ȡ���ⲿ�ļ��е���ʽ
    if(obj.currentStyle){
        return obj.currentStyle[attr];                  //ie
    }else{
        return getComputedStyle(obj,null)[attr];        //w3c
    }
}

