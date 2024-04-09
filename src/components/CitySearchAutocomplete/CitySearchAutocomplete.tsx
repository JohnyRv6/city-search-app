/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useCities from "../../Hooks/useCities";
import useSearchNearCities from "../../Hooks/useSearchNearCities";
import { isCity } from "../../Interfaces/cityInterface";
import "./CitySearchAutocomplete.css";
import NearCity from "../NearCity/NearCity";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { selectCity } from "../../Store/features/selectedCitySlice";

export default function CitySearchAutocomplete() {
  const [inputValue, setInputValue] = useState("");

  const selectedCity = useAppSelector((state) => state.selectedCity.city);
  const dispatch = useAppDispatch();
  const { cities } = useCities();
  const { nearCities } = useSearchNearCities();

  const filterOptions = createFilterOptions({
    matchFrom: "any",
    limit: 500,
  });

  return (
    <div role="container" id="auto-complete-wrapper">
      <Autocomplete
        role="autocomplete"
        aria-label="Input where you can select a city of the list"
        value={selectedCity}
        onChange={(_, newValue: isCity | null) => dispatch(selectCity(newValue))}
        filterOptions={filterOptions}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={cities}
        getOptionLabel={(option) => option.name}
        sx={{ width: "50%" }}
        renderOption={(props, option) => (
          <li {...props} key={`${option.name}${option.lat}`}>
            {option.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="Find a city" />}
      />
      {nearCities && (
        <div id='nearby-cities-container'>
          <h3 role="subtitle">Nearby cities</h3>
          <ul role="list" aria-label="Items list of the three nearest cities from you selection">
            {nearCities?.map((city) => (
              <NearCity key={`${city?.lat}${city?.name}`} city={city} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
