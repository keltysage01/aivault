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
      <a
        href="#top"
        className="flex min-w-0 items-center"
        aria-label="The AI Vault home"
      >
        <img
          src="/the-ai-vault-logo.png"
          alt="The AI Vault"
          className="h-14 w-auto max-w-[190px] object-contain sm:h-16 sm:max-w-[230px]"
        />
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
          Join for $10/month
        </a>
      </Button>
    </header>
  );
}
