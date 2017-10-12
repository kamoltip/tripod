export default {
getLocation: function(cb) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const coords = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
            accry: position.coords.accuracy
            }
          cb(coords);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
}
