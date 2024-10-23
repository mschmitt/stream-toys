const chars = ['0','1','2','3','4','5','6','7','8','9',' '];
$(document).ready(function() {
	$('#clock_hrs').flapper({width: 2, chars: chars});
	$('#clock_colon_1').flapper({width: 1, chars: [':']});
	$('#clock_mins').flapper({width: 2, chars: chars});
	$('#clock_colon_2').flapper({width: 1, chars: [':']});
	$('#clock_secs').flapper({width: 2, chars: chars});
	setInterval(function() {
		show_clock();
	}, 1000); // Note we're on stream, viewers clock will always be offset.
});

function show_clock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
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
	if (seconds < 10){
		seconds = '0' + seconds;
	}else{
		seconds = seconds.toString();
	}
	// Pretend to glitch randomly every once in a while
	if (Math.floor(Math.random() * 200) == 0) {
		$('#clock_hrs').val('00').change();
		$('#clock_mins').val('00').change();
		$('#clock_secs').val('00').change();
		return;
	}
	$('#clock_hrs').val(hours).change();
	$('#clock_colon_1').val(':').change();
	$('#clock_mins').val(minutes).change();
	$('#clock_colon_2').val(':').change();
	$('#clock_secs').val(seconds).change();
}
