"use client"

import Comparison from "@/component/comparison";
import FinalCTA from "@/component/cta";
import FAQ from "@/component/faq";
import Hero from "@/component/home";
import Price from "@/component/price";
import Problem from "@/component/Problem";
import Solution from "@/component/solutions";
import Testimonials from "@/component/testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Problem />
      <Solution />
      <Comparison />
      <Testimonials />
      <Price />
      <FAQ />
      <FinalCTA />
    </main>
  );
}