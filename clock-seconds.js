const chars = ['0','1','2','3','4','5','6','7','8','9'];
$(document).ready(function() {
	$('#clock_hrs').flapper({width: 2, chars: chars});
	$('#clock_colon_1').flapper({width: 1, chars: [':']});
	$('#clock_mins').flapper({width: 2, chars: chars});
	$('#clock_colon_2').flapper({width: 1, chars: [':']});
	$('#clock_secs').flapper({width: 2, chars: chars});
	show_clock();
	setInterval(function() {
		show_clock();
	}, 1000);
});

function show_clock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (hours < 10){
		hours = '0' + hours;
	}
	if (minutes < 10){
		minutes = '0' + minutes;
	}
	if (seconds < 10){
		seconds = '0' + seconds;
	}
	$('#clock_hrs').val(hours).change();
	$('#clock_colon_1').val(':').change();
	$('#clock_mins').val(minutes).change();
	$('#clock_colon_2').val(':').change();
	$('#clock_secs').val(seconds).change();
}
