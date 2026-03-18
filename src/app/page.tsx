export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <main className="max-w-xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          AffirmBot
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Personalized daily affirmations, delivered via WhatsApp.
        </p>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-left">
          <h2 className="text-xl font-semibold text-zinc-200">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-400">
            <li>
              Save our number:{" "}
              <span className="font-mono text-zinc-200">+1 (415) 523-8886</span>
            </li>
            <li>
              Send{" "}
              <span className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-emerald-400">
                join &lt;sandbox-code&gt;
              </span>{" "}
              to opt in to the Twilio sandbox
            </li>
            <li>
              Send any message &mdash; tell us how you feel, what you need, or
              just say hi
            </li>
            <li>
              Get a personalized AI-generated affirmation back instantly
            </li>
          </ol>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-left">
          <h2 className="text-xl font-semibold text-zinc-200">Examples</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="text-zinc-500">You:</p>
              <p className="text-zinc-300">&quot;I&apos;m feeling anxious about my presentation tomorrow&quot;</p>
            </div>
            <div>
              <p className="text-zinc-500">AffirmBot:</p>
              <p className="text-emerald-400">
                &quot;You have prepared well and your knowledge shines through. Tomorrow
                you will speak with clarity and confidence. Trust the work
                you&apos;ve put in.&quot;
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-zinc-600">
          Powered by Groq &amp; Llama 3.3. Built with Next.js.
        </p>
      </main>
    </div>
  );
}
