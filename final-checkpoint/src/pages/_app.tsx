import { Provider } from "react-redux";
import "../styles/index.css";
import "@/styles/loader/loader.css";
import type { AppProps } from "next/app";
import store from "@/states";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
