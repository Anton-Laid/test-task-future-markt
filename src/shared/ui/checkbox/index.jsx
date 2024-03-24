import styles from "./styles.module.scss";

export default function Checkbox({ text, height, width, onChange }) {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        onChange={onChange}
        className={styles.container__input}
      />
      <svg
        viewBox="0 0 60 60"
        height={height}
        width={width}
        className={styles.container__svg}
      >
        <path
          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
          pathLength="575.0541381835938"
          className={styles.container__path}
        ></path>
      </svg>
      {text}
    </label>
  );
}
