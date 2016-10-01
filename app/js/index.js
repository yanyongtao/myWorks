function rem(size){
	var clientW=document.documentElement.clientWidth;
	var bili=clientW/size;
	var fontSize=bili*100;
	document.getElementsByTagName("html")[0].style.fontSize=fontSize+"px";
}
rem(375)
