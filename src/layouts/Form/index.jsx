import { useEffect, useRef, useState } from "react";
import { Subtitle } from "../../components/Subtitle/index";
import { ContentWrapper } from "../ContentWrapper/index";
import styles from "./index.module.scss";
import { Button } from "../../components/Button/index";
import cn from "classnames";
import InputMask from "react-input-mask";

const SuccessForm = () => {
  return (
    <div className={styles.successForm}>
      <div className={styles.successIcon} />
      <p className={styles.successTitle}>Спасибо!</p>
      <p className={styles.successDesc}>
        Ваше сообщение отправлено мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее
        время
      </p>
    </div>
  );
};

const Form = () => {
  const [formSuccess, setSuccessForm] = useState(false);
  const formRef = useRef();
  const [dataForm, setDataForm] = useState({
    info: "",
    company: "",
    position: "",
    mail: "",
    phone: "",
    userAgree: true,
  });

  const submitForm = async (e) => {
    e.preventDefault();

    let formIsValid = true;

    formRef.current.querySelectorAll("input").forEach((item) => {
      if (item.name === "info") {
        if (item.value.trim("").length === 0) {
          formIsValid = false;
          if (item.nextSibling) {
            item.style = "border-color: #C30000";
            item.nextSibling.style = "display: block";
          }
        } else {
          if (item.nextSibling) {
            item.style = "border-color: #CFCFCF";
            item.nextSibling.style = "display: none";
          }
        }
      }

      if (item.name === "mail") {
        if (item.value.trim("").length === 0) {
          formIsValid = false;
          if (item.nextSibling) {
            item.style = "border-color: #C30000";
            item.nextSibling.style = "display: block";
          }
        } else {
          if (item.nextSibling) {
            item.style = "border-color: #CFCFCF";
            item.nextSibling.style = "display: none";
          }
        }
      }

      if (item.name === "userAgree") {
        if (item.value === "false") {
          formIsValid = false;
          if (item.nextSibling) {
            item.style = "border-color: #C30000";
            item.nextSibling.querySelector("span").style = "display: block";
          }
        } else {
          if (item.nextSibling) {
            item.style = "border-color: #CFCFCF";
            item.nextSibling.querySelector("span").style = "display: none";
          }
        }
      }

      if (item.name === "phone") {
        const currentPhoneValue = item.value
          .replaceAll("+", "")
          .replaceAll("(", "")
          .replaceAll(")", "")
          .replaceAll("-", "")
          .replaceAll(" ", "");
        console.log(currentPhoneValue);
        if (currentPhoneValue.length !== 11) {
          formIsValid = false;
          if (item.nextSibling) {
            item.style = "border-color: #C30000";
            item.nextSibling.style = "display: block";
          }
        } else {
          if (item.nextSibling) {
            item.style = "border-color: #CFCFCF";
            item.nextSibling.style = "display: none";
          }
        }
      }
    });

    if (formIsValid) {
      formRef.current.reset();
      setSuccessForm(true);
    }
  };

  return (
    <ContentWrapper>
      <Subtitle
        className={styles.title}
        title="Запросите демо НОТА&nbsp;ЮНИОН"
      />
      <div className={styles.formWrapper}>
        <form ref={formRef} onSubmit={submitForm}>
          <div className={styles.form}>
            <label className={styles.inputWrapper}>
              <input
                className={cn(styles.input)}
                name="info"
                placeholder="Имя Фамилия *"
              />
              <span style={{ display: "none" }} className={styles.inputError}>
                Обязательное поле
              </span>
            </label>
            <label className={styles.inputWrapper}>
              <input
                className={styles.input}
                name="company"
                placeholder="Компания"
              />
            </label>
            <label className={styles.inputWrapper}>
              <input
                className={styles.input}
                name="position"
                placeholder="Должность"
              />
            </label>
            <label className={styles.inputWrapper}>
              <input
                className={styles.input}
                name="mail"
                placeholder="E-mail*"
              />
              <span style={{ display: "none" }} className={styles.inputError}>
                Обязательное поле
              </span>
            </label>
            <label className={styles.inputWrapper}>
              <InputMask
                id="phone"
                className={styles.input}
                name="phone"
                placeholder="Телефон*"
                mask="+7 (999) 999-99-99"
              />
              <span style={{ display: "none" }} className={styles.inputError}>
                Обязательное поле
              </span>
            </label>
            <div className={styles.checkBoxWrapper}>
              <input
                className={styles.checkBox}
                id="userAgree"
                name="userAgree"
                type="checkbox"
                checked={dataForm.userAgree}
                value={dataForm.userAgree}
                onChange={() =>
                  setDataForm((prevValue) => ({
                    ...prevValue,
                    userAgree: !prevValue.userAgree,
                  }))
                }
              />

              <label htmlFor="userAgree" className={styles.checkBoxDesc}>
                Нажимая кнопку «Хочу попробовать», я предоставляю{" "}
                <a href="#" target="_blank">
                  согласие на обработку персональных данных.
                </a>
                <span
                  style={{ display: "none" }}
                  className={cn(styles.inputError, styles.checkBoxError)}
                >
                  Обязательное поле
                </span>
              </label>
            </div>
          </div>
          <Button
            onClick={submitForm}
            text="Хочу попробовать"
            className={styles.button}
          />
        </form>
        {!formSuccess ? <div className={styles.formImage} /> : <SuccessForm />}
      </div>
    </ContentWrapper>
  );
};

export { Form };
