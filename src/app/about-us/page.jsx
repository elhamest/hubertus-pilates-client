import Image from "next/image";
import { faPersons, faAboutUs } from "@/data/fa";

import styles from "./AboutUs.module.css";
import Breadcrumb from "@/components/UI/breadcrumb";
import { generatePathToTitleMap } from "@/utils/pathMaps";
import { Container } from "@/components/UI/container";

const AboutUs = ({ locale = "fa" }) => {
  const pathToTitleMap = generatePathToTitleMap(locale);

  return (
    <Container>
      {pathToTitleMap && (
        <Breadcrumb locale={locale} pathToTitleMap={pathToTitleMap} />
      )}
      <div className={`${styles.aboutUsWrapper} pageHeight`}>
        <div className={`${styles.companyWrapper} pageWrapper`}>
          <h1>{faAboutUs?.title} </h1>
          <p>{faAboutUs?.desc1}</p>
          <p>{faAboutUs?.desc2}</p>
          <p>{faAboutUs?.desc3} </p>
        </div>

        <div className={styles.personsWrapper}>
          {faPersons?.map((person, index) => (
            <div className={`${styles.boxWrapper} shadow-md`} key={index}>
              <div className={styles.boxContainer}>
                <Image
                  src={person?.image}
                  alt="Person"
                  width={60}
                  height={60}
                />
                <div>
                  <div className={styles.boxTitle}>{person?.name}</div>
                  <div className={styles.boxSubtitle}>{person?.education}</div>
                </div>
              </div>
              <ul className={styles.boxDescription}>
                {person?.description?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
