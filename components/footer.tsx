import { KeyRound } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-10">
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/80 bg-white shadow-sm">
          <KeyRound className="h-5 w-5 text-vault-slate" />
          <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
        </div>
        <div>
          <p className="font-black text-vault-slate">The AI Vault</p>
          <p>Private AI assets, systems, and intelligence.</p>
        </div>
      </div>
      <p>© {new Date().getFullYear()} The AI Vault. All rights reserved.</p>
    </footer>
  );
}
