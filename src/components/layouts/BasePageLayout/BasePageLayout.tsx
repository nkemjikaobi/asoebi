import Head from "next/head";
import React from "react";

import AsoebiCoreValues from "@components/AsoebiCoreValues/AsoebiCoreValues";
import CustomBreadCrumb from "@components/atoms/CustomBreadCrumb/CustomBreadCrumb";

import { IBreadCrumb } from "@dto/IBreadCrumb";

import DesktopFooter from "@layouts/Footer/DesktopFooter/DesktopFooter";
import DesktopNavigation from "@layouts/NavBar/DesktopNavigation/DesktopNavigation";

interface BasePageLayout {
  children: any;
  showNavigation?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  breadcrumbs?: Array<IBreadCrumb>;
}

const BasePageLayout = ({ children, showNavigation, showFooter, title, description, keywords, breadcrumbs }: BasePageLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="smallLaptop:px-0">
        {showNavigation && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:sticky smallLaptop:w-full smallLaptop:top-0 smallLaptop:z-50">
              <DesktopNavigation />
            </div>
          </>
        )}
        <div className="px-[4.5rem] bigLaptop:px-[9rem] pt-6 pb-2">
          <CustomBreadCrumb breadCrumbs={breadcrumbs} />
        </div>
        <hr />
        <main className="h-auto px-[4.5rem] bigLaptop:px-[9rem]">{children}</main>
        <div className="">
          <AsoebiCoreValues />
        </div>
        {showFooter && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:w-full">
              <DesktopFooter />
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
};

export default BasePageLayout;
