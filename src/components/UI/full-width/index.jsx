// src/components/FullWidth.jsx
import styles from "./FullWidth.module.css";

export default function FullWidth({ children, className = "" }) {
  return (
    <div className={`${styles.fullWidth} ${className}`}>
      <div className={styles.fullWidthContent}>{children}</div>
    </div>
  );
}
