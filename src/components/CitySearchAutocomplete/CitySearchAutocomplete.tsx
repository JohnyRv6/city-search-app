/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions }  from "@mui/material/Autocomplete";
import useCities from "../../Hooks/useCities";
import useSearchNearCities from "../../Hooks/useSearchNearCities";
import { isCity } from "../../Interfaces/cityInterface";
import "./CitySearchAutocomplete.css";
import NearCity from "../NearCity/NearCity";
import { useAppDispatch } from "../../Store/store";
import { selectCity } from "../../Store/features/selectedCitySlice";

export default function CitySearchAutocomplete() {
  const [value, setValue] = useState<isCity | null>(null);
  const [inputValue, setInputValue] = useState("1");

  const dispatch = useAppDispatch();
  const { cities } = useCities();
  const { nearCities } = useSearchNearCities();

  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    limit: 500,
  });

  const setSelectedCity = useCallback(
    () => {
        dispatch(selectCity(value));
    },
    [dispatch, value],
  )

  useEffect(() => {
    setSelectedCity();
  }, [value, setSelectedCity]);

  return (
    <div id="auto-complete-wrapper">
      <Autocomplete
        value={value}
        onChange={(_, newValue: isCity | null) => setValue(newValue)}
        filterOptions={filterOptions}
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
