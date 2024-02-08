import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import User from "./User";
import Message from "./Message";
import { useState } from "react";
import CityList from "./CityList";
import CountryList from "./CountryList";

function Sidebar() {
  const [mobileCitiesVisible, setMobileCitiesVisible] = useState(false);
  const [mobileCountriesVisible, setMobileCountriesVisible] = useState(false);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoAndUser}>
        <Logo />
        <User />
      </div>
      <Message message="Add a city by clicking on a city on the map" />
      <AppNav
        setMobileCitiesVisible={setMobileCitiesVisible}
        setMobileCountriesVisible={setMobileCountriesVisible}
      />

      {mobileCitiesVisible && <CityList />}
      {mobileCountriesVisible && <CountryList />}

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          {" "}
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
