import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { VaultSystem } from "@/components/vault-system";
import { VideoSection } from "@/components/video-section";
import { WaitlistSection } from "@/components/waitlist-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-vault-soft text-vault-slate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute left-[-180px] top-[35%] h-[380px] w-[380px] rounded-full bg-slate-700/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[20%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <VideoSection />
        <Features />
        <VaultSystem />
        <WaitlistSection />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
