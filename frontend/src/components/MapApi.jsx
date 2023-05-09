import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";

function Map({ position }) {
  const [error, setError] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(position, 18);
    }
  }, [position]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => {
        // setPosition([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        setError(err.message);
      }
    );
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: "400px" }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Your current position</Popup>
      </Marker>
    </MapContainer>
  );
}

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Map;
