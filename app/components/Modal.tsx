"use client";

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen?: boolean;
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
  const [showModal, setShowModal] = useState(props.isOpen);

  useEffect(() => {
    setShowModal(props.isOpen);
  }, [props.isOpen]);

  const handleClose = useCallback(() => {
    if (props.disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      props.onClose();
    }, 300);
  }, [props]);

  const handleSubmit = useCallback(() => {
    if (props.disabled) {
      return;
    }
    props.onSubmit();
  }, [props]);

  const handleSecondaryAction = useCallback(() => {
    if (props.disabled || !props.secondaryAction) {
      return;
    }

    props.secondaryAction();
  }, [props]);

  if (!props.isOpen) {
    return null;
  }

  return <div></div>;
}
