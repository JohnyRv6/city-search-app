import CitySearchContainer from "../CitySearchContainer/CitySearchContainer";
import GoogleMapsContainer from "../GoogleMapsContainer/GoogleMapsContainer";
import "./PageContainer.css";

export default function PageContainer() {
  return (
    <>
      <h1 role="title" id="page-title">Find a city app</h1>
      <main role="main" aria-label="Main container of the application">
        <CitySearchContainer />
        <GoogleMapsContainer />
      </main>
    </>
  );
}
