import React from "react";

const GOLD = "#d9b56d";

function Icon({ name, className = "" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "arrow") return <svg {...commonProps}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>;
  if (name === "check") return <svg {...commonProps}><path d="M20 6 9 17l-5-5" /></svg>;
  if (name === "shield") return <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>;
  if (name === "truck") return <svg {...commonProps}><path d="M3 7h11v8H3z" /><path d="M14 10h4l3 3v2h-7z" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>;
  if (name === "radio") return <svg {...commonProps}><path d="M8 7h8" /><path d="M8 11h5" /><path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M9 16h.01" /><path d="M15 16h.01" /></svg>;
  if (name === "mountain") return <svg {...commonProps}><path d="m3 20 7-12 4 7 2-3 5 8H3Z" /><path d="m10 8 2 3" /></svg>;
  if (name === "hardhat") return <svg {...commonProps}><path d="M4 14a8 8 0 0 1 16 0" /><path d="M2 14h20" /><path d="M6 14v5h12v-5" /><path d="M9 4v6" /><path d="M15 4v6" /></svg>;
  if (name === "play") return <svg {...commonProps}><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></svg>;
  if (name === "users") return <svg {...commonProps}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (name === "lock") return <svg {...commonProps}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
  if (name === "star") return <svg {...commonProps} fill="currentColor" stroke="none"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" /></svg>;
  return null;
}

