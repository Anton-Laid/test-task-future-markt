import { useState } from "react";
import cn from "classnames";
import { useMediaQuery } from "../../shared/hooks/media-query";
import Input from "../../shared/ui/forms/input";
import Button from "../../shared/ui/button";
import styles from "./styles.module.scss";
import Checkbox from "../../shared/ui/checkbox";

export default function Application({ onClick }) {
  const mediaQuery = useMediaQuery("(max-width: 615px)");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((state) => !state);
  };
  const btnDisabled = isValidName && isValidPhone && isChecked;

  return (
    <form
      className={cn(styles.application, "montserrat")}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className={styles.application__title}>
        Закажите обратный звонок
      </label>
      <Input
        name="name"
        className={styles.application__input}
        placeholder="ИМЯ"
        maxLength={8}
        minLength={4}
        type="text"
        getValid={setIsValidName}
      />
      <Input
        name="phone"
        className={styles.application__input}
        placeholder="ТЕЛЕФОН"
        type="number"
        marginBottom={mediaQuery ? 30 : 110}
        getValid={setIsValidPhone}
      />
      <Checkbox
        onChange={handleCheckboxChange}
        width={mediaQuery ? 15 : 30}
        height={mediaQuery ? 15 : 30}
        text="Согласен на сохранение и обработку персональных данных"
      />
      <Button
        onClick={onClick}
        classBtn={
          mediaQuery ? styles.application__btn_min : styles.application__btn_max
        }
        title="Заказать обратный звонок"
        widthBtn={mediaQuery ? 251 : 380}
        heightBtn={mediaQuery ? 47 : 71}
        classText={
          mediaQuery
            ? styles["application__btn-text_min"]
            : styles["application__btn-text_max"]
        }
        classBoxArrow={
          mediaQuery
            ? styles["application__btn-box_min"]
            : styles["application__btn-box_max"]
        }
        widthArrow={mediaQuery ? 13 : 20}
        heightArrow={mediaQuery ? 13 : 20}
        classArrow={
          mediaQuery
            ? styles["application__btn-arrow_min"]
            : styles["application__btn-arrow_max"]
        }
        transparent
        disabled={!btnDisabled}
      />
    </form>
  );
}
