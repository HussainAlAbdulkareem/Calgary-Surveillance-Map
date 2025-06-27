import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';


function App() {
  return (
    <MapContainer
  center={[51.0447, -114.0719]} // Calgary coordinates
  zoom={13}
  style={{ height: "100vh", width: "100%" }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
  );
}

export default App;
