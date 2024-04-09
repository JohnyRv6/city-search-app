"use client";

import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import "./GoogleMapsContainer.css";
import { useAppSelector } from "../../Store/store";
import useCurrentPosition from "../../Hooks/useCurrentPosition";
import { LatLng } from "../../Interfaces/latLngInterface";

const googleMapsAPIKey = import.meta.env.VITE_MAPS_API_KEY;

export default function GoogleMapsContainer() {
  const [position, setPosition] = useState<LatLng | null>();
  const selectedCity = useAppSelector((state) => state.selectedCity.city);

  const { currentPosition } = useCurrentPosition();

  useEffect(() => {
    if (selectedCity) {
      const { lat, lng } = selectedCity;
      setPosition({ lat: Number(lat), lng: Number(lng) });
    } else {
      setPosition(currentPosition);
    }
  }, [selectedCity, currentPosition]);

  useEffect(() => {
    setPosition(currentPosition);
  }, [currentPosition]);
  

  return (
    <APIProvider apiKey={googleMapsAPIKey}>
      <section role="map wrapper" aria-label="Map Section with location and marker from google maps" id="map-container">
        {position && (
          <Map zoom={10} center={position}>
            <Marker position={position} />
          </Map>
        )}
      </section>
    </APIProvider>
  );
}
