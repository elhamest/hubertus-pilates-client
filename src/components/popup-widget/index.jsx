"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { faConstants } from "../../../public/locales/fa/common";

import styles from "./PopupWidget.module.css";

// The PHP script on the .ir host sends the email (both .com and .ir use it).
const CONTACT_URL = "https://hubertuspilates.ir/api/contact.php";

export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("botcheck", data.botcheck ? "1" : ""); // bots tick it
      const response = await fetch(CONTACT_URL, { method: "POST", body: formData });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.popupWidgetWrapper}>
      {/* Toggle Button - Hidden on mobile by CSS */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.popupButton}
        aria-label={faConstants.openContactFormWidget}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Form Container - Hidden by default on desktop, shown when toggled */}
      <div
        className={`${styles.boxWrapper} ${isOpen ? styles.desktopOpen : ""}`}
      >
        <div className={styles.titleWrapper}>
          <h3>{faConstants.howWeCanHelp}</h3>
          <p>{faConstants.weUsuallyRespondInAFewHours}</p>
        </div>

        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type="checkbox"
              className={styles.hiddenCheckbox}
              {...register("botcheck")}
            />

            <div className={styles.formField}>
              <label htmlFor="full_name">{faConstants.fullName}</label>
              <input
                type="text"
                id="full_name"
                placeholder={faConstants.enterYourName}
                {...register("name", {
                  required: "لطفا نام خود را وارد کنید",
                  maxLength: {
                    value: 80,
                    message: faConstants.nameTooLong,
                  },
                })}
                className={errors.name ? styles.inputError : styles.input}
              />
              {errors.name && (
                <div className={styles.errorMessage}>{errors.name.message}</div>
              )}
            </div>

            <div className={styles.formField}>
              <label htmlFor="email">{faConstants.emailAddress}</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "لطفا ایمیل خود را وارد کنید",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "لطفا یک ایمیل معتبر وارد کنید",
                  },
                })}
                placeholder="you@company.com"
                className={errors.email ? styles.inputError : styles.input}
                style={{ direction: "ltr" }}
              />

              {errors.email && (
                <div className={styles.errorMessage}>
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className={styles.formField}>
              <label htmlFor="message">{faConstants.yourMessage}</label>

              <textarea
                rows={4}
                id="message"
                {...register("message", {
                  required: "لطفا پیام خود را وارد کنید",
                  maxLength: {
                    value: 5000,
                    message: faConstants.messageTooLong,
                  },
                })}
                placeholder={faConstants.enterYourMessage}
                className={
                  errors.message ? styles.textareaError : styles.textarea
                }
                required
              ></textarea>
              {errors.message && (
                <div className={styles.errorMessage}>
                  {errors.message.message}
                </div>
              )}
            </div>

            <div className={styles.submitWrapper}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className={styles.spinner}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className={styles.spinnerCircle}
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className={styles.spinnerPath}
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  faConstants.sendMessage
                )}
              </button>
            </div>

            {status === "success" && (
              <div className={styles.successMessage}>
                {faConstants.messageSent}
              </div>
            )}
            {status === "error" && (
              <div className={styles.errorMessage}>
                {faConstants.messageNotSent}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
