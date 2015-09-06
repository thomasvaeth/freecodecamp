var taskTimer = 25;
var breakTimer = 5;
var clock = ':00';

$(document).ready(function() {
	$('.task').html(taskTimer + clock);
	$('.break').html(breakTimer + clock);
	$('.break, .stop, .reset, .set-break, .add-break, .subtract-break').hide();
});

$('.set-task').on('click', function() {
	$('.task, .set-task, .add-task, .subtract-task').hide();
	$('.break, .set-break, .add-break, .subtract-break').show();
});

$('.stop').on('click', function () {
	$('.stop').text('Start');
});

$('.add-task').on('click', function() {
	taskTimer++;
	if (taskTimer > 0) {
		$('.set-task, .subtract-task').removeAttr('disabled');
	}
	$('.task').html(taskTimer + clock);
});

$('.subtract-task').on('click', function() {
	taskTimer--;
	if (taskTimer === 0) {
		$('.set-task, .subtract-task').attr('disabled', 'disabled');
	}
	$('.task').html(taskTimer + clock);
});

$('.add-break').on('click', function() {
	breakTimer++;
	if (breakTimer > 0) {
		$('.set-break, .subtract-break').removeAttr('disabled');
	}
	$('.break').html(breakTimer + clock);
});

$('.subtract-break').on('click', function() {
	breakTimer--;
	if (breakTimer === 0) {
		$('.set-break, .subtract-break').attr('disabled', 'disabled')
	}
	$('.break').html(breakTimer + clock);
});