import styles from "./styles.module.scss";

export default function Burger() {
  return (
    <label className={styles.container}>
      <input type="checkbox" className={styles.container__input}/>
      <div className={styles.container__checkmark}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
  );
}
