//API Token
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
    createMap([-73.98226828502561, 40.6284116173809]);
    
}

//Creates map
function createMap(location) {
    const map = new mapboxgl.Map({
    container: 'map',                                   // Renders on #map
    style: 'mapbox://styles/mapbox/streets-v11',        // Style of Map
    center: location,                                   // Coordinates
    zoom: 10                                            // Starting zoom level                     
    });
    
    //Adds zoom controls
    const control = new mapboxgl.NavigationControl();
    map.addControl(control);
    map.on('load', () => {
        /* Add the data to your map as a layer */
        map.addLayer({
            id: 'locations',
            type: 'circle',
            /* Add a GeoJSON source containing place coordinates and information. */
            source: {
            type: 'geojson',
            data: stores
            }
        });
    });
}
 
// Some random data
const stores = {
  "type": "FeatureCollection",
  "features": [
      {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
     -73.96611862386548,
     40.69394241671732 
    ]
  },
  "properties": {
    "name":  "Monster Mutt Doggie Daycare and Boarding",
    "phoneFormatted": "(718) 858-9028",
    "phone": "7188589028",
    "address": "297 Warren St",
    "city": "Brooklyn",
    "country": "United States",
    "postalCode": "11201",
    "state": "N.Y.",
  }
},
      {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
     -73.99135875851401,
     40.69008519733471
    ]
  },
  "properties": {
    "name":  "Pet Smart",
    "phoneFormatted": "(718) 852-2519",
    "phone": "7188522519",
    "address": "238 Atlantic Ave",
    "city": "Brooklyn",
    "country": "United States",
    "postalCode": "11201",
    "state": "N.Y."
  }
}
    ]
};

/* Assign a unique ID to each store */
stores.features.forEach(function (store, i) {
  store.properties.id = i;
});

