function hideAllBlocksExcept(parentBlockId, notHide){
	var x=document.getElementById(parentBlockId);
	var y=x.getElementsByClassName("descriptionContainer");
	for (var i=0; i<y.length; i++){
		y[i].style.display="none";
	}
	x.getElementsByClassName(notHide)[0].style.display = "block";
}