function storeUsernote(id) {
    var note = document.getElementById('note').value;
    localStorage.setItem('usernote', note);
}

function getUsernote() {
    if ( localStorage.getItem('usernote')) {
        var note = localStorage.getItem('usernote');
    } else {
        var note = 'Write your note here';
    }

    document.getElementById('note').value = note;
}

function clearLocal() {
    clear: localStorage.clear();
    document.getElementById('note').value = "Write your note here";
    return false;
}

function noteAnimate() {
    $('#bgnote').animate({
        marginRight: parseInt($('#bgnote').css('marginRight'),10) == 0 ?
        $('#bgnote').outerWidth():0
    });
}

/*      click & doubleclick done properly      */

var DELAY = 250, clicks = 0, timer = null;

$(function(){

    $("#stickynote").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                noteAnimate();  //perform single-click action    
                clicks = 0;     //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            clearLocal();           //perform double-click action
            clicks = 0;             //after action performed, reset counter
        }

    })
});


/*      jQuery starts here      */

$(document).ready(function(){
    getUsernote();
});

$(window).focus(function() {
    getUsernote();
})

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
