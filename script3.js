/* List of mascot files to choose from and their properties */
var mascotList = [
   
    {
        "filename": "Qpvykgt.png",
        "xpos": "20"
    },
	
    {
        "filename": "8oBvhZ9.png",
        "xpos": "0"
    },
	
	
    {
        "filename": "aOIdeMi.png",
        "xpos": "200"
    },
   
    
    {
        "filename": "joo2lCd.png",
        "xpos": "25"
    },
    
	{
        "filename": "z7DtDCI.png",
        "xpos": "0"
    },
	
	{
        "filename": "GFBqaVU.png",
        "xpos": "0"
    },
	
	{
        "filename": "TPIm4Ne.png",
        "xpos": "0"
    },
	
		
	
	{
        "filename": "o8xuTdA.png",
        "xpos": "0"
    },
	
	{
        "filename": "GuRE8nv.png",
        "xpos": "0"
    },
	
	{
        "filename": "7agC9MF.png",
        "xpos": "0"
    },
	
	{
        "filename": "7QxwZ28.png",
        "xpos": "0"
    },
	
	
	
	{
        "filename": "f8R9RFa.jpg",
        "xpos": "0"
    },
	
	
	{
        "filename": "jvbPIsE.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "NWP6OKo.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "5ki67Df.png",
        "xpos": "0"
    },
	
	
	
	{
        "filename": "PCNe9mX.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "A9jkxqk.png",
        "xpos": "0"
    },
	
	{
        "filename": "exCypLd.png",
        "xpos": "0"
    },
	
	{
        "filename": "Unmcfv1.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "3O52GdQ.png",
        "xpos": "0"
    },
	
	{
        "filename": "Afpb4xq.png",
        "xpos": "0"
    },
	
	
	
	{
        "filename": "UZzVQUI.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "0cupQLz.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "wXOCYEw.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "cVTAtza.png",
        "xpos": "0"
    },
	
	
	
	
	{
        "filename": "dksdx6M.png",
        "xpos": "0"
    },
	
	
	
	
	{
        "filename": "shtOwll.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "Ev5i6K7.png",
        "xpos": "0"
    },
	
	{
        "filename": "E0rOH30.png",
        "xpos": "0"
    },
	
	{
        "filename": "iBciNVJ.png",
        "xpos": "0"
    },
	
	{
        "filename": "GYZNxIW.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "76DUghS.png",
        "xpos": "0"
    },
	
	{
        "filename": "wCNjEzZ.png",
        "xpos": "0"
    },
	
	{
        "filename": "L3tb2h9.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "QhueWIk.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "QSR3BnD.png",
        "xpos": "0"
    },
	
	{
        "filename": "qshclXJ.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "uhEX0qr.png",
        "xpos": "0"
    },
	
	{
        "filename": "jyFqDuP.png",
        "xpos": "0"
    },
	
	
	{
        "filename": "zqG442T.png",
        "xpos": "0"
    },
	
	
	
	]

/* Randomly selects a mascot from the list and sets it as main background */
function setMascot() {
    var mascot          = mascotList[Math.floor(Math.random() * mascotList.length)];
var mascotPath      = "https://i.imgur.com/" + mascot.filename;
$('#main').css("background-image", "url(" + mascotPath + ")");
$('#main').css("background-position", mascot.xpos + "px 0px");
}

/* Pressing Ctrl + M changes mascot (clicking on heading also works via onclick= on heading tag on main.js) */
$(document).keydown(
    function(event) {
        if(event.keyCode == 77 && event.ctrlKey)
        setMascot();
    }
);

/* Initial mascot setting on page load */
$(document).ready(function(event) {
    setMascot();
});
