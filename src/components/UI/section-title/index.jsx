import { Container } from "@/components/UI/container";
import styles from "./SectionTitle.module.css";

export function SectionTitle(props) {
  return (
    <Container>
      <div
        className={`${styles.sectionTitleContainer} ${
          props.align === "left" ? "" : styles.centered
        }`}
      >
        {props.preTitle && (
          <div className={styles.preTitle}>{props.preTitle}</div>
        )}

        {props.title && (
          <h2 className={`${styles.title} animateFadeInUp`}>{props.title}</h2>
        )}

        {props.children && (
          <div className={styles.children}>{props.children}</div>
        )}
      </div>
    </Container>
  );
}
