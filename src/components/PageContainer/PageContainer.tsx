import CitySearchContainer from "../CitySearchContainer/CitySearchContainer";
import GoogleMapsContainer from "../GoogleMapsContainer/GoogleMapsContainer";
import "./PageContainer.css";

export default function PageContainer() {
  return (
    <>
      <h1 id="page-title">Find a city app</h1>
      <main>
        <CitySearchContainer />
        <GoogleMapsContainer />
      </main>
    </>
  );
}
