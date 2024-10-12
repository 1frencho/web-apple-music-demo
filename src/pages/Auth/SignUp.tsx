import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { MotionDiv } from "../../components/content";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { signUpSchema } from "../../schemas";
import { ErrorSpanMsg } from "../../components/content/ErrorSpanMsg";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const [userData, setUserData] = useState<IFormInput | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setUserData(data);
  };

  return (
    <>
      <main className="p-6">
        <form
          className="flex h-[75vh] flex-col items-center justify-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="myCard flex w-full flex-col items-center justify-center gap-4 md:w-[50vw]">
            <FaApple size={64} className="text-slate-400" />
            <h2 className="text-2xl font-medium">Sign Up</h2>
            {/* Success Alert */}
            {userData && (
              <MotionDiv>
                <Alert status="success" variant="subtle" className="rounded-lg">
                  <AlertIcon />
                  Data validated. Fire on!
                </Alert>
              </MotionDiv>
            )}
            {/* Input Fields */}
            <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name:
                  <span>
                    {errors.firstName && (
                      <ErrorSpanMsg message={errors.firstName.message} />
                    )}
                  </span>
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  className={`myInput ${errors.firstName && "error"}`}
                  maxLength={20}
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name:
                  <span>
                    {errors.lastName && (
                      <ErrorSpanMsg message={errors.lastName.message} />
                    )}
                  </span>
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  maxLength={20}
                  className={`myInput ${errors.lastName && "error"}`}
                />
              </div>
            </div>
            {/* Email Input */}
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email:
                <span>
                  {errors.email && (
                    <ErrorSpanMsg message={errors.email.message} />
                  )}
                </span>
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className={`myInput ${errors.email && "error"}`}
              />
            </div>
            {/* Password Input */}
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password:
                <span>
                  {errors.password && (
                    <ErrorSpanMsg message={errors.password.message} />
                  )}
                </span>
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                className={`myInput ${errors.password && "error"}`}
              />
            </div>
            {/* Confirm Password Input */}
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password:
                <span>
                  {errors.confirmPassword && (
                    <ErrorSpanMsg message={errors.confirmPassword.message} />
                  )}
                </span>
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                id="confirmPassword"
                className={`myInput ${errors.confirmPassword && "error"}`}
              />
            </div>
            {/* Sign In Link */}
            <Link
              to="/signIn"
              className="self-end transition-colors duration-300 ease-in-out hover:text-main"
            >
              <p className="text-sm font-medium">Already have an account?</p>
            </Link>
            {/* Submit Button */}
            <button className="myPrimaryBtn" type="submit">
              <RiLoginCircleLine size={20} className="text-white" />
              Sign Up
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
export default SignUp;
