import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";



function App() {
  const [cameraData, setCameraData] = useState([]);


  useEffect(() => {
  fetch("https://data.calgary.ca/resource/k7p9-kppz.geojson")
    .then((res) => res.json())
    .then((data) => {
      setCameraData(data.features);
    })
    .catch((err) => console.error("Error fetching camera data:", err));
}, []);

  return (
    
    
    <MapContainer
  center={[51.0447, -114.0719]} // Calgary coordinates
  zoom={13}
  style={{ height: "100vh", width: "100%" }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {cameraData.map((feature, idx) => {
  const [lng, lat] = feature.geometry.coordinates;
  const label = feature.properties.location;

  return (
    <Marker key={idx} position={[lat, lng]}>
      <Popup>{label}</Popup>
    </Marker>
  );
})}
</MapContainer>
  );
}

export default App;
