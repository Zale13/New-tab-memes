var dateShown = false

function dateInfo() {
	var today=new Date();
	var hh=today.getHours();
	var mm=today.getMinutes();
	var ss=today.getSeconds();
	var yyyy=today.getFullYear();
	var mo=today.getMonth()+1;
	var dd=today.getDate();
	hh = zeroPadding(hh);
	mm = zeroPadding(mm);
	ss = zeroPadding(ss);
	mo = zeroPadding(mo);
	dd = zeroPadding(dd);
	document.getElementById('date').innerHTML = yyyy+"-"+mo+"-"+dd+" "+hh+":"+mm+":"+ss;
	var t = setTimeout(function(){dateInfo()},500);
}

function zeroPadding(i) {
	if (i<10) {i = "0" + i}; 
	return i;
}

function calAnimate() {
	dateShown = !dateShown;
	$('#bgdate').animate({
		marginRight: parseInt($('#bgdate').css('marginRight'),10) == 0 ?
		$('#bgdate').outerWidth():0
	});
}


/*		jQuery starts here		*/

$(document).ready(function(){
    if (typeof t === 'undefined') { dateInfo(); };	
	$('#calendar').click(function(){
		calAnimate();
		setTimeout(function(){
		    if (dateShown == true) {calAnimate()};
		},5000);
	});
});


/*      future ideas      */

/*$('#mydiv').hover(function() {
   $(this).data('hover',1); // mouse is over the div
}, function(){
   $(this).data('hover',0); // mouse is no longer over the div
});

$(document).mousewheel(function(event, delta, deltaX, deltaY) {
    if($('#mydiv').data('hover') == 1 && $(document).attr('alert-on') != 1) {
        $(document).attr('alert-on', 1) 
        if(deltaY > 0) {
            alert('wheel scrolls up');
        } else {
            alert('wheel scrolls down');
        }
        $(document).attr('alert-on', 0) 
    }
});*/
