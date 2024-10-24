const chars = ['0','1','2','3','4','5','6','7','8','9',' '];
var hours_ready = 1;
var minutes_ready = 1;
$(document).ready(function() {
	$('#clock_hrs').flapper({width: 2, chars: chars, on_anim_end: function(){hours_ready = 1; flapper_ready();}});
	$('#clock_colon').flapper({width: 1, chars: [':']});
	$('#clock_mins').flapper({width: 2, chars: chars, on_anim_end: function(){minutes_ready = 1; flapper_ready();}});
	flapper_ready();
});

function show_clock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	hours_ready = 0;
	minutes_ready = 0;
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
		$('#clock_hrs').val('00').change();
		$('#clock_mins').val('00').change();
		return;
	} else {
		$('#clock_hrs').val(hours).change();
		$('#clock_colon').val(':').change();
		$('#clock_mins').val(minutes).change();
	}
}

function flapper_ready(){
	if (hours_ready + minutes_ready == 2){
		setTimeout(show_clock, 100);
	}
}

