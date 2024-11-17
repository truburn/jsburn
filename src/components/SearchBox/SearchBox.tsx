import { useSearchBoxStyles } from "@components/SearchBox";
import { cx } from "@emotion/css";
import { useExtractProps } from "@utils/hooks";

interface SearchBoxProps {
  /**
   * Unique identifier for the root element. If not provided, one will be
   * generated with the prefix of `searchBox`.
   */
  id?: string;
  /** Class names to overrides styles for specific elements in the component */
  overrideClasses?: {
    root?: string;
    label?: string;
    input?: string;
    button?: string;
  };
}

/**
 * Search box component
 */
export const SearchBox = (_props: SearchBoxProps) => {
  const { id, overrideClasses, props } = useExtractProps(_props, {
    prefix: "searchBox",
  });
  const classes = useSearchBoxStyles();

  return (
    <div id={id} className={cx(classes.root, overrideClasses?.root)}>
      Search Box Component
    </div>
  );
};
