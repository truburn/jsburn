import { usePageTitleClasses } from "@typography/PageTitle";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

/**
 * Page Title
 */
export function PageTitle(props: PageTitleProps) {
  const classes = usePageTitleClasses();

  return (
    <h1 className={classes.root}>
      {props.title}
      {props.subtitle && <small>{props.subtitle}</small>}
    </h1>
  );
}
