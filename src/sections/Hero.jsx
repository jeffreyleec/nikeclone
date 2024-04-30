import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flew-row max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] sx-sm:leading-[82] font-bold">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrivals
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red ">Nike</span> Shoes
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-palanquin text-slate-gray ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
