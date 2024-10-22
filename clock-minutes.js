const chars = ['0','1','2','3','4','5','6','7','8','9'];
$(document).ready(function() {
	$('#clock_hrs').flapper({width: 2, chars: chars});
	$('#clock_colon').flapper({width: 1, chars: [':']});
	$('#clock_mins').flapper({width: 2, chars: chars});
	setInterval(function() {
		show_clock();
	}, 500);
});

function show_clock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if (hours < 10){
		hours = '0' + hours;
	}
	if (minutes < 10){
		minutes = '0' + minutes;
	}
	$('#clock_hrs').val(hours).change();
	$('#clock_colon').val(':').change();
	$('#clock_mins').val(minutes).change();
}
