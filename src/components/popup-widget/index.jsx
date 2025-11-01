"use client";
import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { faConstants } from "../../../public/locales/fa/common";

import styles from "./PopupWidget.module.css";

export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubmit = (data) => {
    const mailtoUrl = `mailto:info@hubertuspilates.com?subject=${encodeURIComponent(
      `${userName} sent a message from Hubertus site`
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
    )}`;
    window.location.href = mailtoUrl;
    reset();
  };

  return (
    <div className={styles.popupWidgetWrapper}>
      {!isSmallScreen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed z-40 flex items-center justify-center transition duration-300 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none ease ${styles.popupButton}`}
        >
          <span className="sr-only">{faConstants.openContactFormWidget}</span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              width="24"
              height="24"
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
              className="absolute w-6 h-6 text-white"
              width="24"
              height="24"
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
      )}

      {(isOpen || isSmallScreen) && (
        <div
          className={`${styles.boxWrapper} flex flex-col overflow-hidden dark:border-gray-800 bg-white`}
        >
          <div className={`h-32 p-5  ${styles.titleWrapper}`}>
            <h3 className="text-lg dark:text-pureWhiteColor">
              {faConstants.howWeCanHelp}
            </h3>
            <p className="text-white opacity-50">
              {faConstants.weUsuallyRespondInAFewHours}
            </p>
          </div>

          <div className="flex-grow h-full p-6 overflow-auto bg-gray-50">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* <input
                type="hidden"
                value="Nextly Template"
                {...register("from_name")}
              /> */}
              <input
                type="checkbox"
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm text-accentColorBlue dark:text-silverChalice"
                >
                  {faConstants.fullName}
                </label>
                <input
                  type="text"
                  id="full_name"
                  placeholder={faConstants.enterYourName}
                  {...register("name", {
                    required: "لطفا نام خود را وارد کنید",
                    maxLength: 80,
                  })}
                  className={`w-full px-3 py-2 text-accentColorBlue placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
                />
                {errors.name && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.name.message}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-accentColorBlue dark:text-silverChalice"
                >
                  {faConstants.emailAddress}
                </label>
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
                  className={`w-full px-3 py-2 text-accentColorBlue placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
                  style={{ direction: "ltr" }}
                />

                {errors.email && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-accentColorBlue dark:text-silverChalice"
                >
                  {faConstants.yourMessage}
                </label>

                <textarea
                  rows={4}
                  id="message"
                  {...register("message", {
                    required: "لطفا پیام خود را وارد کنید",
                  })}
                  placeholder={faConstants.enterYourMessage}
                  className={`w-full px-3 py-2 text-accentColorBlue placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
                  required
                ></textarea>
                {errors.message && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.message.message}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className={`${styles.submitButton} px-3 py-4 rounded-md`}
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    faConstants.sendMessage
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
