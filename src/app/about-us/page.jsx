import React from "react";
import { Container } from "@/components/UI/container/Container";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import { faPersons } from "@/data/fa";

const AboutUs = () => {
  return (
    <Container>
      <div className="py-8">
        <div>
          <div className={`${styles.companyWrapper} pageWrapper`}>
            <h1 className="dark:text-neutralWhiteColor">
              درباره شرکت هوبرتوس پیلاتس
            </h1>
            <p className="dark:text-neutralWhiteColor">
              شرکت هوبرتوس پیلاتس اولین تولید کننده دستگاه های پیلاتس در ایران
              توسط برادران زرعی تاسیس شده است که بعد از سالها تحقیق و بررسی در
              مورد تولید دستگاه های پیلاتس و بهره‌گیری از دانش تولید اروپایی و
              آمریکایی ، برای اولین بار درکشور، اقدام به تولید ماشین‌آلات پیلاتس
              کردند که این پژوهش ها تا به امروز نیز زیر نظر واحد تحقیق و توسعه
              این شرکت ادامه دارد تا همواره به روزترین دستگاه ها را در کلاس
              جهانی عرضه کنند.
            </p>
            <p className="dark:text-neutralWhiteColor">
              تولید ماشین پیلاتس علیرغم ظاهر ساده آن کاری تخصصی بوده که نیازمند
              دانش علمی است که در طی سالها تجربه، تحقیق و تولید در این زمینه به
              دست آمده . با توجه به محدودیت های تولید که در کشور وجود دارد،
              بیشتر قطعات بومی سازی شده و سعی بر آن بوده تا کلیه قطعات با حفظ
              کیفیت در داخل تولید شوند. امروز به جرأت می‌توان گفت که دستگاه های
              تولید شده توسط شرکت هوبرتوس پیلاتس قابل رقابت با نمونه‌های خارجی
              بوده و به زودی جایگاهی در بین تولیدکنندگان مطرح جهان پیدا خواهند
              کرد
            </p>
            <p className="dark:text-neutralWhiteColor">
              به امید سلامتی و تندرستی برای همه هم میهنان عزیزمان .
            </p>
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
                    <div className={styles.boxSubtitle}>
                      {person?.education}
                    </div>
                  </div>
                </div>
                <p className={styles.boxDescription}>{person?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
