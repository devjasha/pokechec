"use client";
import { FC } from "react";
import styles from "./Types.module.scss";

type TypesProps = {
  types: any;
};

const Types: FC<TypesProps> = ({ types }) => {
  return (
    <div className={styles.typesWrapper}>
      {types?.map((type: any, index: number) => {
        const typeName = type.type.name;
        return (
          <p key={index} className={`${styles.type} ${styles[typeName]}`}>
            {type.type.name}
          </p>
        );
      })}
    </div>
  );
};

export default Types;
