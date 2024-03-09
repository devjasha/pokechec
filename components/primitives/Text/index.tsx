"use client";
import { FC } from "react";
import styles from "./Text.module.scss";

type TextProps = {
  content: string;
};

const Text: FC<TextProps> = ({ content }) => {
  return <p className={styles.text}>{content}</p>;
};

export default Text;
