"use client";

import { useState } from "react";

const tools = [
  {
    icon: "📊",
    title: "Presentation",
    text: "Create impressive PPTs",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: "📄",
    title: "Project Report",
    text: "Build reports easily",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: "🎨",
    title: "Poster Maker",
    text: "Make attractive posters",
    color: "from-orange-500 to-yellow-400",
  },
  {
    icon: "💻",
    title: "Coding Project",
    text: "Build your project",
    color: "from-green-500 to-emerald-400",
  },
];

const templates = [
  {
    emoji: "🤖",
    title: "AI & Machine Learning",
    category: "Technology",
  },
  {
    emoji: "🌐",
    title: "Web Development",
    category: "Computer Science",
  },
  {
    emoji: "📱",
    title: "Mobile App",
    category: "Technology",
  },
  {
    emoji: "🌱",
    title: "Sustainable Future",
    category: "Environment",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-white">

      {/* Background graphics */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="absolute left-[8%] top-[25%] text-5xl opacity-10">
          ✦
        </div>
        <div className="absolute right-[12%] top-[18%] text-7xl opacity-10">
          ◇
        </div>
        <div className="absolute bottom-[20%] right-[25%] text-6xl opacity-10">
          ✧
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="relative z-10 border-b border-white/10 bg-[#070b18]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 text-2xl shadow-lg shadow-purple-500/30">
              ⚡
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight">
                Project<span className="text-cyan-400">Arena</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Build • Create • Shine
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm text-white/80 hover:text-cyan-400">
              Home
            </a>
            <a href="#templates" className="text-sm text-white/80 hover:text-cyan-400">
              Templates
            </a>
            <a href="#tools" className="text-sm text-white/80 hover:text-cyan-400">
              Tools
            </a>
            <a href="#ideas" className="text-sm text-white/80 hover:text-cyan-400">
              Ideas
            </a>
          </div>

            <button
  onClick={() => {
    window.location.href = "/create";
  }}
  className="rounded-xl bg-white px-6 py-3 font-bold text-black hover:scale-105 transition"
>
  Get Started →
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-16">

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">

          {/* LEFT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <span className="animate-pulse">●</span>
              Your creative project playground
            </div>

            <h2 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turn your
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}ideas
              </span>
              <br />
              into amazing
              <br />
              projects.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              ProjectArena helps students create presentations, reports,
              posters, websites and college projects without making
              everything complicated.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-2xl items-center rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl backdrop-blur-xl">
              <span className="px-3 text-xl">🔍</span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What project are you building?"
                className="w-full bg-transparent px-2 py-3 text-white outline-none placeholder:text-white/30"
              />

              <button className="rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-3 font-bold text-white">
                Create
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/40">
              <span>Try:</span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                AI Project
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                College PPT
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                Business Plan
              </span>
            </div>
          </div>

          {/* ANIME-INSPIRED GRAPHIC */}
          <div className="relative mx-auto h-[420px] w-full max-w-[430px]">

            <div className="absolute inset-10 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-3xl" />

            {/* Orbit */}
            <div className="absolute inset-8 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-cyan-400/20" />

            {/* Character card */}
            <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 rotate-2 rounded-[35px] border border-white/10 bg-gradient-to-br from-[#171d35] to-[#0b1020] p-6 shadow-2xl shadow-purple-900/40">

              <div className="absolute -right-4 -top-4 rounded-full border border-pink-400/30 bg-pink-400/10 px-3 py-2 text-sm">
                ✨
              </div>

              {/* Original anime-style mascot */}
              <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20">
                <div className="text-center">

                  <div className="text-7xl">🧑‍🎓</div>

                  <div className="mt-2 flex justify-center gap-2 text-xs">
                    <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-cyan-300">
                      CREATE
                    </span>
                    <span className="rounded-full bg-purple-400/10 px-2 py-1 text-purple-300">
                      LEVEL UP
                    </span>
                  </div>

                </div>
              </div>

              <div className="mt-5 text-center">
                <p className="text-xl font-black">
                  Student Mode <span className="text-cyan-400">✦</span>
                </p>
                <p className="mt-1 text-sm text-white/40">
                  Make your project stand out.
                </p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="text-2xl">🎨</div>
              <p className="mt-1 text-xs font-bold">Design</p>
            </div>

            <div className="absolute bottom-16 right-0 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="text-2xl">🚀</div>
              <p className="mt-1 text-xs font-bold">Launch</p>
            </div>

            <div className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="text-2xl">💡</div>
              <p className="mt-1 text-xs font-bold">Ideas</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="relative z-10 border-y border-white/10 bg-white/[0.025] py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Everything you need
            </p>

            <h3 className="mt-3 text-3xl font-black sm:text-4xl">
              Build projects without the headache.
            </h3>

            <p className="mt-3 max-w-2xl text-white/50">
              Pick a tool, choose a template and start creating.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {tools.map((tool) => (
              <div
                key={tool.title}
                className="group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08]"
              >

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-2xl shadow-lg`}
                >
                  {tool.icon}
                </div>

                <h4 className="text-lg font-bold">
                  {tool.title}
                </h4>

                <p className="mt-2 text-sm text-white/40">
                  {tool.text}
                </p>

                <div className="mt-5 text-sm font-bold text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  Start creating →
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="templates" className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-400">
              Project templates
            </p>

            <h3 className="mt-3 text-3xl font-black sm:text-4xl">
              Start with something awesome.
            </h3>
          </div>

          <button className="text-sm font-bold text-cyan-400">
            View all templates →
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {templates.map((template, index) => (

            <div
              key={template.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-2"
            >

              <div
                className={`flex h-44 items-center justify-center rounded-2xl ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/10"
                    : "bg-gradient-to-br from-pink-500/20 to-orange-500/10"
                }`}
              >
                <span className="text-7xl transition duration-300 group-hover:scale-125">
                  {template.emoji}
                </span>
              </div>

              <div className="pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {template.category}
                </p>

                <h4 className="mt-2 text-lg font-bold">
                  {template.title}
                </h4>

                <button className="mt-4 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">
                  Use template
                </button>
              </div>
            </div>

          ))}

        </div>
      </section>

      {/* WHY PROJECT ARENA */}
      <section id="ideas" className="relative z-10 px-6 pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-600/20 via-[#11182d] to-cyan-500/10 p-8 sm:p-12">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-400">
                Made for students
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Your project should look as good as your idea.
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-white/50">
                Stop submitting boring projects. ProjectArena gives you
                templates, graphics, layouts and creative tools so you can
                focus on your idea instead of fighting with design software.
              </p>

              <button className="mt-8 rounded-2xl bg-white px-6 py-3 font-bold text-black transition hover:scale-105">
                Enter ProjectArena ✦
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur">
                <div className="text-4xl">⚡</div>
                <p className="mt-4 text-2xl font-black">Fast</p>
                <p className="mt-1 text-sm text-white/40">
                  Start in minutes
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur">
                <div className="text-4xl">🎮</div>
                <p className="mt-4 text-2xl font-black">Fun</p>
                <p className="mt-1 text-sm text-white/40">
                  Create your way
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur">
                <div className="text-4xl">✨</div>
                <p className="mt-4 text-2xl font-black">Creative</p>
                <p className="mt-1 text-sm text-white/40">
                  Beautiful graphics
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur">
                <div className="text-4xl">🏆</div>
                <p className="mt-4 text-2xl font-black">Stand Out</p>
                <p className="mt-1 text-sm text-white/40">
                  Impress your class
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <p className="font-black">
              Project<span className="text-cyan-400">Arena</span> ⚡
            </p>

            <p className="mt-1 text-xs text-white/30">
              Built for students who want to create something better.
            </p>
          </div>

          <p className="text-xs text-white/30">
            © 2026 ProjectArena. Create something amazing.
          </p>

        </div>

      </footer>

    </main>
  );
}