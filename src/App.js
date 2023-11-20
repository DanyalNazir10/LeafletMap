import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import markerImg from "../src/assets/images/marker.png";

function App() {
  const markers = [
    {
      geocode: [31.4805, 74.3239],
      popUp: "PopUp from model town",
    },
    {
      geocode: [31.4697, 74.2728],
      popUp: "PopUp from johar town",
    },
    {
      geocode: [31.5165, 74.3499],
      popUp: "PopUp from gulberg",
    },
  ];
  const customMrakerIcon = new Icon({
    iconUrl: markerImg,
    iconSize: [38, 38],
  });
  return (
    <MapContainer center={[31.5204, 74.3587]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customMrakerIcon} />
      ))}
    </MapContainer>
  );
}

export default App;
