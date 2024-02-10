import { useNavigate } from "react-router-dom";

import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";
import Message from "./Message";

function CityList() {
  const { cities, isLoading } = useCities();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

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
