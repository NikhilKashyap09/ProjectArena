"use client";

import { useState } from "react";

const templates = [
  {
    name: "Anime Neon",
    emoji: "🌸",
    bg: "from-purple-950 via-fuchsia-900 to-cyan-950",
  },
  {
    name: "Cyber Tech",
    emoji: "🤖",
    bg: "from-slate-950 via-blue-950 to-cyan-950",
  },
  {
    name: "Academic",
    emoji: "📚",
    bg: "from-indigo-950 via-slate-900 to-purple-950",
  },
  {
    name: "Creative",
    emoji: "🎨",
    bg: "from-pink-950 via-purple-900 to-orange-950",
  },
];

export default function CreateProject() {
  const [title, setTitle] = useState("My Amazing Project");
  const [description, setDescription] = useState(
    "A creative project made with ProjectArena."
  );
  const [student, setStudent] = useState("Your Name");
  const [projectIdea, setProjectIdea] = useState("");
  const [template, setTemplate] = useState(templates[0]);
  const [graphic, setGraphic] = useState("🌸");
  const [saved, setSaved] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [stage, setStage] = useState(0);
  const [problem, setProblem] = useState("");
const [targetUsers, setTargetUsers] = useState("");
const [objective, setObjective] = useState("");
const [outcome, setOutcome] = useState("");
const [modules, setModules] = useState("");
const [architecture, setArchitecture] = useState("");
const [techStack, setTechStack] = useState("");
const [userFlow, setUserFlow] = useState("");
  return (
    <main className="min-h-screen bg-[#060814] text-white">
      {/* TOP BAR */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#060814]/90 px-5 py-4 backdrop-blur-xl">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-xl">
            ⚡
          </div>

          <div>
            <div className="font-black">
              Project<span className="text-cyan-400">Arena</span>
            </div>

            <div className="text-[9px] tracking-[0.2em] text-white/40">
              PROJECT CREATOR
            </div>
          </div>
        </a>

        <div className="flex gap-2">
          <button
            onClick={() => {
              setSaved(true);
              setTimeout(() => setSaved(false), 2000);
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold hover:bg-white/10"
          >
            {saved ? "✓ Saved" : "💾 Save"}
          </button>

          <button
            onClick={() => window.print()}
            className="rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 text-sm font-bold"
          >
            📥 Export
          </button>
        </div>
      </header>

      {/* MAIN EDITOR */}
      <div className="grid min-h-[calc(100vh-73px)] lg:grid-cols-[300px_1fr_300px]">
        {/* LEFT SIDEBAR */}
        <aside className="border-r border-white/10 bg-white/[0.02] p-5">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Create
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Build your project
            </h2>
          </div>

          {/* PROJECT DETAILS */}
          <div className="space-y-4">
            {/* TITLE */}
            <div>
              <label className="mb-2 block text-xs font-bold text-white/60">
                Project Title
              </label>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-purple-400"
              />
            </div>

            {/* STUDENT */}
            <div>
              <label className="mb-2 block text-xs font-bold text-white/60">
                Student Name
              </label>

              <input
                value={student}
                onChange={(e) => setStudent(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-purple-400"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="mb-2 block text-xs font-bold text-white/60">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-purple-400"
              />
            </div>

            {/* PROJECT IDEA */}
            <div>
              <label className="mb-2 block text-xs font-bold text-white/60">
                💡 Project Idea
              </label>

              <textarea
                value={projectIdea}
                onChange={(e) => setProjectIdea(e.target.value)}
                placeholder="Example: AI system that detects fake news"
                rows={4}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* AI BUTTON */}
          <button
            onClick={() => {
              if (projectIdea.trim()) {
                setTitle("AI-Powered Smart Project");
                setDescription(
                  `An innovative project based on: ${projectIdea}`
                );
                setGenerated(true);
              } else {
                setDescription(
                  "Enter a project idea first so ProjectArena can improve it."
                );
              }
            }}
            className="mt-6 w-full rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-3 text-sm font-bold text-purple-200 hover:bg-purple-500/20"
          >
            ⚡ Generate Project
          </button>
        </aside>

        {/* CENTER PREVIEW */}
        <section className="flex flex-col items-center justify-center bg-[#0b0f20] p-6 md:p-10">
          <div className="mb-5 flex w-full max-w-4xl items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30">
                Live Preview
              </p>

              <h2 className="text-lg font-bold">
                Your project cover
              </h2>
            </div>

            <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-300">
              ● Live
            </span>
          </div>

          {/* PROJECT CANVAS */}
          <div
            className={`relative aspect-video w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${template.bg} p-8 shadow-2xl md:p-14`}
          >
            {/* Decorative graphics */}
            <div className="absolute -right-10 -top-10 text-[180px] opacity-10">
              {graphic}
            </div>

            <div className="absolute bottom-0 left-0 text-[140px] opacity-10">
              ✦
            </div>

            <div className="absolute right-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur">
              PROJECTARENA
            </div>

            <div className="relative flex h-full flex-col justify-center">
              <div className="mb-5 text-5xl">
                {graphic}
              </div>

              <div className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
                STUDENT PROJECT
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                {title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                {description}
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Created by
                </p>

                <p className="mt-1 text-lg font-bold">
                  {student}
                </p>
              </div>
            </div>

            {/* Anime character */}
            <div className="absolute bottom-5 right-7 text-7xl drop-shadow-2xl md:text-8xl">
              🧙‍♂️
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-white/30">
            Changes appear instantly in the preview.
          </p>
          {/* ARENA STAGES */}
<div className="mt-8 w-full max-w-4xl">
  <div className="mb-4">
    <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
      Project Arena
    </p>

    <h2 className="mt-1 text-2xl font-black">
      Build → Test → Defend
    </h2>
  </div>

  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
    {[
      ["G0", "Define", "💡"],
      ["G1", "Design", "🎨"],
      ["G2", "Build", "⚙️"],
      ["G3", "Test", "🧪"],
      ["G4", "Improve", "🚀"],
      ["G5", "Defend", "🏆"],
    ].map(([code, name, emoji], index) => (
      <button
        key={code}
        onClick={() => setStage(index)}
        className={`rounded-2xl border p-4 text-left transition ${
          stage === index
            ? "border-cyan-400 bg-cyan-400/10"
            : "border-white/10 bg-white/5 hover:bg-white/10"
        }`}
      >
        <div className="text-2xl">{emoji}</div>

        <div className="mt-3 text-xs font-bold text-white/40">
          {code}
        </div>

        <div className="mt-1 font-bold">
          {name}
        </div>
      </button>
    ))}
  </div>

  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
  <p className="text-xs uppercase tracking-widest text-white/30">
    Current Stage
  </p>

  <h3 className="mt-2 text-xl font-black">
    {[
      "Define your project",
      "Design your solution",
      "Build your project",
      "Test your project",
      "Improve your project",
      "Defend your project",
    ][stage]}
  </h3>

  {/* G0 DEFINE WORKSPACE */}
  {stage === 0 && (
    <div className="mt-6 space-y-4">
      <div>
        <label className="mb-2 block text-sm font-bold">
          🎯 Problem Statement
        </label>

        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="What problem does your project solve?"
          rows={3}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
        />
      </div>{/* G1 DESIGN WORKSPACE */}
{stage === 1 && (
  <div className="mt-6 space-y-4">
    <div>
      <label className="mb-2 block text-sm font-bold">
        🧩 Project Modules
      </label>

      <textarea
        value={modules}
        onChange={(e) => setModules(e.target.value)}
        placeholder="Example: Login, Dashboard, AI Detection, Reports"
        rows={3}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-bold">
        🏗️ System Architecture
      </label>

      <textarea
        value={architecture}
        onChange={(e) => setArchitecture(e.target.value)}
        placeholder="Describe how the major parts of your project connect."
        rows={3}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-bold">
        🛠️ Technology Stack
      </label>

      <input
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        placeholder="Example: Next.js, Python, FastAPI, PostgreSQL"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-bold">
        🔄 User Flow
      </label>

      <textarea
        value={userFlow}
        onChange={(e) => setUserFlow(e.target.value)}
        placeholder="Example: User → Login → Dashboard → Upload → AI Analysis → Result"
        rows={3}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
      />
    </div>

    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
      <p className="text-sm font-bold text-cyan-300">
        ✓ G1 Design
      </p>

      <p className="mt-1 text-xs text-white/40">
        Design the architecture and structure before starting development.
      </p>
    </div>
  </div>
)}

      <div>
        <label className="mb-2 block text-sm font-bold">
          👥 Target Users
        </label>

        <input
          value={targetUsers}
          onChange={(e) => setTargetUsers(e.target.value)}
          placeholder="Who will use your project?"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold">
          🎯 Project Objective
        </label>

        <textarea
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          placeholder="What do you want to achieve?"
          rows={3}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold">
          💡 Expected Outcome
        </label>

        <textarea
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
          placeholder="What result do you expect?"
          rows={3}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-cyan-400"
        />
      </div>

      <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-4">
        <p className="text-sm font-bold text-green-300">
          ✓ G0 Define
        </p>

        <p className="mt-1 text-xs text-white/40">
          Clearly define the problem before moving to the design stage.
        </p>
      </div>
    </div>
  )}
</div>
</div>
          {generated && (
  <div className="mt-8 w-full max-w-4xl rounded-3xl border border-purple-400/20 bg-white/[0.03] p-6">
    <div className="mb-5">
      <p className="text-xs font-bold uppercase tracking-widest text-purple-400">
        Project Blueprint
      </p>

      <h2 className="mt-1 text-2xl font-black">
        Your project structure is ready 🚀
      </h2>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-lg">🎯 Problem Statement</div>
        <p className="mt-2 text-sm leading-6 text-white/50">
          This project addresses a real-world problem related to your idea:
          <span className="text-white/80"> {projectIdea}</span>
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-lg">💡 Proposed Solution</div>
        <p className="mt-2 text-sm leading-6 text-white/50">
          A technology-based solution designed to solve the identified
          problem efficiently.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-lg">🧩 Main Modules</div>
        <p className="mt-2 text-sm leading-6 text-white/50">
          User Interface • Core System • Data Processing • Analytics
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-lg">🛠️ Technology Stack</div>
        <p className="mt-2 text-sm leading-6 text-white/50">
          React • Next.js • Python • FastAPI • Database
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-lg">✨ Key Features</div>
        <p className="mt-2 text-sm leading-6 text-white/50">
          Smart interface • Automated processing • Analytics • AI assistance
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-lg">🗺️ Development Roadmap</div>
        <p className="mt-2 text-sm leading-6 text-white/50">
          Define → Design → Build → Test → Improve → Defend
        </p>
      </div>
    </div>
  </div>
)}
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="border-l border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Customize
          </p>

          <h2 className="mt-1 text-2xl font-black">
            Make it attractive
          </h2>

          {/* TEMPLATES */}
          <div className="mt-7">
            <h3 className="mb-3 text-sm font-bold">
              🎨 Templates
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {templates.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setTemplate(item)}
                  className={`rounded-xl border p-3 text-left transition ${
                    template.name === item.name
                      ? "border-cyan-400 bg-cyan-400/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="text-2xl">
                    {item.emoji}
                  </div>

                  <div className="mt-2 text-xs font-bold">
                    {item.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* GRAPHICS */}
          <div className="mt-7">
            <h3 className="mb-3 text-sm font-bold">
              ✨ Graphics
            </h3>

            <div className="grid grid-cols-4 gap-2">
              {["🌸", "🔥", "🤖", "🦋", "⚡", "🧙", "🚀", "🌙"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setGraphic(item)}
                    className={`rounded-xl border p-3 text-2xl ${
                      graphic === item
                        ? "border-purple-400 bg-purple-400/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* PROJECT TYPES */}
          <div className="mt-7">
            <h3 className="mb-3 text-sm font-bold">
              📄 Project Type
            </h3>

            <div className="space-y-2">
              {[
                ["📊", "Presentation"],
                ["📑", "Report"],
                ["🎨", "Poster"],
                ["🌐", "Website"],
              ].map(([emoji, name]) => (
                <button
                  key={name}
                  className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left text-sm hover:bg-white/10"
                >
                  <span>{emoji}</span>
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TIP */}
          <div className="mt-7 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4">
            <div className="text-sm font-bold">
              💡 Pro Tip
            </div>

            <p className="mt-2 text-xs leading-5 text-white/40">
              Keep your title short, use strong visuals and avoid putting too
              much text on one page.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}