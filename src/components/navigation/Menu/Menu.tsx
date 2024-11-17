import { useMenuStyles } from "@navigation/Menu";

export interface MenuProps {}

/**
 * Menu Component
 */
export const Menu = (_props: MenuProps) => {
  const menuClasses = useMenuStyles();

  return <div className={menuClasses.root}>Menu Component</div>;
};
