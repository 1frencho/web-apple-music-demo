import { HTMLMotionProps, motion } from "framer-motion";

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideFade: {
    initial: { y: -16, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
};

type PageProps = HTMLMotionProps<"div"> & {
  animation?: "fade" | "slideFade";
  children: React.ReactNode;
  scroll?: boolean;
};

export const MotionDiv = ({ animation = "fade", children }: PageProps) => {
  return (
    <motion.div
      {...animations[animation]}
      // Without styles:
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {children}
    </motion.div>
  );
};
