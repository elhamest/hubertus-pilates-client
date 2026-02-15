import { faFaqCategories } from "../../../data/fa";
import { enFaqCategories } from "../../../data/en";

import styles from "./FaqCategory.module.css";

const FaqCategory = ({ locale = "fa", onSelectCategory, selectedCategory }) => {
  const faqCategories = locale === "fa" ? faFaqCategories : enFaqCategories;

  const handleSelectCategory = (categoryId) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
  };

  return (
    <div className={styles.categoryWrapper}>
      {faqCategories?.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleSelectCategory(item?.id);
            }}
            className={`${styles.categoryButton} ${selectedCategory === item?.id ? styles.active : ""}`}
          >
            {item?.title}
          </button>
        );
      })}
    </div>
  );
};

export default FaqCategory;
