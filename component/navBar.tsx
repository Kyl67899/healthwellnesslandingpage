"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Benefits", href: "/benefits" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-xl">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <HeartPulse className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Ready Rocker
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Button className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-500">
            Get Ready Rocker
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6 text-slate-800" />
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.35 }}
                className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-5">
                  <span className="font-semibold">Menu</span>
                  <button onClick={() => setOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 px-6 py-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-slate-700 transition hover:text-black"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="absolute bottom-0 w-full border-t p-6">
                  <Button className="w-full rounded-xl bg-blue-600 text-white hover:bg-blue-500">
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}