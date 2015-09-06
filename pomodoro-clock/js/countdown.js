var taskTimer = 25;
var breakTimer = 5;
var clock = ':00';

$(document).ready(function() {
	$('.task').html(taskTimer + clock);
	$('.break').html(breakTimer + clock);
	$('.break, .start, .stop, .reset, .set-break, .add-break, .subtract-break').hide();
});

$('.set-task').on('click', function() {
	$('.task, .set-task, .add-task, .subtract-task').hide();
	$('.break, .set-break, .add-break, .subtract-break').show();
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

$('.set-break').on('click', function() {
	$('.break, .set-break, .add-break, .subtract-break').hide();
	$('.start, .task').show();
});

$('.start').on('click', function() {
	$('.start').hide();
	$('.stop').show();
});

$('.stop').on('click', function() {
	$('.stop').hide();
	taskTimer = 25;
	breakTimer = 5;
	$('.task').html(taskTimer + clock);
	$('.break').html(breakTimer + clock);
	$('.task, .set-task, .add-task, .subtract-task').show();
});