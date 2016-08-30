$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', function(ipAddress) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + ipAddress.lat + '&lon=' + ipAddress.lon + '&appid=3695e5e886e4a1b016cf201000ec807e', function(forecast) {
      var celsius = forecast.main.temp - 273.15;
      var fahrenheit = celsius * 1.8 + 32;
      var backgroundPic = forecast.weather[0].icon.substring(0, 2);

      var $body = $('body');
      if (backgroundPic === '01' || backgroundPic === '02' || backgroundPic === '03') {
        $body.css('background-image', 'url("images/clear.jpg")');
      } else if (backgroundPic === '04') {
        $body.css('background-image', 'url("images/broken.jpg")');
      } else if (backgroundPic === '09') {
        $body.css('background-image', 'url("images/drizzle.jpg")');
      } else if (backgroundPic === '10') {
        $body.css('background-image', 'url("images/rain.jpg")');
      } else if (backgroundPic === '11') {
        $body.css('background-image', 'url("images/thunder.jpg")');
      } else if (backgroundPic === '13') {
        $body.css('background-image', 'url("images/snow.jpg")');
      } else if (backgroundPic === '50') {
        $body.css('background-image', 'url("images/fog.jpg")');
      } else {
        $body.css('background-image', 'url("images/def.jpg")');
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