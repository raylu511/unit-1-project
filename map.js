mapboxgl.accessToken = 'pk.eyJ1IjoicmF5bHU1MTEiLCJhIjoiY2t1d3ViNGw3Nm1kMDJxcTZrZGh0cmtxNiJ9.gX4hSO_N0v2CZ5ewfGLnZg';

// Create Map
const map = new mapboxgl.Map({
container: 'map',                                   // Renders on #map
style: 'mapbox://styles/mapbox/light-v10',          // Style of Map
center: [ -73.98562544 , 40.7006179],               // Coordinates [longitude,latitude]
zoom: 12                                            // Starting zoom level                     
});


