import type { NextPage } from "next";

import { LoginPage } from "@modules/authPages";

const Home: NextPage = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Home;
