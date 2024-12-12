import { Container } from "@/components/UI/container/Container";
import styles from "./SectionTitle.module.css";

export function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${styles.sectionTitleContainer} ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2
          className={`max-w-2xl mt-3 font-medium leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white ${styles.title} animateFadeInUp`}
        >
          {props.title}
        </h2>
      )}

      {props.children && (
        <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </div>
      )}
    </Container>
  );
}
