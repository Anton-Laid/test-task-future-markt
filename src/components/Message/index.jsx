import cn from "classnames";
import { useMediaQuery } from "../../shared/hooks/media-query";
import Logo from "../../shared/ui/icons/Logo";
import styles from "./styles.module.scss";

export default function Message() {
  const mediaQuery = useMediaQuery("(max-width: 550px)");

  return (
    <article className={cn(styles.message, "raleway", "text_type_bold")}>
      <h4 className={styles.message__title}>Спасибо за заявку</h4>
      <p className={styles.message__discription}>
        Я обязательно свяжусь с вами в ближайшее время.
      </p>
      <Logo
        className={styles["message__logo_position"]}
        width={mediaQuery ? 95 : 170}
        height={mediaQuery ? 20 : 34}
      />
    </article>
  );
}
