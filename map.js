mapboxgl.accessToken = 'pk.eyJ1IjoicmF5bHU1MTEiLCJhIjoiY2t1d3ViNGw3Nm1kMDJxcTZrZGh0cmtxNiJ9.gX4hSO_N0v2CZ5ewfGLnZg';

// Get user's current position
// Takes in 2 callbacks and optional parameter
// First call back for success, second for error
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});



// Successfully grabbed location
function successLocation(position) {
    createMap([position.coords.longitude, position.coords.latitude]);
}

//Unsuccessfully grabbed location
function errorLocation(){
    console.log('Yo')
}

//Creates map with grabbed location
function createMap(location) {
    const map = new mapboxgl.Map({
    container: 'map',                                   // Renders on #map
    style: 'mapbox://styles/mapbox/streets-v11',        // Style of Map
    center: location,                                   // Coordinates
    zoom: 12                                            // Starting zoom level                     
});
}

