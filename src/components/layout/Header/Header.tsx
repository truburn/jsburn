import { cx } from "@emotion/css";
import { HeaderContent, useHeaderStyles } from "@layout/Header";
import { ButtonProps } from "@navigation/Button";
import { HeadingProps } from "@typography/Heading";
import { useExtractProps } from "@utils/hooks";
import { ReactNode } from "react";

export type HeaderContentList = Array<
  | ((HeadingProps | ButtonProps) & {
      type: "heading" | "button";
    })
  | ReactNode
>;

export interface HeaderProps {
  /**
   * Content to display inside the container. If `children` is defined,
   * all other content options are ignored.
   */
  children?: ReactNode;
  /**
   * Content to render at the beginning of the container. In `ltr` format
   * this is at the left side of the container. In `rtl` format this is at
   * the right side of the container.
   */
  startContent?: HeaderContentList;
  /**
   * Content to render at the end of the container. In `ltr` format
   * this is at the right side of the container. In `rtl` format this is at
   * the left side of the container.
   */
  endContent?: HeaderContentList;
  /** Content to render in the center of the container. */
  midContent?: HeaderContentList;
  /**
   * Indicate what content should be hidden when the component is within a
   * container with a width. The contents will be collapsed into a slide
   * out menu.
   */
  hideOnMobile?: Array<"start" | "end" | "mid" | "all">;
  /** Icon to show on the button to expand and collapse hidden content */
  mobileIcon?: string;
  /** Label to apply to the icon button when there is hidden content  */
  mobileIconLabel?: string;
  /**
   * Unique identifier for the root element. If not provided, one will be
   * generated with the prefix of `header`.
   */
  id?: string;
  /** Class names to overrides styles for specific elements in the component */
  overrideClasses?: {
    /** The root div element */
    root?: string;
    /**
     * Each of the sections within the header. To target a specific section
     * include the section name as a classname. `.start`, `.mid`, `.end`
     */
    section?: string;
    /**
     * Override the base styling for the heading elements. To target a specific
     * heading, include the class name in the heading's `overrideClasses` prop.
     */
    heading?: string;
    /**
     * Override the base styling for the button elements. To target a specific
     * button, include the class name in the button's `overrideClasses` prop.
     */
    button?: string;
  };
}

/**
 * Header element for use in sections within the page. The page header
 * should be rendered in the app layout wrapper
 */
export const Header = (_props: HeaderProps) => {
  const { overrideClasses, id, props } = useExtractProps(_props, {
    prefix: "header",
  });
  const {
    children,
    startContent = [],
    endContent = [],
    midContent = [],
  } = props;
  const classes = useHeaderStyles();

  return (
    <div id={id} className={cx(classes.root, overrideClasses?.root)}>
      {children ?? (
        <>
          <HeaderContent
            id={`${id}-start`}
            className={cx(classes.section, overrideClasses?.section, "start")}
            content={startContent}
          />
          <HeaderContent
            id={`${id}-mid`}
            className={cx(classes.section, overrideClasses?.section, "mid")}
            content={midContent}
          />
          <HeaderContent
            id={`${id}-end`}
            className={cx(classes.section, overrideClasses?.section, "end")}
            content={endContent}
          />
        </>
      )}
    </div>
  );
};
