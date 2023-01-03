import Head from "next/head";
import Link from "next/link";

import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/common/Input";
import { Logo } from "@/components/common/Logo";

import AuthWrapper from "@/components/AuthWrapper";
import { useAuth, useFirestore } from "reactfire";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const auth = useAuth();
  const router = useRouter();
  const firestore = useFirestore();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  async function signUp(data) {
    try {
      const credentials = await createUserWithEmailAndPassword(auth, data["email"], data["password"]);
      console.log(data);
      const todayDate = Date.now();
      await setDoc(doc(firestore, "users", data["email"]), {
        firstName: data["first_name"],
        lastName: data["last_name"],
        password: data["password"],
        startDate: todayDate,
      });
      console.log(auth.currentUser);
      updateProfile(auth.currentUser, { displayName: `${data["first_name"]} ${data["last_name"]}` });
    } catch (error) {
      toast.error(error.message ?? "Error signing up");
    }
  }
  return (
    <AuthWrapper noAuthNeeded={true}>
      <div className="h-screen">
        <Head>
          <title>Sign Up - TaxPal</title>
        </Head>
        <AuthLayout>
          <div className="flex flex-col items-start justify-start">
            <Link href="/">
              <Logo className="text-3xl" />
            </Link>
            <h2 className="mt-16 text-lg font-semibold text-white">Get started for free.</h2>
            <p className="mt-2 text-sm text-white">
              {"Already have an account? "}
              <span className=" font-bold text-geist-link">
                <Link href="login"> Login</Link>
              </span>
            </p>
          </div>
          <div className="mt-10">
            <div className="mt-6">
              <form onSubmit={handleSubmit(signUp)} className="space-y-7">
                <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                  <Input
                    label="First name"
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    register={register}
                    required
                  />
                  <Input
                    label="Last name"
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    register={register}
                    required
                  />
                </div>
                <Input
                  label="Email address"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  register={register}
                  required
                />
                <Input
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  register={register}
                  required
                />
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full rounded-lg border border-transparent bg-success py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Sign up <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AuthLayout>
      </div>
    </AuthWrapper>
  );
}
