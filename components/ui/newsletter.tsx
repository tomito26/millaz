"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

/**
 * "Join the audience" email capture. No backend wired — captures locally and
 * shows a confirmation so the flow can be demoed.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section className="section-x py-20">
      <div className="grain vignette relative overflow-hidden rounded-3xl bg-stage px-6 py-14 text-center md:px-12">
        <div className="spotlight-glow pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <Ticket className="mx-auto mb-4 h-8 w-8 stroke-footlight" />
          <p className="kicker mb-3">Never Miss a Show</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Join the <span className="text-footlight">Audience</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper-dim md:text-base">
            Be first to hear about new productions, opening nights, and
            exclusive ticket offers.
          </p>
          {done ? (
            <p className="mt-8 font-display text-xl italic text-footlight">
              You&apos;re on the list — see you at the theatre! 🎭
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-paper-dim/50 outline-none transition-colors focus:border-footlight focus:ring-2 focus:ring-footlight/30"
              />
              <Button type="submit" className="btn-sweep shrink-0">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