function scrollToSection(targetId) {
  if (typeof document === "undefined") return;
  const section = document.querySelector(targetId);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Button({ children, variant = "gold", className = "", href }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold transition duration-200";
  const gold = "bg-[#d9b56d] text-black hover:bg-[#f0cf86] shadow-[0_0_30px_rgba(217,181,109,0.18)]";
  const outline = "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  const styles = variant === "gold" ? gold : outline;

  if (href && href.startsWith("http")) {
    return (
      <a className={`${base} ${styles} ${className}`} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} onClick={href ? () => scrollToSection(href) : undefined} type="button">
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[1.75rem] border border-white/10 bg-white/[0.035] ${className}`}>{children}</div>;
}

const navLinks = [
  ["Program", "#training"],
  ["How It Works", "#process"],
  ["Community", "#community"],
  ["FAQ", "#faq"],
];

const operatorPathway = [
  ["01", "Mine Foundations", "Understanding site layout, flow, and terminology"],
  ["02", "Safety & Awareness", "Hazards, right of way, and operator mindset"],
  ["03", "Equipment Operation", "Cab controls, movement, loading, and dumping"],
  ["04", "Job-Ready Execution", "Real scenarios, communication, and expectations"],
];

const insideSystem = [
  "Pre-start inspections & walkarounds",
  "Haul cycle: load → haul → dump → return",
  "Spotting, positioning & truck awareness",
  "Real radio communication & callouts",
];

const modules = [
  { icon: "mountain", title: "Mine Site Foundations", text: "Understand pit layout, benches, berms, ramps, traffic patterns, ore, waste, and how production actually flows." },
  { icon: "shield", title: "Operator Safety Systems", text: "Build the safety mindset expected on site: blind spots, right of way, hazards, fatigue, communication, and line of fire." },
  { icon: "truck", title: "Haul Truck Operation", text: "Learn pre-starts, cab orientation, loading, tramming, dumping, spotting, braking, grades, and operating discipline." },
  { icon: "radio", title: "Radio & Dispatch Readiness", text: "Know how operators communicate with shovel operators, dispatch, supervisors, light vehicles, and other equipment." },
];

const outcomes = [
  "Think like a mine operator before arriving on site",
  "Understand the language used in real mining operations",
  "Know what supervisors expect from new haul truck trainees",
  "Avoid common beginner mistakes that create safety risk",
  "Build confidence before applying or starting training",
  "Access a focused mining operator community",
];

const steps = [
  ["01", "Enter The Academy", "Start with the foundations so you understand the mine before the machine."],
  ["02", "Train Like You’re On Site", "Move through practical lessons built around real operator expectations."],
  ["03", "Become Job-Ready", "Finish with a stronger understanding of safety, workflow, and operating mindset."],
];

const communityFeatures = [
  ["Weekly Focus", "Know exactly what to study and apply each week."],
  ["Ask Questions", "Get unstuck on terminology, safety, equipment, and career prep."],
  ["Operator Mindset", "Learn how serious operators think before entering the pit."],
  ["Accountability", "Stay consistent instead of watching random videos alone."],
];

const testimonials = [
  "I had no idea how mining worked before this — now I actually understand the job.",
  "I applied way more confidently after going through the training.",
  "This is what I wish I knew before trying to get into mining.",
];

const proofStats = [
  ["Proven", "Students moved into mining roles"],
  ["Online", "Train before your first shift"],
  ["Focused", "Haul truck operator pathway"],
];

const fitItems = [
  "No mining experience but serious about getting in",
  "Willing to work FIFO, camp, or remote-site schedules",
  "Wants a structured understanding before applying",
  "Ready to learn safety, communication, and operator expectations",
];

const notFitItems = [
  "Looking for quick money without effort",
  "Not serious about working in mining",
  "Unwilling to learn safety and site systems properly",
  "Expecting a guaranteed job without preparation",
];

const faqs = [
  ["Do I need mining experience?", "No. The program is designed for complete beginners who want to understand the industry before applying or starting training."],
  ["Does this guarantee a job?", "No. No program can honestly guarantee a job. The goal is to help you become more prepared, confident, and job-ready."],
  ["Is the training online?", "Yes. The program is built as an online training pathway so students can learn before stepping onto a mine site."],
  ["Is there a community?", "Yes. Students can access a focused mining pathway community for support, questions, and accountability."],
  ["Is this focused on Alberta oil sands?", "Yes. The language, expectations, and examples are aligned with haul truck operator pathways in the Alberta oil sands and similar mining environments."],
];

const offerItems = [
  "Full haul truck operator pathway",
  "Mine safety foundations",
  "Real-world terminology",
  "Community access",
  "Lifetime updates",
  "Job-readiness focus",
];

function runSelfTests() {
  console.assert(navLinks.length === 4, "Expected 4 nav links");
  console.assert(navLinks.every((link) => link[1].startsWith("#")), "Expected nav links to be anchor links");
  console.assert(operatorPathway.length === 4, "Expected 4 operator pathway phases");
  console.assert(insideSystem.length >= 4, "Expected at least 4 inside-system bullets");
  console.assert(modules.length === 4, "Expected 4 training modules");
  console.assert(outcomes.length >= 6, "Expected at least 6 outcomes");
  console.assert(steps.length === 3, "Expected 3 process steps");
  console.assert(communityFeatures.length === 4, "Expected 4 community features");
  console.assert(testimonials.length === 3, "Expected 3 testimonials");
  console.assert(proofStats.length === 3, "Expected 3 proof stats");
  console.assert(fitItems.length === 4, "Expected 4 fit items");
  console.assert(notFitItems.length === 4, "Expected 4 not-fit items");
  console.assert(faqs.length >= 5, "Expected at least 5 FAQs");
  console.assert(offerItems.length === 6, "Expected 6 offer items");
  console.assert(typeof GOLD === "string" && GOLD.startsWith("#"), "Expected GOLD to be a hex color");
}

runSelfTests();

export default function MiningAcademyLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        html, body { background-color: #050505 !important; scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 110px; }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/65 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <button className="flex items-center gap-3" onClick={() => scrollToSection("#top")} type="button">
            <img
              src="/logo.png"
              alt="Mining Academy"
              className="h-22 md:h-24 w-auto object-contain"
            />
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-white/62 md:flex">
            {navLinks.map((link) => (
              <button key={link[1]} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => scrollToSection(link[1])} type="button">
                {link[0]}
              </button>
            ))}
          </div>

          <Button href="#offer" className="px-5 py-3">Apply Now</Button>
        </div>
      </nav>

      <section id="top" className="relative min-h-screen border-b border-white/10 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(194,154,74,0.15),transparent_40%),linear-gradient(180deg,rgba(0,0,0,0.4),#050505_90%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#b9904b]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#4d3820]/30 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-14 px-6 pb-16 pt-16 lg:grid-cols-2 lg:pt-24">
          <div className="relative">
            <div className="absolute -left-20 -top-20 -z-10 h-[400px] w-[400px] rounded-full bg-[#d9b56d]/10 blur-[120px]" />
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9b56d]/30 bg-[#d9b56d]/10 px-4 py-2 text-sm text-[#e8c77d]">
              <Icon name="lock" className="h-4 w-4" />
              Premium haul truck operator training
            </div>
            <h1 className="text-5xl font-black leading-[0.88] tracking-[-0.065em] md:text-7xl lg:text-[7.5rem]">
              <span className="text-white/95">Break Into Mining</span>
              <br />
              <span className="text-white/70">With Operator-Level Confidence.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/68 md:text-xl">
              Stop guessing your way into mining. Learn the mine-site language, haul truck workflow, safety mindset, and operator expectations before your first shift.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#offer" className="h-14 px-8 text-base">
                Apply For The Program <Icon name="arrow" className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#training" variant="outline" className="h-14 px-8 text-base">
                <Icon name="play" className="mr-2 h-5 w-5" /> See What You Learn
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {proofStats.map((stat) => (
                <div key={stat[1]} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-2xl font-black tracking-[-0.05em] text-[#d9b56d]">{stat[0]}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{stat[1]}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 inline-flex rounded-full border border-[#d9b56d]/25 bg-[#d9b56d]/10 px-5 py-3 text-sm font-semibold text-[#f0cf86]">
              Students have already gone through the training and moved into mining roles.
            </div>
          </div>

          <div className="relative mt-16 lg:mt-20">
            <div className="absolute inset-0 rounded-[2rem] bg-[#d9b56d]/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-4 shadow-2xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(217,181,109,0.28),transparent_30%),linear-gradient(140deg,#1a1a1a,#050505)] p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs uppercase tracking-[0.28em] text-white/45">
                  <span>Operator Pathway</span>
                  <span>Intake 2026</span>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-[auto_1fr]">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#d9b56d]/20 bg-[#d9b56d]/10 text-[#d9b56d] shadow-[0_0_35px_rgba(217,181,109,0.12)]">
                    <Icon name="truck" className="h-9 w-9" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">Haul Truck Operator Training System</h2>
                    <p className="mt-3 text-sm text-white/55">Structured to mirror real mine-site progression.</p>
                    <div className="mt-5 rounded-full border border-white/10 bg-black/30 p-1">
                      <div className="h-2 w-[42%] rounded-full bg-gradient-to-r from-[#7d5b2d] to-[#d9b56d]" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.22em] text-white/35">
                      <span>Foundation</span>
                      <span>Job-ready</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-black/25 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Training Sequence</p>
                    <span className="rounded-full border border-[#d9b56d]/20 bg-[#d9b56d]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0cf86]">4 Phases</span>
                  </div>
                  <div className="space-y-3">
                    {operatorPathway.map((phase, index) => (
                      <div key={phase[0]} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                        {index < operatorPathway.length - 1 ? <div className="absolute left-[27px] top-[54px] h-5 w-px bg-[#d9b56d]/25" /> : null}
                        <div className="flex items-start gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d9b56d]/30 bg-[#d9b56d]/10 text-[10px] font-bold text-[#d9b56d]">{phase[0]}</span>
                          <div>
                            <h3 className="font-semibold tracking-[-0.02em] text-white">{phase[1]}</h3>
                            <p className="mt-1 text-sm text-white/50">{phase[2]}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#d9b56d]/40 to-transparent" />
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Inside The System</p>
                    <div className="mt-4 grid gap-3">
                      {insideSystem.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-white/65">
                          <Icon name="check" className="h-4 w-4 shrink-0 text-[#d9b56d]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-center">
                    <p className="text-3xl font-black tracking-[-0.06em] text-[#d9b56d]">42%</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/35">Preview unlocked</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-[#d9b56d]/25 bg-[#d9b56d]/10 p-4 text-center text-sm font-semibold text-[#f0cf86]">
                  Designed to make you think like an operator before your first shift
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 text-center md:grid-cols-4">
          {["Mine Foundations", "Safety Systems", "Haul Truck Basics", "Job-Ready Mindset"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-white/70">{item}</div>
          ))}
        </div>
      </section>

      <section id="training" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">The Program</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">Most people apply before they understand the mine.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/62">Mining is not just driving a big truck. It is safety, communication, production flow, equipment awareness, and decision-making under site rules. This program gives beginners the foundation most people never get before they apply.</p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((module) => (
              <Card key={module.title} className="text-white transition hover:bg-white/[0.06]">
                <div className="p-7">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9b56d]/15 text-[#d9b56d]">
                    <Icon name={module.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-[-0.02em]">{module.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/58">{module.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a] py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">Transformation</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">From outsider to industry-ready.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/62">The goal is not to overwhelm you with theory. The goal is to help you sound, think, and prepare like someone who understands the job before the first day.</p>
          </div>
          <div className="grid gap-3">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d9b56d] text-black">
                  <Icon name="check" className="h-5 w-5" />
                </div>
                <span className="text-white/76">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">How It Works</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Simple path. Serious training.</h2>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step[0]} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.025] p-8">
                <div className="text-5xl font-black tracking-[-0.08em] text-[#d9b56d]/70">{step[0]}</div>
                <h3 className="mt-10 text-2xl font-bold tracking-[-0.03em]">{step[1]}</h3>
                <p className="mt-4 leading-relaxed text-white/58">{step[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="border-y border-white/10 bg-[#090909] py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(217,181,109,0.22),transparent_36%),#0d0d0d] p-6 shadow-2xl">
            <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#d9b56d]/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9b56d]/10 text-[#d9b56d]">
                    <Icon name="users" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Mining Academy Community</p>
                    <p className="text-xs text-white/40">Private operator pathway network</p>
                  </div>
                </div>
                <span className="rounded-full border border-[#d9b56d]/20 bg-[#d9b56d]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0cf86]">Included</span>
              </div>
              <div className="mt-6 space-y-4">
                {communityFeatures.map((feature) => (
                  <div key={feature[0]} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d9b56d] text-black">
                        <Icon name="check" className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-[-0.02em]">{feature[0]}</h3>
                        <p className="mt-1 text-sm text-white/50">{feature[1]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">Community</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">You are not just buying lessons. You are entering the operator pathway.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/62">Most beginners try to break into mining alone. The community gives students a focused space to ask questions, stay accountable, understand the industry, and build confidence around others serious about the same goal.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[["01", "Guidance"], ["02", "Structure"], ["03", "Momentum"]].map((stat) => (
                <div key={stat[0]} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-3xl font-black tracking-[-0.06em] text-[#d9b56d]">{stat[0]}</p>
                  <p className="mt-2 text-sm font-semibold text-white/70">{stat[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">Fit Check</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Who this is for.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">This program is built for serious beginners — not people looking for shortcuts.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d9b56d]/20 bg-[radial-gradient(circle_at_50%_0%,rgba(217,181,109,0.12),transparent_42%),#0d0d0d] p-7">
              <h3 className="text-2xl font-black tracking-[-0.04em]">This is for you if...</h3>
              <div className="mt-6 grid gap-3">
                {fitItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-white/72">
                    <Icon name="check" className="h-5 w-5 shrink-0 text-[#d9b56d]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7">
              <h3 className="text-2xl font-black tracking-[-0.04em] text-white/80">This is not for you if...</h3>
              <div className="mt-6 grid gap-3">
                {notFitItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-white/55">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/15 text-xs text-white/35">×</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">Real Proof</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">Students have already moved into mining roles.</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/62">This is not theory. Students have already gone through the training and used it to build confidence, understand the industry, and move toward real mining opportunities.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div key={stat[1]} className="rounded-[1.5rem] border border-[#d9b56d]/20 bg-[radial-gradient(circle_at_50%_0%,rgba(217,181,109,0.14),transparent_45%),#0d0d0d] p-6 text-center">
                  <p className="text-5xl font-black tracking-[-0.08em] text-[#d9b56d]">{stat[0]}</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/45">{stat[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/30 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em]">Why the training works</h3>
                <p className="mt-4 leading-relaxed text-white/58">Most beginners apply before they understand how mining hiring works, what operators actually do, or what supervisors expect on site. This program closes that gap before students walk into interviews or training.</p>
              </div>
              <div className="grid gap-3">
                {["Understand the industry before applying", "Learn operator expectations before site training", "Avoid beginner mistakes that create safety risk", "Show up more prepared than the average applicant"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-white/70">
                    <Icon name="check" className="h-5 w-5 shrink-0 text-[#d9b56d]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">Student Feedback</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Confidence is the first result.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((quote) => (
              <Card key={quote} className="text-white">
                <div className="p-8">
                  <div className="mb-7 flex gap-1 text-[#d9b56d]">
                    {[1, 2, 3, 4, 5].map((star) => <Icon key={star} name="star" className="h-4 w-4" />)}
                  </div>
                  <p className="text-xl leading-relaxed tracking-[-0.02em]">“{quote}”</p>
                  <p className="mt-8 text-sm text-white/40">Student feedback</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-[#090909] py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">FAQ</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Questions before applying?</h2>
          </div>
          <div className="mt-14 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq[0]} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-bold tracking-[-0.02em] text-white">{faq[0]}</h3>
                <p className="mt-3 leading-relaxed text-white/58">{faq[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="border-t border-white/10 bg-[#0a0a0a] py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b56d]">Program Application</p>
          <h2 className="mt-5 text-4xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl">Apply before the next opportunity shows up.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">Build operator-level confidence through structured training, community support, and job-readiness preparation before stepping onto site.</p>
          <div className="mt-12 rounded-[2.25rem] border border-[#d9b56d]/25 bg-[radial-gradient(circle_at_50%_0%,rgba(217,181,109,0.17),transparent_35%),#080808] p-6 text-left shadow-2xl md:p-10">
            <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl font-black tracking-[-0.04em]">Mining Academy Access</h3>
                <p className="mt-3 text-white/55">Training, community, updates, operator pathway support, and a proven foundation already used by students moving toward mining roles.</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/40">Program Status</p>
                <p className="text-3xl font-black tracking-[-0.05em] text-[#d9b56d]">Open Now</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {offerItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/72">
                  <Icon name="check" className="h-5 w-5 text-[#d9b56d]" /> {item}
                </div>
              ))}
            </div>
            <Button href="#offer" className="mt-10 h-16 w-full text-lg">
              Apply For The Program <Icon name="arrow" className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-5 text-center text-xs text-white/35">No job is guaranteed. The goal is to make serious beginners more prepared, more confident, and more job-ready.</p>
          </div>
        </div>
      </section>

      <button className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center rounded-full border border-[#d9b56d]/25 bg-[#d9b56d] px-6 py-3 text-sm font-black text-black shadow-[0_20px_80px_rgba(217,181,109,0.28)] transition hover:bg-[#f0cf86] md:hidden" onClick={() => scrollToSection("#offer")} type="button">
        Apply For The Program
      </button>
    </main>
  );
}
