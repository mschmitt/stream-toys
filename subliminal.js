const show_for_ms = 16; // 16 ms = One frame @ 60Hz
var schedule = '0 0,20,40 * * * *';
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('s')){
	schedule = urlParams.get('s');
}
console.log('Schedule: ' + schedule);
if (urlParams.has('m')){
	message = urlParams.get('m');
}
console.log('Schedule: ' + message);

$(document).ready(function() {
	const job = new Cron(schedule, show_message);
	console.log("Next executions:");
	console.log(job.nextRuns(10));
});

$(window).resize(function() {
	location.reload();
});

function show_message() {
	// $("#message").show(0);
	$("#message").show(0, function() {setTimeout(hide_message, show_for_ms)});
	textFit($('#message')[0], {alignHoriz: true, alignVert: true, maxFontSize: 1000});
}
function hide_message() {
	$("#message").hide(0);
}

