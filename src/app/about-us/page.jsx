import React from "react";
import { Container } from "@/components/UI/container";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import { faPersons, faAboutUs } from "@/data/fa";

const AboutUs = () => {
  return (
    <Container>
      <div className="pageHeight">
        <div className={`${styles.companyWrapper} pageWrapper`}>
          <h1 className="dark:text-offWhiteColor">{faAboutUs?.title} </h1>
          <p className="dark:text-offWhiteColor">{faAboutUs?.desc1}</p>
          <p className="dark:text-offWhiteColor">{faAboutUs?.desc2}</p>
          <p className="dark:text-offWhiteColor">{faAboutUs?.desc3} </p>
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
