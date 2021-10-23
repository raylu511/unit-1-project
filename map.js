

//Mapbox API Token
mapboxgl.accessToken = "pk.eyJ1IjoicmF5bHU1MTEiLCJhIjoiY2t1d3U1djZqNTRsYzMxdDQ2N2F6aG83dCJ9.HwDwFrCLlJS_aqIbkSeYOQ";

// Create Map
const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/raylu511/ckuzodknf10iv14qmhz14tvm1', 
      center: [-73.97639491735579, 40.664884375492456],
      zoom: 11.8
    });
    
map.on('click', (event) => {
// If the user clicked on one of your markers, get its information.
const features = map.queryRenderedFeatures(event.point, {
layers: ['nyc-animal-clinics'] // replace with your layer name
});
if (!features.length) {
return;
}
const feature = features[0];
const popup = new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.address}</p><p>${feature.properties.phone}</p>`
  )
  .addTo(map);
// Code from the next step will go here.
});

  //Adds zoom controls
    const control = new mapboxgl.NavigationControl();
    map.addControl(control);


