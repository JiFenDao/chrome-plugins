function removeAD(){
	
	var appr =document.getElementById("app-read");
	var tor = document.getElementById("transOtherRight");
	var fbs = document.getElementById("follow-btns");
	
	var spread =document.getElementsByClassName("spread-wrap")[0];
	var guide = document.getElementsByClassName("download-guide")[0];
	var dtw = document.getElementsByClassName("domain-trans-wrapper")[0];
	var mtb = document.getElementsByClassName("manual-trans-btn")[0];
	var ew = document.getElementsByClassName("extra-wrap")[0];
	

	if (appr != undefined)		appr.remove();
	if (tor != undefined)		tor.remove();	
	if(fbs != undefined) 		fbs.remove();

	if (spread !=undefined)		spread.remove();
	if (guide != undefined)		guide.remove();
	if (dtw  !=undefined)		dtw.remove();
	if (ew != undefined)		ew.remove();
	if (mtb  !=undefined)		mtb.remove();
	

}

 setInterval(removeAD, 1000);
