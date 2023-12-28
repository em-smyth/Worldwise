import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  // const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const [mapPosition, setMapPosition] = useState([40, 0]);

  // eslint-disable-next-line no-unused-vars
  const lat = searchParams.get("lat");
  // eslint-disable-next-line no-unused-vars
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
