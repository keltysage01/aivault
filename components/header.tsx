import { Button } from "@/components/ui/button";

const founderCheckoutUrl =
  "https://aivault-community.circle.so/join?invitation_token=227a939eb64527adba73d8c46158ed6c37caad37-d49b6959-440f-489c-bb1b-7bf0ea8d51e0";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Vault System", href: "#vault" },
  { label: "Founder Access", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-6 sm:gap-5 sm:px-6 lg:px-10">
      <a
        href="#top"
        className="flex min-w-0 items-center"
        aria-label="The AI Vault home"
      >
        <img
          src="/the-ai-vault-logo.png"
          alt="The AI Vault"
          className="h-12 w-auto max-w-[140px] object-contain min-[360px]:max-w-[170px] sm:h-16 sm:max-w-[230px]"
        />
      </a>

      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-cyan-500">
            {item.label}
          </a>
        ))}
      </nav>

      <Button asChild className="h-9 rounded-full px-3 text-xs text-white min-[360px]:px-4 sm:h-10 sm:px-5 sm:text-sm">
        <a href={founderCheckoutUrl} target="_blank" rel="noreferrer">
          Join for $10/month
        </a>
      </Button>
    </header>
  );
}
