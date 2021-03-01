const $city = $('#city');
const $temp = $('#temp');
const $realFeel = $('#realFeel');
const $weather = $('#weather');
const $input = $('input[type="text"]');

$('form').on('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const term = $input.val();
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=be51c626876e3c3b1acf2a78e382d649&units=imperial`).then(function (data) {
        console.log('Weather', data);
        $city.text(data.name);
        $temp.text(data.main.temp + '°F');
        $realFeel.text(data.main.feels_like);
        $weather.text(data.weather[0].description);
    }, function(error) {
        console.log('error', error);
    });
}