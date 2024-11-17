import { useModalStyles } from "@layout/Modal";

export interface ModalProps {}

/**
 * Modal Component
 */
export const Modal = (_props: ModalProps) => {
  const modalClasses = useModalStyles();

  return <div className={modalClasses.root}>Modal Component</div>;
};
