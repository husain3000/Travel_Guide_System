import Head from "next/head";
import Link from "next/link";

import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/common/Input";
import { Logo } from "@/components/common/Logo";
import AuthWrapper from "@/components/AuthWrapper";
import { useForm } from "react-hook-form";
import { useAuth } from "reactfire";
import { toast } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  async function signInUser(data) {
    try {
      const credentials = await signInWithEmailAndPassword(auth, data["email"], data["password"]);
      console.log(credentials);
    } catch (error) {
      toast.error(error.message ?? "Error signing up");
    }
  }
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <AuthWrapper noAuthNeeded={true}>
        <div className="h-screen">
          <AuthLayout>
            <div className="flex flex-col items-start justify-start">
              <Link href="/">
                <Logo className="text-3xl" />
              </Link>
              <h2 className="mt-16 text-lg font-semibold text-white">Sign in to your account</h2>
              <p className="mt-2 text-sm text-white">
                {"Don't have an account yet? "}
                <span className=" font-bold text-geist-link">
                  <Link href="register"> Get started here</Link>
                </span>
              </p>
            </div>
            <div className="mt-10">
              <div className="mt-6">
                <form onSubmit={handleSubmit(signInUser)} className="space-y-7">
                  <Input
                    register={register}
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    register={register}
                    autoComplete="current-password"
                    required
                  />
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full rounded-lg border border-transparent bg-success py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Sign in <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </form>
                <Link href="/forgot-password" className="text-sm p-2 block text-geist-link font-bold">
                  Forgot password ?
                </Link>
              </div>
            </div>
          </AuthLayout>
        </div>
      </AuthWrapper>
    </>
  );
}
