import React from "react";
import { motion } from "framer-motion";

import { Button } from "../button";
import { Container } from "../container";
import jumbo1 from "../../assets/img-2.jpg";
import jumbo2 from "../../assets/img-4.jpg";
import jumbo3 from "../../assets/img-6.jpg";

export const JumbotronSection = () => {
  const imgStyles = "h-[250px] w-[340px] object-cover rounded-2xl";

  let spanArray = [];
  for (let i = 1; i < 4; i++) {
    spanArray.push(i);
  }
  return (
    <section className="bg-veryLightBlue pb-20">
      <div className="">
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
            className={`z-10 mt-5 text-xl px-10 !py-2 !rounded-3xl !border-0 hover:!bg-transparent hover:!border-2 hover:!border-darkBlue`}
          >
            Get started
          </Button>

          {/* Image section */}
          <div className="flex justify-between w-full mt-14">
            <img
              src={jumbo1}
              alt=""
              className={`${imgStyles} transform rotate-6`}
            />
            <img src={jumbo2} alt="" className={`${imgStyles} mt-5`} />
            <img
              src={jumbo3}
              alt=""
              className={`${imgStyles} transform -rotate-6`}
            />
          </div>
        </Container>
      </div>
    </section>
  );
};
