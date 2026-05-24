"use client";

import { motion } from "framer-motion";
import { HeartPulse, Award, MapPin, Users } from "lucide-react";
import Link from "next/link";

const location = [
    {
        title: "TIME Best Inventions 2024",
        desc: "Recognized globally for redefining seating innovation.",
    },
    {
        title: "Founded in 2017",
        desc: "Built with years of ergonomic research and development.",
    },
    {
        title: "Irvine, California",
        desc: "Headquartered in the heart of innovation and design.",
    },
]

export default function AboutPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* HERO */}
            <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-20">
                <div className="mx-auto max-w-6xl text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                            <HeartPulse className="h-4 w-4" />
                            About Ready Rocker
                        </div>

                        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                            The World’s First Portable Rocking System
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                            A patented innovation designed to bring motion back into sitting—
                            improving posture, circulation, and everyday comfort.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* STORY SECTION */}
            <section className="px-6 py-20 md:px-10 lg:px-20 bg-slate-50">
                <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold md:text-5xl">
                            Built by parents. Designed for everyone.
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            Ready Rocker was created by parents who experienced firsthand how
                            long hours of sitting impact the body. They wanted something simple:
                            a way to stay in motion without leaving your seat.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                            The result is a patented portable rocking system that transforms
                            any chair, sofa, or surface into an active sitting experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 p-10 text-white shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold">Our Mission</h3>
                        <p className="mt-4 text-blue-50">
                            To make healthy movement a natural part of sitting—so people feel better
                            without changing their daily routines.
                        </p>

                        <div className="mt-8 space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <Users className="h-5 w-5" />
                                Designed for everyday users
                            </div>

                            <div className="flex items-center gap-3">
                                <HeartPulse className="h-5 w-5" />
                                Focused on wellness & posture
                            </div>

                            <div className="flex items-center gap-3">
                                <Award className="h-5 w-5" />
                                Award-winning innovation
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="px-6 py-24 md:px-10 lg:px-20">
                <div className="mx-auto max-w-6xl text-center">

                    <h2 className="text-3xl font-bold md:text-5xl">
                        Recognized for Innovation
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">

                        {location.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-3xl border bg-white p-8 shadow-sm"
                            >
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mt-3 text-slate-600">{item.desc}</p>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="bg-slate-900 px-6 py-24 text-white md:px-10 lg:px-20">
                <div className="mx-auto max-w-5xl text-center">

                    <h2 className="text-3xl font-bold md:text-5xl">
                        Movement belongs in every seat.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                        Ready Rocker is redefining how people sit, work, and feel every day.
                    </p>

                    <Link
                        href="/"
                        className="mt-10 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500"
                    >
                        Explore Ready Rocker
                    </Link>

                </div>
            </section>

        </main>
    );
}