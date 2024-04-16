import "@/styles/app.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
