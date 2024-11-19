import { useCardClasses } from "@components/Card";
import { cx } from "@emotion/css";
import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
  id?: string;
}

/**
 * Card Component
 */
export function Card(props: PropsWithChildren<CardProps>) {
  const classes = useCardClasses();

  return (
    <div id={props.id} className={cx(classes.root, props.className)}>
      {props.children}
    </div>
  );
}
