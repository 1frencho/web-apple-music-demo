import { FaApple } from "react-icons/fa";

export const MyLoading = () => {
  return (
    <div className="relative flex h-[83vh] items-center justify-center">
      <FaApple className="text-main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl" />
      <div className="border-primary h-32 w-32 animate-spin rounded-full border-b-2 border-t-2"></div>
    </div>
  );
};
