const chars = ['0','1','2','3','4','5','6','7','8','9',' '];
var hours_ready = new Object();
var minutes_ready = new Object();
var description = new Object();
var timezone = new Object();
$(document).ready(function() {
	// init_flapper();
	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.size == 0) {
		// defaults
		console.log('Using default time zones');
		urlParams.set('LAX', 'America/Los_Angeles');
		urlParams.set('NYC', 'America/New_York');
		urlParams.set('RIO', 'America/Sao_Paulo');
		urlParams.set('LON', 'Europe/London');
		urlParams.set('BER', 'Europe/Berlin');
		urlParams.set('JNB', 'Africa/Johannesburg');
		urlParams.set('IST', 'Europe/Istanbul');
		urlParams.set('DXB', 'Asia/Dubai');
		urlParams.set('SIN', 'Asia/Singapore');
		urlParams.set('TYO', 'Asia/Tokyo');
		urlParams.set('MEL', 'Australia/Melbourne');
	}
	for (const [desc, tz] of urlParams.entries()) {
		console.log(desc);
		console.log(tz);
		let uuid = self.crypto.randomUUID();
		// Map description fields to abstract ids
		description[uuid] = desc;
		timezone[uuid] = tz;
		hours_ready[uuid] = 1;
		minutes_ready[uuid] = 1;
		// Create a copy of the clock template
		$('.clock:first').clone().appendTo('body');
		// Rename the copy (last in list) to identify it
		$('.clock:last').attr('id', uuid);
		init_flapper(uuid);
	}
	// Clock divs fully assembled. Delete the top clock template div.
	$('.clock:first').remove();
	// Initialize each flapper
	console.log(description);
	console.log(timezone);
});

function init_flapper(uuid){
	$('#' + uuid + ' .description').flapper({width: 3, chars: chars});
	$('#' + uuid + ' .blank').flapper({width: 1, chars: [' ']});
	$('#' + uuid + ' .clock_hrs').flapper({width: 2, chars: chars, on_anim_end: function(){hours_ready[uuid] = 1; flapper_ready(uuid);}});
	$('#' + uuid + ' .clock_colon').flapper({width: 1, chars: [':', ' ']});
	$('#' + uuid + ' .clock_mins').flapper({width: 2, chars: chars, on_anim_end: function(){minutes_ready[uuid] = 1; flapper_ready(uuid);}});
}

function show_clock(uuid) {
	var date = new Date(new Date().toLocaleString('en', {timeZone: timezone[uuid]}))
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	hours_ready[uuid] = 0;
	minutes_ready[uuid] = 0;
	$('#' + uuid + ' .description').val(description[uuid]).change();
	$('#' + uuid + ' .clock_colon').val(':').change();
	if (hours < 10){
		hours = '0' + hours;
	}else{
		hours = hours.toString();
	}
	if (minutes < 10){
		minutes = '0' + minutes;
	}else{
		minutes = minutes.toString();
	}
	// Pretend to glitch randomly every once in a while
	if (Math.floor(Math.random() * 500) == 0) {
		$('#' + uuid + ' .clock_hrs').val('00').change();
		$('#' + uuid + ' .clock_mins').val('00').change();
		return;
	} else {
		$('#' + uuid + ' .clock_hrs').val(hours).change();
		$('#' + uuid + ' .clock_mins').val(minutes).change();
	}
}

function flapper_ready(uuid){
	if (hours_ready[uuid] + minutes_ready[uuid] == 2){
		setTimeout(show_clock, 100, uuid);
	}
}

