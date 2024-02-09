import { useNavigate } from "react-router-dom";

import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";

function CityList() {
  const { cities, isLoading } = useCities();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  function handleClick() {
    navigate("/app");
  }

  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={`${city.id}${Math.random()}`} />
        ))}
      </ul>
      <Button onClick={handleClick} type="back">
        Close
      </Button>
    </>
  );
}

export default CityList;
