export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For developers who stay sharp
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track which coding skills<br />
          <span className="text-[#58a6ff]">are getting rusty</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          DevDecay analyzes your GitHub commit history to surface languages and frameworks you haven&apos;t touched in months — then suggests bite-sized refresher projects so you never fall behind.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start tracking for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. GitHub OAuth required.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Skill Decay Analysis</h3>
            <p className="text-sm text-[#8b949e]">Scans your repos and commit history to score each language and framework by recency and frequency.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Decay Timeline</h3>
            <p className="text-sm text-[#8b949e]">Visual timeline showing when you last used each skill and how fast it&apos;s fading from your active repertoire.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🛠️</div>
            <h3 className="font-semibold text-white mb-1">Refresher Projects</h3>
            <p className="text-sm text-[#8b949e]">Personalized mini-project ideas matched to your rusty skills so you can practice in context, not in isolation.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Full GitHub repo analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Skill decay scores &amp; timeline</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Weekly refresher project suggestions</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email digest every Monday</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cancel anytime</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does the GitHub analysis work?</h3>
            <p className="text-sm text-[#8b949e]">You connect your GitHub account via OAuth. DevDecay reads your public and private repo metadata and commit history to calculate a decay score for each language and framework you&apos;ve used.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">What counts as a &quot;rusty&quot; skill?</h3>
            <p className="text-sm text-[#8b949e]">Any language or framework you actively used in the past but haven&apos;t committed code in for 60+ days is flagged. The longer the gap, the higher the decay score.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes — cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        &copy; {new Date().getFullYear()} DevDecay. All rights reserved.
      </footer>
    </main>
  );
}
