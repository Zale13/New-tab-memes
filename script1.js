$(document).ready(function(){
	
/*
	Get URLs from the document body
*/
	
	var uriString = $('#url-list').text();
	var uriArray = uriString.split("\n");

/*
	Start going thru the array
*/

	var domains = {};
	var i;
	var count = 0;
	var html = '';
	
	for (i in uriArray) {
		
		var url = jQuery.trim(uriArray[i]);
		
		/*
			If the line is empty,
			skip it
		*/
		
		if (!url)
			continue;
		
		/*
			The line doesn't start with http,
			so it must be a separator that starts
			a new page and adds a heading
		*/
			
		if (url.substr(0,4) != 'http') {
			if (count > 0)
				html = html + '</div>';
			html = html + '<div id="heading"><h1 onclick="setMascot()">'+url+'</h1>';
			count++;
			continue;
		}
		
		/*
			Split the domain name from the URL
		*/
		
		var img = url.split(/\/+/g)[1];
		
		if(img in domains) {
			domains[img]++;
			img = img + '_' + domains[img];
		} else
			domains[img] = 1;
		
		/*
			Ready to be added to the document
		*/
		
		

		/*html = html + '<a href="'+url+');"></a>';*/
		html = html + '<a href="'+url+'" id="' + img + '"></a>';
	}
	
/*
	Add the stuff to the document
*/

	$('#container').prepend(
		html+'</div>'
	);


/*
	Add page numbers to the paragraph
*/

	$('#container div').each(
		function(index) {
			var page = index+1;
			$('#pages').append('<span>' + page + '</span>');
		}
	);

/*
	Adds active state
*/

	$('#pages span:first-child').addClass('active');

	
/*
	Hovering #prev and #next causes
	the prev/next page links to glow
*/

	$('#prev').hover(
		function() {
			$('#pages span.active').prev('#pages span').addClass('shine');
		},
		function() {
			$('#pages span').removeClass('shine');
		}
	);
	
	$('#next').hover(
		function() {
			$('#pages span.active').next('#pages span').addClass('shine');
		},
		function() {
			$('#pages span').removeClass('shine');
		}
	);

/*
	When page link is
	clicked
*/

	$('#pages span').click(
		function() {	
			var page = $(this).html();
			window.location.hash = page;
			$('#pages span').removeClass('active');
			$(this).addClass('active');
			$('#container div').hide();
			$('#container div:nth-child(' + page + ')').fadeIn();
		}
	);

/*
	Hook clicks from the #prev to
	previous page link
*/
	
	$('#prev').click(
		function() {
			$('#pages span.active').prev('#pages span').click();
		}
	);

/*
	Hook click from the #next
*/

	$('#next').click(
		function() {
			$('#pages span.active').next('#pages span').click();
		}
	);

/*
   Mouse wheel scroll handler
*/

    function handle(delta) {
    	if (delta < 0 )
    		$('#pages span.active').prev('#pages span').click();
    	else
    		$('#pages span.active').next('#pages span').click();
    }

    function wheel(event) {
    	var delta = 0;
    	if (event.detail)
    		handle(-event.detail/3);

    }

    if (window.addEventListener)
    	window.addEventListener('DOMMouseScroll', wheel, false);


/*
	Bind arrows, and transfer it as
	a click to the page links
*/

	$(document).keydown(
		function(event) {
			var goTo = '';
			if(event.keyCode == 37)
				goTo = 'prev';
			else if(event.keyCode == 39)
				goTo = 'next';
			if(goTo) {
				event.preventDefault();
				$('#pages span').removeClass('shine');
				$('#pages span.active')[goTo]('#pages span').click();
				return false;
			}
		}
	);

/*
	If the loaded starting URL has hash in it,
	activate that specific page
*/

	if(window.location.hash) {
		$('#pages span:nth-child(' + window.location.hash.substring(1) + ')').click();
	}

/*
	If the page somehow opens, or ends up,
	in strange cordinates, reset the location
*/

	$('body').click(scroll(0,0));
});
