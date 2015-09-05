$(document).ready(function() {
  $('.btn-celsius').hide();
  $('.btn-fahrenheit').hide();
});

$.getJSON('http://ip-api.com/json', function(ipAddress) {

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + ipAddress.lat + '&lon=' + ipAddress.lon, function(forecast) {
    var celsius = forecast.main.temp - 273.15;
    var fahrenheit = celsius * 1.8 + 32;
    var backgroundPic = forecast.weather[0].main.toLowerCase();

    $(document).ready(function() {
      if (backgroundPic === 'clouds') {
        $('body').css('background-image', 'url("images/clear.jpg")');
      } else if (backgroundPic === 'drizzle') {
        $('body').css('background-image', 'url("images/drizzle.jpg")');
      } else if (backgroundPic === 'rain') {
        $('body').css('background-image', 'url("images/rain.jpg")');
      } else if (backgroundPic === 'thunderstorm') {
        $('body').css('background-image', 'url("images/thunder.jpg")');
      } else if (backgroundPic === 'snow') {
        $('body').css('background-image', 'url("images/snow.jpg")');
      } else if (backgroundPic === 'atmosphere') {
        $('body').css('background-image', 'url("images/fog.jpg")');
      } else {
        $('body').css('background-image', 'url("images/def.jpg")');
      }
      $('.information').text('Hello ' + ipAddress.city + ' from Seattle.');
      $('.btn-check').on('click', function() {
        $('.btn-check').hide();
        $('.btn-celsius').show();
        $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
      });
      $('.btn-celsius').on('click', function() {
        $('.btn-celsius').hide();
        $('.btn-fahrenheit').show();
        $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + celsius.toFixed(0) + ' degrees Celsius.');
      });
      $('.btn-fahrenheit').on('click', function() {
        $('.btn-fahrenheit').hide();
        $('.btn-celsius').show();
        $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
      });
    });
  
  });
});