import Head from "next/head";
import Link from "next/link";

import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/common/Input";
import { Logo } from "@/components/common/Logo";
import AuthWrapper from "@/components/AuthWrapper";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuth } from "reactfire";
import { sendPasswordResetEmail } from "firebase/auth";
import clsx from "clsx";

export default function Login() {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function forgotPassword(data) {
    try {
      await sendPasswordResetEmail(auth, data["email"]);
      toast.success("Reset email sent!");
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <AuthWrapper noAuthNeeded={true}>
      <div className="h-screen">
        <Head>
          <title>Forgot Password - Audika</title>
        </Head>
        <AuthLayout>
          <div>
            <div className="flex flex-col items-start justify-start">
              <Logo className="text-3xl" />
              <h2 className="mt-2 font-semibold text-accent-5">Change your password</h2>
            </div>
            <div className="mt-2">
              <div className="mt-4">
                <form onSubmit={handleSubmit(forgotPassword)} className="space-y-7">
                  <Input
                    register={register}
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  <div className="pt-1">
                    <button
                      type="submit"
                      className={clsx(
                        "w-full rounded-lg border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      )}>
                      Send password reset email <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AuthLayout>
      </div>
    </AuthWrapper>
  );
}
