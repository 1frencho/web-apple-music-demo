import { Suspense, useEffect, useState } from "react";
import { MyLoading } from "./MyLoading";
import { MotionDiv } from "./MotionDiv";

export const Loader = ({
  children,
  timeout = 0,
}: {
  children: React.ReactNode;
  timeout?: number;
}) => {
  const [showChildren, setShowChildren] = useState(true);

  useEffect(() => {
    setShowChildren(false);

    const timer = setTimeout(() => {
      setShowChildren(true);
    }, timeout);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [children, timeout]);

  return (
    <Suspense fallback={<MyLoading />}>
      {showChildren ? <MotionDiv>{children}</MotionDiv> : <MyLoading />}
    </Suspense>
  );
};
