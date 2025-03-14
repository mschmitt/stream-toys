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
		urlParams.set('DEL', 'Asia/Kolkata');
		urlParams.set('SIN', 'Asia/Singapore');
		urlParams.set('TYO', 'Asia/Tokyo');
		urlParams.set('MEL', 'Australia/Melbourne');
	}
	for (const [desc, tz] of urlParams.entries()) {
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
		// Initialize each flapper by uuid
		init_flapper(uuid);
	}
	// Clock divs fully assembled. Delete the top clock template div.
	$('.clock:first').remove();
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
	hours_ready[uuid] = 0;
	minutes_ready[uuid] = 0;
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
	// I swear there is more work in here than in every
	// other part of this script.
	if (Math.floor(Math.random() * 2000) == 0) {
		$('#' + uuid + ' .description').val(random_characters(3)).change();
		$('#' + uuid + ' .blank').val(random_characters(1)).change();
		$('#' + uuid + ' .clock_hrs').val(random_characters(2)).change();
		$('#' + uuid + ' .clock_colon').val(random_characters(1)).change();
		$('#' + uuid + ' .clock_mins').val(random_characters(2)).change();
		return;
	} else {
		$('#' + uuid + ' .description').val(description[uuid]).change();
		$('#' + uuid + ' .blank').val(' ').change();
		$('#' + uuid + ' .clock_hrs').val(hours).change();
		$('#' + uuid + ' .clock_colon').val(':').change();
		$('#' + uuid + ' .clock_mins').val(minutes).change();
	}
}

function flapper_ready(uuid){
	if (hours_ready[uuid] + minutes_ready[uuid] == 2){
		setTimeout(show_clock, 100, uuid);
	}
}

function random_characters(want_chars){
	var result = '';
	var got_chars = 0;
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 :';
	while (got_chars < want_chars) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
		got_chars += 1;
	}
	return result;
}
