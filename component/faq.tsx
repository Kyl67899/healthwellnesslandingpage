"use client";

import { useState } from "react";

const faqs = [
  { q: "How long should I use it?", a: "2–5 minutes every 30–45 min." },
  { q: "Does it work anywhere?", a: "Yes — any chair or sofa." },
  { q: "Return policy?", a: "30-day no hassle returns." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-20 py-24 bg-white">
      <h2 className="text-3xl font-bold mb-8">FAQ</h2>

      {faqs.map((f, i) => (
        <div key={i} className="border rounded-lg mb-3">
          <button
            className="w-full text-left p-4 font-semibold"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {f.q}
          </button>

          {open === i && (
            <div className="p-4 text-slate-600">{f.a}</div>
          )}
        </div>
      ))}
    </section>
  );
}