import { motion } from "framer-motion";

export const ErrorSpanMsg = ({ message }: { message: string | undefined }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="text-main" // Class for styling
  >
    * {message}
  </motion.span>
);
