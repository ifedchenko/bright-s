"use client";

import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Timer/Timer";
import Text from "@/components/Text/Text";
import ButtonUp from "@/components/ButtonUp/ButtonUp";

const Home: React.FC = () => {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <>
      <Header showFirst={showFirst} />
      <main style={{ paddingTop: "180px" }}>
        <Text />
        <Timer setShowFirst={setShowFirst} />
        <Text />
        <ButtonUp />
      </main>
      <Footer showFirst={showFirst} />
    </>
  );
};

export default Home;
