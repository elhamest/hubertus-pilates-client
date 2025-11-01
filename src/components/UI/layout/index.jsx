import styles from "./Layout.module.css";

const Layout = ({ children, locale = "fa" }) => {
  return (
    <>
      <main className={styles.chiildrenWrapper}>{children}</main>
    </>
  );
};

export default Layout;
