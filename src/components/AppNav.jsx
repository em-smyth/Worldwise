import styles from "./AppNav.module.css";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

function AppNav() {
  const navigate = useNavigate();

  const citiesActive = location.pathname.includes("/cities");

  const countriesActive = location.pathname.includes("/countries");

  const handleClickCities = function () {
    navigate("/app/cities");
  };

  const handleClickCountries = function () {
    navigate("/app/countries");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.buttons}>
        <Button
          onClick={handleClickCities}
          type={citiesActive ? "visited--active" : "visited"}
        >
          View Visited Cities
        </Button>

        <Button
          onClick={handleClickCountries}
          type={countriesActive ? "visited--active" : "visited"}
        >
          View Visited Countries
        </Button>
      </div>
    </nav>
  );
}

export default AppNav;
