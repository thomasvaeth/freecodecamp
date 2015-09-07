$(document).ready(function() {
	$('.task').html(taskTimer + clock);
	$('.break').html(breakTimer + clock);
	$('.break, .start, .stop, .reset, .set-break, .add-break, .subtract-break').hide();
});

var taskTimer = 25;
var breakTimer = 5;
var clock = ':00';

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
	$('.start, .clock').show();
});

var minutesLeft = taskTimer;
var secondsLeft = 0;
var timeSetup;

function countdownClock() {
  secondsLeft--;
  if (minutesLeft < 10 && secondsLeft < 10) {
    $('.clock').html('0' + minutesLeft + ':0' + secondsLeft);
  } else if (minutesLeft < 10) {
    $('.clock').html('0' + minutesLeft + ':' + secondsLeft);
  } else if (secondsLeft < 10) {
    $('.clock').html(minutesLeft + ':0' + secondsLeft);
  } else {
    $('.clock').html(minutesLeft + ':' + secondsLeft);
  }
  if (secondsLeft < 0) {
    if (minutesLeft === 0 && secondsLeft < 0) {
      clearInterval(timeSetup);
      $('.clock').html('00:00');
    } else {
      minutesLeft--;
      secondsLeft = 60;
      countdownClock();
    }
  }
}

$('.start').on('click', function() {
	minutesLeft = taskTimer;
	secondsLeft = 0;
	timeSetup;
	$('.start').hide();
	$('.stop').show();
	timeSetup = setInterval( function() {countdownClock()}, 1000);
	countdownClock();
});

$('.stop').on('click', function() {
  $('.stop').hide();
  $('.task').html(taskTimer + clock);
  $('.break').html(breakTimer + clock);
  $('.task, .set-task, .add-task, .subtract-task').show();
  $('.clock').hide();
  clearInterval(timeSetup);
  taskTimer;
  breakTimer;
  minutesLeft = taskTimer;
  secondsLeft = 0;
  $('.clock').html('');
});