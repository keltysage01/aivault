"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

const starterKitUrl = "https://aivault-community.circle.so/c/ai-starter-kit";
const founderCheckoutUrl =
  "https://aivault-community.circle.so/join?invitation_token=227a939eb64527adba73d8c46158ed6c37caad37-d49b6959-440f-489c-bb1b-7bf0ea8d51e0";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!emailPattern.test(trimmedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });
      const data = (await response.json()) as {
        message?: string;
        downloadUrl?: string;
      };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to join the waitlist.");
      }

      setStatus("success");
      setMessage(data.message ?? "You're on the list. Head into Circle for the free starter kit.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-10">
      <div className="rounded-[2rem] border border-cyan-200 bg-white p-5 shadow-2xl shadow-cyan-100/60 sm:rounded-[3rem] sm:p-8 md:p-14">
        <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-500 sm:text-sm sm:tracking-[0.35em]">
          Community is live
        </p>
        <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-[-0.035em] sm:text-4xl md:text-6xl">
          The vault is already open. Get inside.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          While the full workspace is in development, The AI Vault Circle is
          live and growing. Start free with the AI Starter Kit, then unlock the
          full community — Prompt Vault, Tool Talk, Risk Radar, Daily Moves, and
          more — for $10/month.
        </p>

        <div className="mx-auto mt-7 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
          {[
            "Free AI Starter Kit — no credit card needed",
            "Founder Access — $10/month, cancel anytime",
            "Live community — people using AI right now",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-black leading-5 text-vault-slate"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-cyan-500 px-5 font-black text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 sm:w-auto sm:px-7"
          >
            <a href={starterKitUrl} target="_blank" rel="noreferrer">
              Get the Free Starter Kit <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-auto min-h-[52px] w-full whitespace-normal rounded-full bg-vault-slate px-5 py-4 text-center font-black leading-tight text-white shadow-lg shadow-slate-400/20 hover:bg-[#243944] sm:w-auto sm:px-7 sm:py-6"
          >
            <a href={founderCheckoutUrl} target="_blank" rel="noreferrer">
              Join Founder Access for $10/month
            </a>
          </Button>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-xs font-bold uppercase leading-6 tracking-[0.22em] text-slate-400 sm:text-sm sm:tracking-[0.25em]">
          Get notified when new vault drops go live:
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-4 flex max-w-xl flex-col gap-3 rounded-[2rem] border border-slate-200 bg-slate-50 p-2 shadow-inner sm:flex-row sm:rounded-full"
        >
          <label className="sr-only" htmlFor="waitlist-email">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "loading") {
                setStatus("idle");
                setMessage("");
              }
            }}
            className="min-h-12 w-full min-w-0 flex-1 rounded-full bg-transparent px-5 text-vault-slate outline-none placeholder:text-slate-400"
            placeholder="Enter your email"
            autoComplete="email"
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            className="w-full rounded-full bg-vault-slate px-5 py-6 font-bold text-white hover:bg-[#243944] sm:w-auto sm:px-7"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Joining
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 className="h-5 w-5" />
                Joined
              </>
            ) : (
              <>
                Keep Me Updated
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-4 min-h-6" aria-live="polite">
          {message ? (
            <div>
              <p
                className={
                  status === "error"
                    ? "text-sm font-semibold text-red-600"
                    : "text-sm font-semibold text-cyan-700"
                }
              >
                {message}
              </p>
              {status === "success" ? (
                <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={starterKitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-full bg-cyan-500 px-5 py-3 text-center text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 sm:w-auto"
                  >
                    Open the Free Starter Kit
                  </a>
                  <a
                    href={founderCheckoutUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-full bg-vault-slate px-5 py-3 text-center text-sm font-black leading-tight text-white shadow-lg shadow-slate-400/20 transition hover:bg-[#243944] sm:w-auto"
                  >
                    Join Founder Access for $10/month
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
