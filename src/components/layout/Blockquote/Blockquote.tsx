import { useBlockquoteStyles } from "@layout/Blockquote";

export interface BlockquoteProps {}

/**
 * Blockquote component
 */
export const Blockquote = (_props: BlockquoteProps) => {
  const blockquoteClasses = useBlockquoteStyles();

  return <div className={blockquoteClasses.root}>Blockquote Component</div>;
};
