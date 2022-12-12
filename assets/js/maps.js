function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
var lables = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 52.380402286910694, lng: 4.640469758130639},
    {lat: 52.380369855557106, lng: 4.631392728650717},
    {lat: 52.38179733511862, lng: 4.64019900270949}
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        postion: location,
        label: labels[i % labels.length]
    })
})

new MarkerClusterer({ markers, map });
}

