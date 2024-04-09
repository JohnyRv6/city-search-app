import { isCity } from "../../Interfaces/cityInterface";
import { selectCity } from "../../Store/features/selectedCitySlice";
import { useAppDispatch } from "../../Store/store";
import "./NearCity.css";

export default function NearCity(props: { city: isCity }) {
  const dispatch = useAppDispatch();

  const setSelectedCity = () => {
    dispatch(selectCity(props?.city));
  };

  return (
    <li className="nearby-city-element" onClick={() => setSelectedCity()}>
      {props?.city?.name}
    </li>
  );
}
