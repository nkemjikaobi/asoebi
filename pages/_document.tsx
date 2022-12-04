import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

/**
 * This is a document class that contains meta links for our application
 * @return {void}
 */
class MyDocument extends Document {
  /**
   *
   * @return {jsx}
   */
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,500&display=swap" rel="stylesheet" />
        </Head>
        <body className="font-rubik box-border">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
