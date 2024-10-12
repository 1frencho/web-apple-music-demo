import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { MotionDiv } from "../../components/content";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { signInSchema } from "../../schemas";

interface IFormInput {
  email: string;
  password: string;
}

function SignIn() {
  const [userData, setUserData] = useState<IFormInput | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signInSchema),
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
            <h2 className="text-2xl font-medium">Sign In</h2>
            {/* First Flex*/}
            <div className="w-full">
              {" "}
              {userData && (
                <MotionDiv>
                  <Alert
                    status="success"
                    variant="subtle"
                    className="rounded-lg"
                  >
                    <AlertIcon />
                    Data validated. Fire on!
                  </Alert>
                </MotionDiv>
              )}
            </div>

            {/* Second */}
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email:
                <span className="text-main">
                  * {errors.email && `(${errors.email.message})`}
                </span>
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className={`myInput ${errors.password && "error"}`}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password:{" "}
                <span className="text-main">
                  * {errors.password && `(${errors.password.message})`}
                </span>
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                className={`myInput ${errors.password && "error"}`}
              />
            </div>

            <Link
              to="/login"
              className="self-end transition-colors duration-300 ease-in-out hover:text-main"
            >
              <p className="text-sm font-medium">Already have an account?</p>
            </Link>
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
export default SignIn;
