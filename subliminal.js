const show_for_ms = 16; // 16 ms = One frame @ 60Hz
var schedule = '* * * * * *';

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

