import CitySearchAutocomplete from "../CitySearchAutocomplete/CitySearchAutocomplete";
import "./CitySearchContainer.css";

export default function CitySearchContainer() {
  return (
    <section role="section" aria-label="container of city search input" id="city-search-container">
      <CitySearchAutocomplete />
    </section>
  );
}
