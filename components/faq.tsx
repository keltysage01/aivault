const faqs = [
  {
    question: "What is The AI Vault?",
    answer:
      "The AI Vault is a private community for people who want to use AI better in their work. It includes a Prompt Vault, Tool Talk channel, Risk Radar, daily AI moves, and a place to ask anything — all inside Circle. A premium AI asset workspace is also in development.",
  },
  {
    question: "Who is this for?",
    answer:
      "It's built for creators, entrepreneurs, service providers, and business owners who are already using AI tools like ChatGPT, Claude, or Midjourney but want to go deeper — with better prompts, smarter workflows, and a community who gets it.",
  },
  {
    question: "What will be inside the vault?",
    answer:
      "The live Circle community already includes the Prompt Vault (community-sourced prompts), Tool Talk (AI tool recommendations), Risk Radar (AI safety tips), The Daily Move (a 3-minute AI skill every day), and Ask the Vault (community Q&A). Courses and workflow templates are coming.",
  },
  {
    question: "Is this a full AI app?",
    answer:
      "The full AI asset workspace is still in development. But the Circle community is live now and growing. You can join free today and start getting value immediately.",
  },
  {
    question: "When will founding access open?",
    answer:
      "Founder Access is open right now at $10/month. Join today to lock in founding pricing before it increases. Cancel anytime.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-500">
          Questions
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
          Before you enter the vault.
        </h2>
      </div>

      <div className="grid gap-4">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur"
          >
            <h3 className="text-lg font-black text-vault-slate">
              {faq.question}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
