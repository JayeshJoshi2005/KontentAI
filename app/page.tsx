import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header className="flex items-center justify-between w-full px-6 py-4 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
        <h1 className="text-2xl font-bold text-purple-600">KontentAI</h1>
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className="text-sm text-gray-700 dark:text-neutral-300 hover:text-blue-600"
          >
            Get Started →
          </Button>
        </Link>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-white via-slate-100 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
        <div className="max-w-5xl mx-auto text-center px-6 py-28">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-800 dark:text-white">
            Effortless AI Content
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Generator
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400">
            Turn your ideas into high-converting content in seconds. Blogs,
            emails, social captions — one click away.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              >
                Try It Now →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🧠",
              title: "25+ Templates",
              desc: "From product descriptions to newsletters. Pick a format and go.",
            },
            {
              icon: "🎨",
              title: "Fully Customizable",
              desc: "Tailor every detail — tone, length, keywords. Your style, your way.",
            },
            {
              icon: "💸",
              title: "Forever Free Plan",
              desc: "Start generating with zero cost. Upgrade only when you need more.",
            },
            {
              icon: "⚡",
              title: "Instant Results",
              desc: "Built with Gemini API — fast, accurate, humanlike outputs.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
