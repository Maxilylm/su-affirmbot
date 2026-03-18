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

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-xl font-semibold text-zinc-200">
            Get started in seconds
          </h2>
          <p className="mt-4 text-zinc-400">
            Send{" "}
            <span className="rounded bg-zinc-800 px-2 py-1 font-mono text-emerald-400">
              join mouse-next
            </span>{" "}
            to{" "}
            <span className="font-mono text-zinc-200">+1 (415) 523-8886</span>{" "}
            on WhatsApp to connect to the sandbox.
          </p>

          <a
            href="https://wa.me/14155238886?text=join%20mouse-next"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-emerald-500"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Open WhatsApp
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-left">
          <h2 className="text-xl font-semibold text-zinc-200">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-400">
            <li>
              Tap <strong className="text-zinc-200">Open WhatsApp</strong> above
              (or send{" "}
              <span className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-emerald-400">
                join mouse-next
              </span>{" "}
              to{" "}
              <span className="font-mono text-zinc-200">+1 (415) 523-8886</span>
              )
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
              <p className="text-zinc-300">
                &quot;I&apos;m feeling anxious about my presentation
                tomorrow&quot;
              </p>
            </div>
            <div>
              <p className="text-zinc-500">AffirmBot:</p>
              <p className="text-emerald-400">
                &quot;You have prepared well and your knowledge shines through.
                Tomorrow you will speak with clarity and confidence. Trust the
                work you&apos;ve put in.&quot;
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
