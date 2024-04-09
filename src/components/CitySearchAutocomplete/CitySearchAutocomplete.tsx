import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useCities from "../../Hooks/useCities";
import useSearchNearCities from "../../Hooks/useSearchNearCities";
import { isCity } from "../../Interfaces/cityInterface";
import "./CitySearchAutocomplete.css";
import NearCity from "../NearCity/NearCity";

export default function CitySearchAutocomplete() {
  const [value, setValue] = useState<isCity | null>(null);
  const [inputValue, setInputValue] = useState("1");

  const { cities } = useCities();
  const { nearCities, setSelectedCity } = useSearchNearCities();

  useEffect(() => {
    console.log(value);
    setSelectedCity(value);
  }, [value, setSelectedCity]);

  return (
    <div id="auto-complete-wrapper">
      <Autocomplete
        value={value}
        onChange={(_, newValue: isCity | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={cities}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderOption={(props, option) => (
          <li {...props} key={`${option.name}${option.lat}`}>
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            key={`${params.inputProps.value}${params.inputProps.id}`}
            label="Find a city"
          />
        )}
      />
      <div>
        {nearCities && <h3>Nearby cities</h3>}
        {nearCities?.map((city) => (
          <NearCity key={`${city?.lat}${city?.name}`} city={city} />
        ))}
      </div>
    </div>
  );
}
