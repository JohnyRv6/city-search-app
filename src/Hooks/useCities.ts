import { useState } from "react";
import { citiesList } from "../assets/cities";
import { isCity } from "../Interfaces/cityInterface";

export default function useCities() {
  const [cities, setCities] = useState<Array<isCity>>(citiesList);

  return {
    cities,
    setCities,
  };
}
