"use client";
import Divider from "@/components/pages/login/Divider";
import SignInPassword from "@/components/pages/login/SignInPassword";
import SignInTerms from "@/components/pages/login/SignInTerms";
import WarningSVG from "@/components/pages/login/WarningSVG";
import Alert from "@/components/shared/modal/Alert";
import Container from "@/components/shared/wrapper/Container";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useReducer, useState } from "react";

export type SignInFormData = {
  email: { value: string; error: string };
  password: { value: string; error: string };
};

export type SignInUserAction =
  | { type: "SET_EMAIL"; payload: { value: string; error: string } }
  | { type: "SET_PASSWORD"; payload: { value: string; error: string } };

// Reducer function
const formReducer: React.Reducer<SignInFormData, SignInUserAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const initialData = {
  email: { value: "", error: "" },
  password: { value: "", error: "" },
};

const SignInPage = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [googleMessage, setGoogleMessage] = useState("");
  const [appleMessage, setAppleMessage] = useState("");
  const [formData, dispatchFormData] = useReducer(formReducer, initialData);
  const router = useRouter();
  const redirectToHome = () => {
    router.push("/");
  };

  const handleGoogleLogin = () => {
    setGoogleMessage("Google authentication service in progress");
  };

  const handleappleLogin = () => {
    setAppleMessage("Apple authentication service in progress");
  };

  // handle submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("clicked");
    // VALIDATION...STARTS
    // check for email
    if (!formData.email.value) {
      return dispatchFormData({
        type: "SET_EMAIL",
        payload: { value: "", error: "Email is required" },
      });
    }

    const EmailRegEx = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
    if (!EmailRegEx.test(formData.email.value)) {
      return dispatchFormData({
        type: "SET_EMAIL",
        payload: {
          value: formData.email.value,
          error: "Invalid email address",
        },
      });
    }

    console.log(formData);
    // check for password
    if (!formData.password.value) {
      return dispatchFormData({
        type: "SET_PASSWORD",
        payload: { value: "", error: "Password is required" },
      });
    }

    if (formData.password.value.length < 8) {
      return dispatchFormData({
        type: "SET_PASSWORD",
        payload: {
          value: formData.password.value,
          error: "Password must be at least 8 characters long.",
        },
      });
    }
    // VALIDATION...ENDS

    console.log(formData);
    router.push("/");
  };
  return (
    <Container className="pt-6 md:pt-[11.5px] px-4 pb-[56.5px]">
      <div className="form-contianer w-full max-w-[780px] mx-auto">
        <h1 className="text-[36px] md:text-[50px] xl:text-[60px] text-center leading-normal tracking-[-1.8px] mb-8 md:mb-[36px] xl:mb-[50px]">
          Sign in to hire talent
        </h1>
        <div className="third-party-login md:grid md:grid-cols-2 md:gap-[15px]">
          {/* apple login button */}
          <button
            onClick={handleappleLogin}
            className="duration-300 hover:border-[#005AFF] border border-transparent apple-login-btn mb-5 md:mb-0  flex items-center justify-center gap-[14px] py-[22px] bg-[#005aff14] rounded-[100px] w-full text-[15px] md:text-[16px] xl:text-[20px] leading-normal tracking-[0.4px]"
          >
            <Image
              width={28}
              height={28}
              src="/svgs/apple-login.svg"
              alt="Google icon"
              className="w-[19.5px] h-[24.08px] rounded-full"
            />
            <span>Continue with apple</span>
          </button>
          {appleMessage && (
            <Alert hide={setAppleMessage} message={appleMessage} />
          )}

          {/* google login button */}
          <button
            onClick={handleGoogleLogin}
            className="duration-300 hover:border-[#005AFF] border border-transparent apple-login-btn mb-5 md:mb-0  flex items-center justify-center gap-[14px] py-[22px] bg-[#005aff14] rounded-[100px] w-full text-[15px] md:text-[16px] xl:text-[20px] leading-normal tracking-[0.4px]"
          >
            <Image
              width={28}
              height={28}
              src="/svgs/google-login.svg"
              alt="Google icon"
              className="bg-white md:p-2 w-[19.5px] h-[24.08px] md:w-[44px] md:h-[44px] rounded-full"
            />
            <span>Continue with goggle</span>
          </button>
          {googleMessage && (
            <Alert hide={setGoogleMessage} message={googleMessage} />
          )}
        </div>
        <Divider />

        {/* form contianer */}
        <form
          onSubmit={handleSubmit}
          action=""
          className="form-container w-full"
        >
          {/* Email container */}
          <div className="email-address-container mb-[24px] md:mb-[28px]">
            <label htmlFor="email" className="login-form-label">
              Work email address
            </label>
            <input
              type="text"
              className="login-form-input border border-[#0000001a]"
              placeholder="Enter work email address"
              onChange={(e) =>
                dispatchFormData({
                  type: "SET_EMAIL",
                  payload: { value: e.target.value, error: "" },
                })
              }
              value={formData.email.value}
            />
            {formData.email.error && (
              <p className="text-[#FF0000] text-sm md:text-base flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
                <WarningSVG /> {formData.email.error}
              </p>
            )}
          </div>

          {/* Password container */}

          <SignInPassword
            formData={formData}
            dispatchFormData={dispatchFormData}
          />

          <SignInTerms agreeTerms={agreeTerms} setAgreeTerms={setAgreeTerms} />
          {/* sign up buttons */}
          <div className="flex flex-col items-center">
            <input
              className={`duration-300 mb-3 xl:mb-5 px-[25px] py-[8px] md:px-[30px] xl:px-[40px] md:py-3 xl:py-4  rounded-[100px] text-[15px] md:text-[16px] xl:text-[20px] md:leading-[18px]  xl:leading-[25px]  
              ${
                agreeTerms
                  ? "bg-[#005AFF] text-white"
                  : "bg-[#dde3e766] text-[#525966cc] pointer-events-none"
              }`}
              // type="submit"
              value="Sign in my account"
              type="submit"
            />
            <p className="text-[15px] md:text-[18px] leading-normal tracking-[0.36px]">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="underline hover:no-underline text-[#005AFF]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignInPage;
