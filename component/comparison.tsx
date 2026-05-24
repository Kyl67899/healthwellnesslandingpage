"use client";

import { motion } from "framer-motion";
import {
  Check,
  X,
  MoveRight,
  BadgeDollarSign,
  Armchair,
  Waves,
} from "lucide-react";

const rows = [
  {
    feature: "Passive Back Support",
    cushion: true,
    chair: true,
    rocker: true,
  },
  {
    feature: "Active Rocking Motion",
    cushion: false,
    chair: false,
    rocker: true,
  },
  {
    feature: "Improves Circulation",
    cushion: false,
    chair: false,
    rocker: true,
  },
  {
    feature: "Engages Core",
    cushion: false,
    chair: false,
    rocker: true,
  },
  {
    feature: "Portable / Travel Friendly",
    cushion: true,
    chair: false,
    rocker: true,
  },
];

export default function Comparison() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 px-6 py-28 md:px-20">

      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-200/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Waves className="h-4 w-4" />
            Why Ready Rocker Wins
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Not a Cushion.
            <span className="block">
              Not a Chair.
            </span>

            <span className="mt-2 block bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Something Better.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Most back products only support your posture.
            Ready Rocker actively keeps your body moving while you work.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <div className="mt-20 hidden overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl md:block">

          {/* Table Header */}
          <div className="grid grid-cols-4 border-b border-slate-200">

            <div className="bg-slate-50 p-8">
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Features
              </div>
            </div>

            {/* Cushion */}
            <div className="border-l border-slate-200 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <BadgeDollarSign className="h-6 w-6 text-slate-700" />
              </div>

              <div className="mt-4 text-2xl font-bold">
                Cushion
              </div>

              <div className="mt-1 text-slate-500">
                $25
              </div>
            </div>

            {/* Chair */}
            <div className="border-l border-slate-200 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <Armchair className="h-6 w-6 text-slate-700" />
              </div>

              <div className="mt-4 text-2xl font-bold">
                Ergonomic Chair
              </div>

              <div className="mt-1 text-slate-500">
                $799
              </div>
            </div>

            {/* Ready Rocker */}
            <div className="relative border-l border-blue-200 bg-linear-to-b from-blue-50 to-white p-8 text-center">

              {/* Popular badge */}
              <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                BEST VALUE
              </div>

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                <MoveRight className="h-6 w-6 text-white" />
              </div>

              <div className="mt-4 text-2xl font-bold text-slate-900">
                Ready Rocker
              </div>

              <div className="mt-1 font-semibold text-blue-600">
                $99
              </div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 border-b border-slate-100 last:border-none"
            >
              {/* Feature */}
              <div className="flex items-center bg-slate-50/60 p-6 text-lg font-semibold text-slate-900">
                {row.feature}
              </div>

              {/* Cushion */}
              <div className="flex items-center justify-center border-l border-slate-100 p-6">
                {row.cushion ? (
                  <Check className="h-6 w-6 text-green-500" />
                ) : (
                  <X className="h-6 w-6 text-red-400" />
                )}
              </div>

              {/* Chair */}
              <div className="flex items-center justify-center border-l border-slate-100 p-6">
                {row.chair ? (
                  <Check className="h-6 w-6 text-green-500" />
                ) : (
                  <X className="h-6 w-6 text-red-400" />
                )}
              </div>

              {/* Ready Rocker */}
              <div className="flex items-center justify-center border-l border-blue-100 bg-blue-50/40 p-6">
                {row.rocker ? (
                  <div className="rounded-full bg-blue-600 p-2 shadow-lg">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                ) : (
                  <X className="h-6 w-6 text-red-400" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="mt-14 space-y-5 md:hidden">

          {rows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-bold text-slate-900">
                {row.feature}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">

                <div>
                  <div className="text-sm font-medium text-slate-500">
                    Cushion
                  </div>

                  <div className="mt-2 flex justify-center">
                    {row.cushion ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-slate-500">
                    Chair
                  </div>

                  <div className="mt-2 flex justify-center">
                    {row.chair ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                </div>

                <div className="rounded-2xl bg-blue-50 p-3">
                  <div className="text-sm font-semibold text-blue-700">
                    Ready Rocker
                  </div>

                  <div className="mt-2 flex justify-center">
                    {row.rocker ? (
                      <div className="rounded-full bg-blue-600 p-1.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    ) : (
                      <X className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-2xl font-bold leading-relaxed text-slate-900 md:text-4xl">
            Cushions support your back.
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600 md:text-5xl">
            Ready Rocker supports movement.
          </p>
        </motion.div>

      </div>
    </section>
  );
}