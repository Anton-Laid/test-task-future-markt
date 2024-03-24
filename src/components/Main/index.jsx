import { useEffect, useState } from "react";
import cn from "classnames";
import { useMediaQuery } from "../../shared/hooks/media-query";
import styles from "./styles.module.scss";
import Button from "../../shared/ui/button/index";
import Info from "../Info";
import img from "../../assets/image/mentor.png";
import { url } from "../../assets/constants/constants";
import { calculateDateNumber } from "../../shared/utils/utils";

export default function Main({ onClick }) {
  const [data, setData] = useState({});
  const mediaQuery = useMediaQuery("(max-width: 550px)");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className={cn(styles.main, "raleway")}>
      <h1 className={cn(styles.main__title, "text_type_bold")}>
        Создаю условия для вашего успеха
      </h1>
      <p className={cn(styles.main__description, "text_type_regular")}>
        Когда ваше время и энергия лучше сфокусированы, стремление к новым
        возможностям становится реальностью, ваш успех зависит от ваших действий
      </p>
      <div className={styles["main__container-btn"]}>
        <Button
          widthBtn={mediaQuery ? 126 : 380}
          heightBtn={mediaQuery ? 30 : 71}
          onClick={onClick}
          classBtn={mediaQuery ? styles.main__btn_min : styles.main__btn_max}
          classText={
            mediaQuery
              ? styles["main__btn-text_min"]
              : styles["main__btn-text_max"]
          }
          classBoxArrow={
            mediaQuery
              ? styles["main__btn-box_min"]
              : styles["main__btn-box_max"]
          }
          widthArrow={mediaQuery ? 7 : 20}
          heightArrow={mediaQuery ? 7 : 20}
          classArrow={
            mediaQuery
              ? styles["main__btn-arrow_min"]
              : styles["main__btn-arrow_max"]
          }
          title="Записаться на консультацию"
        />
        <Button
          onClick={onClick}
          classBtn={mediaQuery ? styles.main__btn_min : styles.main__btn_max}
          title="Бесплатная консультация"
          widthBtn={mediaQuery ? 126 : 380}
          heightBtn={mediaQuery ? 30 : 71}
          classText={
            mediaQuery
              ? styles["main__btn-text_min"]
              : styles["main__btn-text_max"]
          }
          classBoxArrow={
            mediaQuery
              ? styles["main__btn-box_min"]
              : styles["main__btn-box_max"]
          }
          widthArrow={mediaQuery ? 7 : 20}
          heightArrow={mediaQuery ? 7 : 20}
          classArrow={
            mediaQuery
              ? styles["main__btn-arrow_min"]
              : styles["main__btn-arrow_max"]
          }
          transparent
        />
      </div>

      <div className={styles["main__container-info"]}>
        <Info
          techniques
          title="техник для достижения целей"
          number={calculateDateNumber()}
        />
        <Info
          techniques={false}
          title="увеличение личной продуктивности"
          number={data.Valute ? Math.ceil(data.Valute.GBP.Value) : 0}
        />
      </div>
      {mediaQuery && (
        <img alt="mentor" className={styles.main__mentor} src={img} />
      )}
    </main>
  );
}
