"use client";

import {
  APIProvider,
  Map,
//   InfoWindow,
  Marker
} from "@vis.gl/react-google-maps";
import './GoogleMapsContainer.css'

const googleMapsAPIKey = import.meta.env.VITE_MAPS_API_KEY;

export default function GoogleMapsContainer() {
  const position = { lat: 30.88296, lng: -87.77305 };

  return (
    <APIProvider apiKey={googleMapsAPIKey}>
      <section role="map wrapper" id="map-container">
        <Map zoom={10} center={position}>
            <Marker position={position}/>
        </Map>
      </section>
    </APIProvider>
  );
}
