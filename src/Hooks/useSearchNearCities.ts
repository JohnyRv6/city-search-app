import { useCallback, useEffect, useState } from "react";
import { isCity } from "../Interfaces/cityInterface";
import useCities from "./useCities";
import { getKmDistance } from "../Helpers/getDistanceBetweenMarkers";

export default function useSearchNearCities() {
  const [selectedCity, setSelectedCity] = useState<isCity | null>();
  const [nearCities, setNearCities] = useState<Array<isCity | null> | null>(null);

  const { cities } = useCities();

  const filterNearCities = useCallback(
    ({ lat, lng }: isCity) => {
      const nearCities = cities
        ?.map((city) => {
          const distance = getKmDistance(
            Number(lat),
            Number(lng),
            Number(city.lat),
            Number(city.lng)
          );
          return {
            ...city,
            distance,
          };
        })
        .sort((a, b) => a.distance - b.distance)
        .filter(({ distance }) => distance !== 0)
        .slice(0, 3);

      setNearCities(nearCities);
    },
    [cities]
  );

  useEffect(() => {
    if (selectedCity) {
      filterNearCities(selectedCity);
    } else {
      setNearCities(null);
    }
  }, [selectedCity, filterNearCities]);

  return {
    nearCities,
    setNearCities,
    setSelectedCity,
  };
}
