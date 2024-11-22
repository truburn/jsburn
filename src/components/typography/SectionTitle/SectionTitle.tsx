import { cx } from "@emotion/css";
import { useSectionTitleClasses } from "@typography/SectionTitle";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  depth?: "2" | "3" | "4";
  className?: string;
}

/**
 * Section Title
 */
export function SectionTitle(props: SectionTitleProps) {
  const { title, subtitle, depth = "2", className } = props;
  const classes = useSectionTitleClasses();
  const Tag = `h${depth}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cx(classes.root, className)}>
      {title}
      {subtitle && <small>{subtitle}</small>}
    </Tag>
  );
}
