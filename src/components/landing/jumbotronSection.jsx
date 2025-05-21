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
        <Container className="pt-[40%] flex flex-col items-center text-center md:pt-[10%]">
          {/* Top span */}
          <div className="bg-darkBlue w-fit text-nowrap text-veryLightBlue rounded-2xl py-1 px-3 flex items-center gap-2">
            <div className="flex">
              {spanArray.map((_, i) => (
                <span
                  key={i}
                  className="w-5 h-5 bg-veryLightBlue block rounded-full border-2 border-solid border-darkBlue"
                />
              ))}
            </div>
            <p>Built 100+ Personal Brands</p>
          </div>

          {/* Main Title */}
          <div className="mt-10 text-4xl font-semibold leading-[1.3] text-center md:text-7xl">
            <p className="text-slate-500">Empowering Your Brand with</p>
            <p className="text-darkBlue text-nowrap ">Creative Excellence</p>
          </div>

          {/* Desc */}
          <p className="mt-5 px-3 text-gray-600 text-lg md:text-xl">
            Strategic printing that turns your brand into impact
          </p>

          {/* Call to action */}
          <Button
            size="sm"
            variant="darkPrimary"
            href="/getstarted"
            className={`z-10 mt-5 text-xl px-10 !rounded-3xl !border-0 hover:!bg-transparent hover:!border-2 hover:!border-darkBlue`}
          >
            Get started
          </Button>
        </Container>
      </div>
    </section>
  );
};
