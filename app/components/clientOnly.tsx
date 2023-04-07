"use client";

import { useState, useEffect } from "react";

interface clientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly = (props: clientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{props.children}</>;
};

export default ClientOnly;
