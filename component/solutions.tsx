"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Brain, Waves, ArrowRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: Activity,
    title: "Activates Circulation",
    text: "Gentle rocking helps blood move instead of pooling while you sit.",
  },
  {
    icon: Waves,
    title: "Relieves Spinal Pressure",
    text: "Micro-movement reduces stiffness and compression buildup throughout the day.",
  },
  {
    icon: Brain,
    title: "Keeps Your Body Engaged",
    text: "Movement stimulates focus, posture awareness, and sustained energy.",
  },
];

export default function Solution() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Floating image parallax
      gsap.to(imageRef.current, {
        y: -80,
        rotateY: 8,
        rotateX: 6,
        transformPerspective: 1200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Background glow movement
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-20"
    >
      {/* Background glow */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Top Header */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
              The Breakthrough Behind Ready Rocker
            </div>

            <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-7xl">
              Meet the First-Ever
              <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Active Sitting Back Support System
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
              Most back products support your body while it stays still.
              Ready Rocker does something radically different:
            </p>

            <p className="mt-6 max-w-3xl text-2xl font-semibold leading-relaxed text-white">
              It keeps your body gently moving while you sit.
            </p>
          </motion.div>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid items-center gap-16 md:grid-cols-2">

          {/* LEFT VISUAL */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating glass card */}
            <div className="absolute -left-6 top-10 z-20 hidden rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:block">
              <div className="text-sm font-semibold text-blue-300">
                Patented Motion Technology
              </div>

              <div className="mt-2 text-xs text-slate-300">
                Resistance + rebound movement system
              </div>
            </div>

            {/* Product image */}
            <div className="overflow-hidden rounded-[36px] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
              <Image
                src="../public/vercel.svg"
                alt="Ready Rocker motion system"
                className="h-full w-full object-cover"
                width={50}
                height={50}
                loading="lazy"
              />
            </div>

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-[36px] border border-blue-400/20" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>

            <div className="space-y-6">

              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">

                    <div className="rounded-2xl bg-blue-500/10 p-3">
                      <item.icon className="h-6 w-6 text-blue-300" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-relaxed text-slate-300">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* Science Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 rounded-3xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 to-cyan-400/5 p-8"
            >
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                Backed By Science
              </div>

              <p className="mt-4 text-lg leading-relaxed text-slate-200">
                Studies show that rhythmic movement stimulates the vestibular system,
                increases venous return, and reduces stiffness.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                <ArrowRight className="h-4 w-4" />
                Journal of Physiology, 2019
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="mx-auto max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            Ready Rocker doesn’t just support your back.
          </h3>

          <p className="mt-4 text-2xl font-medium text-blue-300 md:text-4xl">
            It teaches your body to move again.
          </p>
        </motion.div>
      </div>
    </section>
  );
}