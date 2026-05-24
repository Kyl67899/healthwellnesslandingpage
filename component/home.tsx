"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const cir = [
  "Activate circulation",
  "Improve posture",
  "Relieve pressure",
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-white to-slate-100 px-6 py-20 md:px-20">

      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative z-10 grid items-center gap-16 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Active Sitting Technology
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Your Body Wasn’t Built to Sit Still And Slouch.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Fix Your Posture. Move your back. Stimulate it. Save it.
            Ready Rocker is the only portable back movement device designed
            to keep your back straight and your body active while you sit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="h-14 rounded-xl px-8 text-base font-semibold">
              Try It Risk-Free for 30 Days
            </Button>

            <div className="flex items-center text-sm text-slate-500">
              Free Shipping • 30-Day Trial
            </div>
          </div>

          {/* Overlay Benefit Chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {cir.map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Floating glass card */}
          <div className="absolute -left-6 top-10 z-20 hidden rounded-2xl border border-white/30 bg-white/70 p-4 shadow-2xl backdrop-blur md:block">
            <div className="text-sm font-semibold text-slate-800">
              Active Sitting
            </div>
            <div className="mt-1 text-xs text-slate-500">
              Gentle rocking improves circulation
            </div>
          </div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="../public/next.svg"
              alt="Desk worker leaning back into Ready Rocker mid-email"
              width={1200}
              height={1400}
              priority
              className="h-full w-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-transparent" />

            {/* Bottom overlay text */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2">
                {cir.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 backdrop-blur"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative blur orb */}
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}