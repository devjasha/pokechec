"use client";
import { FC } from "react";
import styles from "./headline.module.scss";

type HeadlineProps = {
  tag: string;
  content: string;
};

const Headline: FC<HeadlineProps> = ({ tag, content }) => {
  if (tag === "h1") {
    return <h1 className={styles.h1}>{content}</h1>;
  }

  if (tag === "h2") {
    return <h2 className={styles.h2}>{content}</h2>;
  }

  if (tag === "h3") {
    return <h3 className={styles.h3}>{content}</h3>;
  }

  if (tag === "h4") {
    return <h4 className={styles.h4}>{content}</h4>;
  }

  if (tag === "h5") {
    return <h5 className={styles.h4}>{content}</h5>;
  }
};

export default Headline;
