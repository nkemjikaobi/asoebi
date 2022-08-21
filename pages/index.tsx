import type { NextPage } from "next";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";

import { HomePage } from "@modules/landingPages";

const Home: NextPage = () => {
  return (
    <BasePageLayout title="Home Page">
      <HomePage />
    </BasePageLayout>
  );
};

export default Home;
