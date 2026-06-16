"use client";

import Link from "next/link";
import {
  Mail,
  ArrowRight,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Benefits", href: "/benefits" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Affiliate Program", href: "/affiliate" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Return Policy", href: "/returns" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Cookie Policy", href: "/cookie" },
  ],
};

const icons =
  [
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
  ];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10">

        {/* Footer Grid */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[1.2fr,2fr]">

          {/* Brand */}
          <div>

            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>

              <div>
                <div className="text-2xl font-bold tracking-tight">
                  Ready Rocker
                </div>

                <div className="text-sm text-slate-400">
                  Active Sitting Technology
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-8 max-w-md text-base leading-relaxed text-slate-400">
              Ready Rocker helps people improve posture, reduce stiffness,
              and activate movement while sitting at work or home.
            </p>

            {/* Newsletter */}
            <div className="mt-10">

              <div className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Join Our Newsletter
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">

                <form action={""} className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none backdrop-blur transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </form>

                <Button className="h-14 rounded-2xl bg-blue-600 px-6 text-white hover:bg-blue-500">
                  Subscribe
                </Button>

              </div>

            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-4">

              {icons.map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <Icon className="h-5 w-5 text-slate-300" />
                </Link>
              ))}

            </div>

          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>

                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  {title}
                </h3>

                <ul className="mt-6 space-y-4">

                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-slate-400 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <div>
            © 2026 Ready Rocker. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}