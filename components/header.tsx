import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const founderCheckoutUrl =
  "https://aivault-community.circle.so/checkout/join-the-ai-vault";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Vault System", href: "#vault" },
  { label: "Founder Access", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-6 lg:px-10">
      <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="The AI Vault home">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/80 bg-white shadow-sm">
          <KeyRound className="h-5 w-5 text-vault-slate" />
          <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            The
          </p>
          <p className="text-xl font-black tracking-tight text-vault-slate">
            AI Vault
          </p>
        </div>
      </a>

      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-cyan-500">
            {item.label}
          </a>
        ))}
      </nav>

      <Button asChild className="rounded-full px-5 text-white">
        <a href={founderCheckoutUrl} target="_blank" rel="noreferrer">
          Join for $10/mo
        </a>
      </Button>
    </header>
  );
}
