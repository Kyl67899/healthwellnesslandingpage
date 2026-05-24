"use client";

import { motion } from "framer-motion";
import {
  Play,
  Star,
  Quote,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Within a week my back pain was gone.",
    name: "Marissa",
    role: "Office Manager",
    image:
      "../public/next.svg",
  },
  {
    quote:
      "I use it during Zoom calls and don’t even notice how much better I feel until the end of the day.",
    name: "Jake",
    role: "Designer",
    image:
      "../public/vercel.svg",
  },
  {
    quote:
      "It keeps me moving while I work. I won’t sit without it.",
    name: "Chris",
    role: "Writer",
    image:
      "../public/window.svg",
  },
];

const videos = [
  {
    title: "How Ready Rocker Changed My Workday",
    duration: "1:42",
    image:
      "../public/file.svg",
  },
  {
    title: "My Back Pain Relief Experience",
    duration: "2:14",
    image:
      "../public/globe.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-20">

      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
            <CheckCircle2 className="h-4 w-4" />
            Trusted By 100,000+ Users
          </div>

          <h2 className="mt-6 font-bold max-text-3xl leading-tight tracking-tight text-white md:text-4xl">
            Why
            <span className="mx-3 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              100,000+
            </span>
            Users Rock Daily
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            Real people. Real workdays.
            Real movement that actually feels good.
          </p>

          {/* Stars */}
          <div className="mt-8 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/10"
            >

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              </div>

              <Quote className="relative z-10 h-10 w-10 text-blue-400" />

              <p className="relative z-10 mt-6 text-xl leading-relaxed text-slate-100">
                “{item.quote}”
              </p>

              {/* User */}
              <div className="relative z-10 mt-8 flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-blue-400/30"
                />

                <div>
                  <div className="font-semibold text-white">
                    {item.name}
                  </div>

                  <div className="text-sm text-slate-400">
                    {item.role}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Video Testimonials */}
        <div className="mt-24">

          <div className="mb-10 text-center">
            <h3 className="text-3xl font-bold md:text-5xl">
              Watch Real Users In Action
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              See how Ready Rocker fits naturally into everyday work life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl"
              >

                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">

                  <Image
                    src={video.image}
                    alt={video.title}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl transition group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8 fill-white text-white" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                    {video.duration}
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white">
                    {video.title}
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Everyday comfort. Better posture. Less stiffness.
                  </p>
                </div>

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
          className="mt-24 text-center"
        >
          <p className="text-3xl font-bold leading-tight md:text-5xl">
            People don’t just sit with Ready Rocker.
          </p>

          <p className="mt-4 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            They feel the difference.
          </p>
        </motion.div>

      </div>
    </section>
  );
}