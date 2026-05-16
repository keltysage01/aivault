"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

const starterGuideUrl = "/the-ai-vault-starter-guide.pdf";

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
      setMessage(data.message ?? "Your free AI starter guide is ready.");
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
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
      <div className="rounded-[3rem] border border-cyan-200 bg-white p-8 shadow-2xl shadow-cyan-100/60 md:p-14">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-500">
          Free Starter Guide
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Start using AI with a guide built by someone self-taught.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Get the free AI Vault starter guide and learn how to organize tools,
          prompts, workflows, and repeatable AI assets without needing a tech
          background.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-[2rem] border border-slate-200 bg-slate-50 p-2 shadow-inner sm:flex-row sm:rounded-full"
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
            className="min-h-12 flex-1 rounded-full bg-transparent px-5 text-vault-slate outline-none placeholder:text-slate-400"
            placeholder="Enter your email"
            autoComplete="email"
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            className="rounded-full bg-vault-slate px-7 py-6 font-bold text-white hover:bg-[#243944]"
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
                Send My Guide
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
                <a
                  href={starterGuideUrl}
                  download
                  className="mt-3 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
                >
                  Download the Free Starter Guide
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
