import styles from "./card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Card = function ({ id, name, src, isActive, volume }) {
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <h3>
        {name.toUpperCase()} &rarr;
        <FontAwesomeIcon icon={faCoffee} />
      </h3>
    </div>
  );
};
