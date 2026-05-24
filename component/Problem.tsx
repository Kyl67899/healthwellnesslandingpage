"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const meds = [
  {
    title: "15 Minutes",
    text: "Spinal compression begins",
  },
  {
    title: "30 Minutes",
    text: "Blood flow slows drastically",
  },
  {
    title: "Throughout The Day",
    text: "Posture collapses and energy drains",
  },
  {
    title: "Mental Fatigue",
    text: "Your brain stops getting enough oxygen",
  },
];

export default function Problem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".problem-reveal",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-24 md:px-20"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="problem-reveal inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            The Sitting Problem
          </div>

          <h2 className="problem-reveal mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            You’re Not Getting Up Every 30 Minutes.
            <span className="block text-red-600">
              And That’s a Problem.
            </span>
          </h2>

          <p className="problem-reveal mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
            We’re supposed to get up and move every 30 minutes.
            But let’s be real:
          </p>

          <p className="problem-reveal mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Unless you work alone in a treehouse, the moment you start doing desk yoga mid-meeting is the moment someone starts filming you for their Instagram story.
          </p>
        </motion.div>

        {/* Quote Block */}
        <div className="problem-reveal mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Reality Check
          </div>

          <blockquote className="mt-4 text-2xl font-semibold leading-relaxed text-slate-900 md:text-3xl">
            “Hey folks, mind pausing this meeting while I hit a quick downward dog?”
          </blockquote>

          <p className="mt-4 text-slate-600">
            Yeah… probably not happening.
          </p>
        </div>

        {/* Main Body */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">

          {/* Left Text */}
          <div className="problem-reveal">
            <p className="text-lg leading-relaxed text-slate-600">
              Deadlines. Calls. Meetings. Hypnotic screens.
              Sitting becomes automatic — and movement disappears.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              First off, the discipline required is immense…
              and even when you know you should move,
              real life gets in the way.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                The Real Issue
              </div>

              <p className="mt-3 text-lg font-medium text-slate-900">
                Static sitting slowly shuts your body down.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-5">

            {meds.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="problem-reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-2xl font-bold text-red-600">
                  {item.title}
                </div>

                <p className="mt-2 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="problem-reveal mt-16 rounded-3xl bg-black px-8 py-10 text-center text-white shadow-2xl"
        >
          <p className="text-2xl font-bold leading-relaxed md:text-4xl">
            Lumbar Cushions can’t fix movement.
            <span className="block text-blue-400">
              But Ready Rocker can.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}