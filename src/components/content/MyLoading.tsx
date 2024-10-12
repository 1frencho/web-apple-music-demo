import { FaApple } from "react-icons/fa";

export const MyLoading = () => {
  return (
    <div className="relative flex h-[80vh] items-center justify-center">
      <FaApple className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-main" />
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
    </div>
  );
};
