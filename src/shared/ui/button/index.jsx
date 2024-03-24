import cn from "classnames";
import Arrow from "../icons/Arrow";
import styles from "./styles.module.scss";

export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn(
        styles.btn,
        { [styles.btn_white]: !props.transparent },
        props.classBtn,
        "raleway",
        "text_type_bold"
      )}
      type={props.type}
    >
      <p
        className={cn(
          styles.btn__text,
          {
            [styles.btn__text_blue]: !props.transparent,
          },
          props.classText
        )}
      >
        {props.title}
      </p>
      <div
        className={cn(
          styles["btn__box-arrow"],
          {
            [styles["btn__box-arrow_blue"]]: !props.transparent,
          },
          props.classBoxArrow
        )}
      >
        <Arrow
          width={props.widthArrow}
          height={props.heightArrow}
          color={props.transparent ? "#fff" : "#0B3461"}
          strokeWidth={3}
          className={cn(styles["btn__arrow-position"], props.classArrow)}
        />
      </div>
    </button>
  );
}
