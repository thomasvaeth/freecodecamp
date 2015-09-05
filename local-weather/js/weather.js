$(document).ready(function() {
  $('.btn-celsius').hide();
  $('.btn-fahrenheit').hide();
})

$.getJSON('http://ip-api.com/json', function(ipAddress) {

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + ipAddress.lat + '&lon=' + ipAddress.lon, function(forecast) {
    var kelvin = forecast.main.temp;
    var celsius = kelvin - 273.15
    var fahrenheit = celsius * 1.8 + 32

    $(document).ready(function() {
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