var timer = 25;

$(document).ready(function() {
	$('.timer').html(timer);
	$('.stop').hide();
	$('.reset').hide();
});

$('.start').on('click', function() {
	$('.start').hide();
	$('.add').hide();
	$('.subtract').hide();
	$('.stop').show();
	$('.reset').show();
});

$('.stop').on('click', function () {
	$('.stop').text('Start');
});

$('.add').on('click', function() {
	timer++;
	$('.timer').html(timer);
});

$('.subtract').on('click', function() {
	timer--;
	$('.timer').html(timer);
});