import Head from "next/head";
import React, { ReactNode } from "react";

import AsoebiCoreValues from "@components/AsoebiCoreValues/AsoebiCoreValues";
import CustomBreadCrumb from "@components/atoms/CustomBreadCrumb/CustomBreadCrumb";
import Footer from "@components/layouts/Footer/Footer/Footer";

import { IBreadCrumb } from "@dto/IBreadCrumb";

import DesktopNavigation from "@layouts/NavBar/DesktopNavigation/DesktopNavigation";

import MobileNavigation from "../NavBar/MobileNavigation/MobileNavigation";

interface BasePageLayout {
  children: ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  breadcrumbs?: Array<IBreadCrumb>;
  showCoreValues?: boolean;
}

const BasePageLayout = ({ children, showNavigation, showFooter, title, description, keywords, breadcrumbs, showCoreValues }: BasePageLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="smallLaptop:px-0 smallLaptop:bg-asoebiGray-100">
        {showNavigation && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:sticky smallLaptop:w-full smallLaptop:top-0 smallLaptop:z-50">
              <DesktopNavigation />
            </div>
            <div className="block sticky w-full top-0 z-50 smallLaptop:hidden">
              <MobileNavigation />
            </div>
          </>
        )}
        {breadcrumbs && breadcrumbs?.length > 0 && (
          <>
            <div className="pt-6 pb-2">
              <CustomBreadCrumb breadCrumbs={breadcrumbs} />
            </div>
          </>
        )}
        <hr />
        <main className="h-auto px-4 smallLaptop:px-[7.25rem] max-w-[90rem] mx-auto smallLaptop:pl-[7.375rem] normalLaptop:pl-[12.375rem] overflow-x-hidden">{children}</main>
        {showCoreValues && (
          <div>
            <AsoebiCoreValues />
          </div>
        )}
        {showFooter && (
          <>
            <div>
              <Footer />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

BasePageLayout.defaultProps = {
  showFooter: true,
  showNavigation: true,
  title: "My Asoebi",
  description: "",
  keywords: "asoebi, ankara, material, weddings",
  breadcrumbs: [],
  showCoreValues: false,
};

export default BasePageLayout;
