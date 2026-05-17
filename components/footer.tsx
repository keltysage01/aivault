export function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-10">
      <div className="flex items-center gap-3">
        <img
          src="/the-ai-vault-logo.png"
          alt="The AI Vault"
          className="h-12 w-auto max-w-[180px] object-contain"
        />
        <div>
          <p>The private community for people who use AI to get real work done.</p>
        </div>
      </div>
      <p>© {new Date().getFullYear()} The AI Vault. All rights reserved.</p>
    </footer>
  );
}
