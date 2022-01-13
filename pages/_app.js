import "../styles/globals.scss";
// import '../styles/globals.css'
import React, { useEffect, useState } from "react";
// import 'tailwindcss/tailwind.css'
import { Layout } from "../components";
// import { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
  function MyApp({ Component, pageProps } ) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
