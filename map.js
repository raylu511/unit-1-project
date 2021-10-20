//API Token
mapboxgl.accessToken = 'pk.eyJ1IjoicmF5bHU1MTEiLCJhIjoiY2t1d3ViNGw3Nm1kMDJxcTZrZGh0cmtxNiJ9.gX4hSO_N0v2CZ5ewfGLnZg';

// // Get user's current position
// // Takes in 2 callbacks and optional parameter
// // First call back for success, second for error
// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});


// // Successfully grabbed location
// function successLocation(position) {
//     console.log(position);
//     ([position.coords.longitude, position.coords.latitude]);
// }

// //Unsuccessfully grabbed location
// function errorLocation(){
//     createMap([-73.98226828502561, 40.6284116173809]);
    
// }

// //Creates map
// function createMap(location) {
    const map = new mapboxgl.Map({
    container: 'map',                                   // Renders on #map
    style: 'mapbox://styles/mapbox/streets-v11',        // Style of Map
    center: -73.98226828502561, 40.6284116173809,                                   // Coordinates
    zoom: 12.15                                            // Starting zoom level                     
    });
    
    //Adds zoom controls
    const control = new mapboxgl.NavigationControl();
    map.addControl(control);
    
    
    map.on('load', () => {
    
        //Loads paw image 
        map.loadImage(
        'pawhouse.png',
        (error, image) => {
            
            // Adds paw image to map.
            map.addImage('paw', image);
             
            // Adds adoption clinics 
            map.addSource('sourceData', {
            type: 'geojson',
            data: clinics
            });
             
            // Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'sourceData', // reference the data source
                'layout': {
                'icon-image': 'paw', // reference the image
                'icon-size': 0.06,
                'icon-allow-overlap': true
                }
                });
            }
        );
    });
    
    // Displays popup when marker is clicked
    map.on('click','sourceData', (clinic)=>{
    
    //Gets the marker coords
    const coordinates = clinic.features[0].geometry.coordinates.slice();
    console.log(coordinates);
    //Gets the marker description
    const description = clinic.features[0].properties.description;
    
    while (Math.abs(clinic.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += clinic.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);    
        
    });


 
// Some random data
const clinics = {
  "type": "FeatureCollection",
  "features": [
      {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
     -73.99207625490061,
     40.68598375083849
    ]
  },
  "properties": {
    "description": '<div>hi</div>',
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
clinics.features.forEach(function (clinics, i) {
  clinics.properties.id = i;
});

// -73.98226828502561, 40.6284116173809