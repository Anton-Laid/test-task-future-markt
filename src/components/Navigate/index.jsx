import { dateNavigate } from "../../assets/constants/constants";
import styles from "./styles.module.scss";

export default function Navigate() {
  return (
    <nav>
      <ul className={styles.nav}>
        {dateNavigate.map((i) => (
          <li className={styles.nav__text} key={i.name}>
            {i.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
