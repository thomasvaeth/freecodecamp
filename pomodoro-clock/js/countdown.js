$(document).ready(function() {
  $('.task').html(taskTimer + clock);
  $('.break').html('0' + breakTimer + clock);
});

var taskTimer = 25;
var breakTimer = 5;
var clock = ':00';

$('.add-task').on('click', function() {
  taskTimer++;
  if (taskTimer > 0) $('.set-task, .subtract-task').removeAttr('disabled');
  if (taskTimer < 10) {
    $('.task').html('0' + taskTimer + clock)
  } else {
    $('.task').html(taskTimer + clock);
  }
});

$('.subtract-task').on('click', function() {
  taskTimer--;
  if (taskTimer === 0) $('.set-task, .subtract-task').attr('disabled', 'disabled');
  if (taskTimer < 10) {
    $('.task').html('0' + taskTimer + clock)
  } else {
    $('.task').html(taskTimer + clock);
  }
});

$('.set-task').on('click', function() {
  $('.task, .set-task, .add-task, .subtract-task').hide();
  $('.break, .set-break, .add-break, .subtract-break').show();
});

$('.add-break').on('click', function() {
  breakTimer++;
  if (breakTimer > 0) $('.set-break, .subtract-break').removeAttr('disabled');
  if (breakTimer < 10) {
    $('.break').html('0' + breakTimer + clock)
  } else {
    $('.break').html(breakTimer + clock);
  }
});

$('.subtract-break').on('click', function() {
  breakTimer--;
  if (breakTimer === 0) $('.set-break, .subtract-break').attr('disabled', 'disabled')
  if (breakTimer < 10) {
    $('.break').html('0' + breakTimer + clock)
  } else {
    $('.break').html(breakTimer + clock);
  }
});

$('.set-break').on('click', function() {
  $('.break, .set-break, .add-break, .subtract-break').hide();
  $('.start-task, .task').show();
});

var minutesLeft;
var secondsLeft = 0;
var timeSetup;

function sharedClock() { 
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
  if (minutesLeft <= 1 && secondsLeft === 0 || minutesLeft < 1) $('.clock, .information').css('color', 'red');
}

function taskClock() {
  $('.clock, .information').css('color', 'white');
  $('.information').text('Left in Task');
  $('.information').show();
  sharedClock();
  if (secondsLeft < 0) {
    if (minutesLeft === 0 && secondsLeft < 0) {
      taskTimer = 0;
      clearInterval(timeSetup);
      $('.clock').html('00:00');
      $('.stop, .information').hide();
      $('.start-break').show();
    } else {
      minutesLeft--;
      secondsLeft = 60;
      taskClock();
    }
  }
}

function breakClock() {
  $('.clock, .information').css('color', 'white');
  $('.information').text('Left in Break');
  $('.information').show();
  sharedClock();
  if (secondsLeft < 0) {
    if (minutesLeft === 0 && secondsLeft < 0) {
      taskTimer = 0;
      clearInterval(timeSetup);
      $('.clock').html('00:00');
      $('.information').hide();
      $('.stop').text('Reset');
    } else {
      minutesLeft--;
      secondsLeft = 60;
      breakClock();
    }
  }
}

$('.start-task').on('click', function() {
  $('.task, .start-task, .subtract-break').hide();
  $('.clock, .stop').show();
  timeSetup = setInterval( function() {taskClock()}, 1000);
  minutesLeft = taskTimer;
  taskClock();
});

$('.start-break').on('click', function() {
  $('.task, .start-break, .subtract-break').hide();
  $('.clock, .stop').show();
  timeSetup = setInterval( function() {breakClock()}, 1000);
  minutesLeft = breakTimer;
  breakClock();
});

$('.stop').on('click', function() {
  $('.stop, .clock, .information').hide();
  $('.stop').text('Stop');
  $('.task, .set-task, .add-task, .subtract-task').show();
  clearInterval(timeSetup);
  taskTimer = 25;
  $('.task').html(taskTimer + clock)
  breakTimer = 5;
  $('.break').html('0' + breakTimer + clock);
  minutesLeft = taskTimer;
  secondsLeft = 0;
  $('.clock').html('');
});