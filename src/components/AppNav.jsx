import styles from "./AppNav.module.css";
import Button from "./Button";

function AppNav({ setMobileCitiesVisible, setMobileCountriesVisible }) {
  const handleClickCities = function () {
    setMobileCitiesVisible(true);
    setMobileCountriesVisible(false);
  };

  const handleClickCountries = function () {
    setMobileCitiesVisible(false);
    setMobileCountriesVisible(true);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li onClick={handleClickCities}>
          <Button type="primary">View Cities</Button>
        </li>
        <li onClick={handleClickCountries}>
          <Button type="primary">View Countries</Button>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
