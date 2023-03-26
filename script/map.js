let map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.4500000,
            lng: 34.9833300
        },
        zoom: 11
    });

    searchName.addListener('places_changed', function () {
        places.forEach(function (p) {
            // If no data then just return (do nothing)
            if (!p.geometry) {
                return;
            }
        });
    });
}