"use client";

interface ModalProps {
  isOpen?: Boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

export default function Modal(props: ModalProps) {
  return <div></div>;
}
