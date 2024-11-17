import { useFooterStyles } from "@layout/Footer";

export interface FooterProps {}

/**
 * Footer Component
 */
export const Footer = (_props: FooterProps) => {
  const footerClasses = useFooterStyles();

  return <div className={footerClasses.root}>Footer Component</div>;
};
