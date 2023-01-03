import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FirebaseAppProvider, useFirebaseApp } from "reactfire";
import { ReactElement, ReactNode } from "react";
import { getFirestore } from "firebase/firestore";
import { AuthProvider, FirestoreProvider } from "reactfire";
import { getAuth } from "firebase/auth";
import { Toaster } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyAMAnRNHXEx8YMKVylQWImWrG1qOtSw1jU",
  authDomain: "travelguideapp-c479d.firebaseapp.com",
  projectId: "travelguideapp-c479d",
  storageBucket: "travelguideapp-c479d.appspot.com",
  messagingSenderId: "744054933624",
  appId: "1:744054933624:web:a16b1e73528250628c458d",
  measurementId: "G-GVXPQVWVQ4"
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <FirebaseComponent>
          <Component {...pageProps} />
        </FirebaseComponent>
      </FirebaseAppProvider>
      <Toaster />
    </>
  );
}


function FirebaseComponent({ children }: { children: ReactElement }) {
  const app = useFirebaseApp();
  const firestoreInstance = getFirestore(app);
  const authInstance = getAuth(app);
  return (
    <AuthProvider sdk={authInstance}>
      <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>
    </AuthProvider>
  );
}
