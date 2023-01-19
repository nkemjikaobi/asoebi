import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { HomePage } from "@modules/landingPages";

const Home: NextPage = () => {
  return (
    <BasePageLayout showCoreValues={true} title="Home Page">
      <div className="max-w-[90rem] mx-auto">
        <HomePage />
      </div>
    </BasePageLayout>
  );
};

export default Home;
