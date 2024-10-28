var seconds = 300;
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('s')){
	seconds = urlParams.get('s');
}
var want_redirect = 0;
if (urlParams.has('r')){
	want_redirect = urlParams.get('r');
}

const chars = ['9','8','7','6','5','4','3','2','1','0'];
$(document).ready(function() {
	$('#countdown_mins').flapper({width: 2, chars: chars});
	$('#countdown_colon').flapper({width: 1, chars: [':', ' ']});
	$('#countdown_secs').flapper({width: 2, chars: chars});
	show_countdown(seconds);
	const flap_interval = setInterval(function() {
		seconds = seconds - 1;
		show_countdown(seconds);
	}, 1000);
});

function show_countdown(seconds) {
	if (seconds % 2 == 0) { // "blinking" colon
		$('#countdown_colon').val(':').change();
	} else {
		$('#countdown_colon').val(' ').change();
	}
	if (seconds < 0) {
		if (want_redirect == 1) {
			window.location.replace("clock-seconds.html");
		} else if (want_redirect == 2) {
			window.location.replace("clock-minutes.html");
		}
		return;
	}
	var split_mins = Math.floor(seconds/60);
	var split_secs = seconds % 60;
	if (split_mins < 10){
		split_mins = '0' + split_mins;
	}
	if (split_secs < 10){
		split_secs = '0' + split_secs;
	}
	$('#countdown_mins').val(split_mins).change();
	$('#countdown_secs').val(split_secs).change();
}
