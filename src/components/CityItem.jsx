import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, positionLat, positionLng } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles[`cityItem--active`] : ""
        }`}
        to={`${id}?lat=${positionLat}&lng=${positionLng}`}
      >
        <div className={styles.nameAndEmoji}>
          <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
          <h3 className={styles.name}>{cityName}</h3>{" "}
        </div>
        <div className={styles.dateAndButton}>
          <time className={styles.date}>{formatDate(date)}</time>
          <button className={styles.deleteBtn} onClick={handleClick}>
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
