import React, { useState } from "react";
import { useGlobalContext } from "../../Context";

import "./Home.scss";

const Home = () => {
  const { test } = useGlobalContext();

  return (
    <div>
      <h1>Bug Fix</h1>
    </div>
  );
};

export default Home;
