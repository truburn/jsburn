import { useLinkStyles } from "@navigation/Link";

export interface LinkProps {}

/**
 * Link component
 */
export const Link = (_props: LinkProps) => {
  const linkClasses = useLinkStyles();

  return <div className={linkClasses.root}>Link Component</div>;
};
