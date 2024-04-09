import { useEffect, useState } from "react";
import { LatLng } from "../Interfaces/latLngInterface";

export default function useCurrentPosition() {
  const [currentPosition, setCurrentPosition] = useState<LatLng>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return {
    currentPosition,
  };
}
