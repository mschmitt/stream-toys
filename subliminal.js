const show_for_ms = 16; // 16 ms = One frame @ 60Hz

// Defaults
var schedule = '0 0,20,40 * * * *';
var message = ['FOLLOW'];

var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('s')){
	schedule = urlParams.get('s');
}
console.log('Schedule:');
console.log(schedule);
if (urlParams.has('m')){
	console.log(urlParams.getAll('m'));
	message = urlParams.getAll('m');
}
console.log('Message(s):');
console.log(message);

$(document).ready(function() {
	const job = new Cron(schedule, show_message);
	console.log("Next executions:");
	console.log(job.nextRuns(10));
});

$(window).resize(function() {
	location.reload();
});

function show_message() {
	$("#message").html(message[0]);
	$("#message").show(0, function() {setTimeout(hide_message, show_for_ms)});
	textFit($('#message')[0], {alignHoriz: true, alignVert: true, maxFontSize: 1000});
}
function hide_message() {
	$("#message").hide(0);
	message.push(message.shift()); // prepare message for next invocation
}

