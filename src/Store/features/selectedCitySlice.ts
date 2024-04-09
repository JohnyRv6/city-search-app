import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isCity } from "../../Interfaces/cityInterface";

interface selectedCityState {
  city: isCity;
}

const initialState: selectedCityState = {
  city: {
    country: "",
    name: "",
    lat: "",
    lng: "",
  },
};

export const SelectedCitySlice = createSlice({
  name: "selectedCity",
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<isCity>) => {
      state.city = action.payload;
    },
  },
});

export default SelectedCitySlice.reducer;
export const { selectCity } = SelectedCitySlice.actions;
