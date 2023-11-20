import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
return(
<MapContainer center={[31.5204, 74.3587]} zoom={12}>
  <TileLayer
  attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  />
</MapContainer>
);
}

export default App;
