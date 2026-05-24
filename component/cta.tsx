import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:px-10 lg:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* CTA Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl">

          <div className="flex flex-col gap-10 p-6 sm:p-8 md:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:p-14 xl:p-16">

            {/* LEFT */}
            <div className="text-center lg:text-left">

              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur sm:text-sm lg:mx-0">
                <HeartPulse className="h-4 w-4" />
                Ready Rocker Wellness
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Ready to rock your back health?
              </h2>

              <p className="mt-5 mx-auto max-w-xl text-sm leading-relaxed text-blue-50 sm:text-base md:text-lg lg:mx-0">
                Improve posture, activate circulation, and feel better while you sit.
                Start your 30-day risk-free trial today.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center justify-center gap-5 lg:items-end lg:justify-end">

              {/* CTA Button */}
              <Button className="h-14 w-full sm:w-auto rounded-2xl bg-white px-6 text-base font-semibold text-black transition hover:bg-slate-100 sm:h-16 sm:px-8 sm:text-lg">
                Order Ready Rocker Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-blue-100 sm:text-sm lg:justify-end">
                <span>Free Shipping</span>
                <span>•</span>
                <span>30-Day Trial</span>
                <span>•</span>
                <span>Lifetime Support</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}