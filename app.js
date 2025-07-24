document.getElementById('getLocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            document.getElementById('latitude').textContent = latitude;
            document.getElementById('longitude').textContent = longitude;
            document.getElementById('accuracy').textContent = accuracy;
        }, function(error) {
            alert("Error occurred: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
