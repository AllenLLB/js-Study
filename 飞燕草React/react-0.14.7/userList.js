window.onload=function(){
	var oBtn=document.getElementById("btn");
	var oForm=document.getElementById("form");
	var isSee=false;
	oBtn.onclick=function(){
		if (!isSee) {
			oForm.style.display="block";
			isSee=true;
		}else{
			oForm.style.display="none";
			isSee=false;
		}
	}
}