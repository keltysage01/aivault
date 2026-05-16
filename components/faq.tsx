const faqs = [
  {
    question: "What is The AI Vault?",
    answer:
      "The AI Vault is a private, premium workspace for organizing AI tools, prompts, templates, workflows, content systems, business intelligence, and repeatable AI assets.",
  },
  {
    question: "Who is this for?",
    answer:
      "It is built for creators, entrepreneurs, service providers, and modern business owners who want their best AI assets organized instead of scattered across chats, notes, docs, and screenshots.",
  },
  {
    question: "What will be inside the vault?",
    answer:
      "Expect prompt libraries, workflow maps, content engines, offer builders, brand voice systems, client process templates, automation ideas, and practical AI operating assets.",
  },
  {
    question: "Is this a full AI app?",
    answer:
      "Not yet. The first version is a beautiful landing page and waitlist for a premium AI asset workspace. The waitlist will guide launch access and future product direction.",
  },
  {
    question: "When will founding access open?",
    answer:
      "Founding access will open after the first private vault experience is ready. Joining the waitlist is the best way to get launch updates and early pricing.",
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
