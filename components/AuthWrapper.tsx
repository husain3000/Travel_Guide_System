import { useSigninCheck } from "reactfire";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export declare interface AuthProps {
  noAuthNeeded: Boolean;
  children?: ReactElement;
}

const AuthWrapper = ({ children, noAuthNeeded }: AuthProps) => {
  const { status, data: signInCheckResult } = useSigninCheck();
  const router = useRouter();
  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading" || !router.isReady) {
    return <Loader />;
  }
  if (signInCheckResult.signedIn && noAuthNeeded) {
    router.push("/dashboard");
  } else if (!signInCheckResult.signedIn && noAuthNeeded) {
    return children;
  } else if (signInCheckResult.signedIn) return children;
  else if (router.isReady) router.push("/login");
  return <></>
};

export default AuthWrapper;

function Loader() {
  return (
    <div className="animate-pulse flex space-x-4 container mx-auto p-10 h-screen">
      <div className="flex-1 space-y-6 py-1 animate-pulse">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="bg-slate-200 rounded col-span-2"></div>
          <div className="bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}
