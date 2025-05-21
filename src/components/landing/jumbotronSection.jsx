import React from "react";
import { motion } from "framer-motion";

import { Button } from "../button";
import { Container } from "../container";

export const JumbotronSection = () => {
  let spanArray = [];
  for (let i = 1; i < 4; i++) {
    spanArray.push(i);
  }
  return (
    <section className="bg-veryLightBlue">
      <div className="h-screen">
        <Container className="pt-[10%] flex flex-col items-center">
          {/* Top span */}
          <div className="bg-darkBlue w-fit text-veryLightBlue rounded-2xl py-1 px-3 flex items-center gap-2">
            <div className="flex">
              {spanArray.map((_, i) => (
                <span className="w-5 h-5 bg-veryLightBlue block rounded-full border-2 border-solid border-darkBlue" />
              ))}
            </div>
            <p>Built 100+ Personal Brands</p>
          </div>

          {/* Main Title */}
          <div className="mt-10 text-7xl font-semibold leading-[1.4] text-center">
            <p className="text-gray-500">Empowering Your Brand with</p>
            <p className="text-darkBlue">Creative Excellence</p>
          </div>
        </Container>
      </div>
    </section>
  );
};
