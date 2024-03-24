import cn from "classnames";
import styles from "./styles.module.scss";
import BtnClose from "../../shared/ui/btn-close/index";
import { closePopup } from "../../shared/utils/utils";
import { useMediaQuery } from "../../shared/hooks/media-query";

export default function Portal({ onClick, children, isOpen }) {
  const mediaQuery = useMediaQuery("(max-width: 615px)");

  return (
    <section
      className={cn(styles.portal, {
        [styles.portal_active]: isOpen,
      })}
      onClick={(e) => closePopup(e, onClick)}
    >
      <div
        className={cn(styles.portal__container, {
          [styles.portal__container_active]: isOpen,
        })}
      >
        <BtnClose
          width={mediaQuery ? 20 : 30}
          height={mediaQuery ? 20 : 30}
          onClick={onClick}
          className={styles["portal__btn-close"]}
        />
        {children}
      </div>
    </section>
  );
}
