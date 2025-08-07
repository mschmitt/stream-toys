var show_for_ms=3;
var hide_for_ms=10000; 

$(document).ready(function() {
	size_to_container();
});

$(window).resize(function() {
	location.reload();
});

function size_to_container() {
	show_message();
	textFit($('#message')[0], {alignHoriz: true, alignVert: true, maxFontSize: 1000});
}

function show_message() {
	// $("#message").show(0);
	$("#message").show(0, function() {setTimeout(hide_message, show_for_ms)});
}
function hide_message() {
	$("#message").hide(0, function() {setTimeout(show_message, hide_for_ms)});
}

