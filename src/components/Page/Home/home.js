import React, { useState } from "react";
import { useGlobalContext } from "../../Context";

import "./Home.scss";

const Home = () => {
  const { test } = useGlobalContext();

  return <div>Home</div>;
};

export default Home;
