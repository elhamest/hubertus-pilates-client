import { Container } from "@/components/UI/container";
import styles from "./SectionTitle.module.css";

export function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${styles.sectionTitleContainer} ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-semibold tracking-wider text-vibrantPurple uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        //  text-accentColorBlue
        <h2
          className={`max-w-2xl mt-3 font-medium leading-snug tracking-tight lg:leading-tight dark:text-neutralWhiteColor ${styles.title} animateFadeInUp`}
        >
          {props.title}
        </h2>
      )}

      {props.children && (
        <div
          className={`max-w-2xl py-4 text-lg leading-normal text-accentColorBlue lg:text-xl xl:text-xl dark:text-accentColorGary ${styles.children}`}
        >
          {props.children}
        </div>
      )}
    </Container>
  );
}
