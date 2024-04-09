import { isCity } from "../../Interfaces/cityInterface";

export default function NearCity(props: { city: isCity | null}) {
  return (
    <li className="nearby-city-element">{props?.city?.name}</li>
  )
}
