/* eslint-disable */
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for Leaflet markers not appearing in React
// delete L.Icon.Default.prototype.getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

function Map() {
  const [position, setPosition] = useState([43.7, -79.41]); // initial position: Toronto
  const [error, setError] = useState(null);
  const [markerPosition, setMarkerPosition] = useState([43.7, -79.41]);

  // Get the user's current position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // setPosition([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MapContainer center={position} zoom={16} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={position}>
        <Popup>Your current position</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
