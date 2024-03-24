import cn from "classnames";
import styles from "./styles.module.scss";

export default function Info({ number, techniques, title }) {
  return (
    <article className={styles.info}>
      <p
        className={cn(styles.info__number, "montserrat", "text_type_bold")}
      >{`${number}${techniques ? "+" : "%"}`}</p>
      <p className={cn(styles.info__title, "raleway", "text_type_regular")}>
        {title}
      </p>
    </article>
  );
}
