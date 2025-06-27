import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


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
    <div>
    <p style={{ padding: "10px" }}>
    Cameras loaded: {cameraData.length}
    </p>

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
  const location_label = feature.properties.camera_location;
  const camera_url = feature.properties.camera_url.url;

  return (
    <Marker key={idx} position={[lat, lng]}>
      <Popup>
        <strong>{location_label}</strong>

        <br />
        <a href={camera_url} target='_blank'><img src={camera_url} alt="Live view" width="200" /></a>
        </Popup>
    </Marker>
  );
})}
</MapContainer>
</div>
  );
}

export default App;
