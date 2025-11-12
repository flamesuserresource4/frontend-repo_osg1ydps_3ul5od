import { useState } from 'react'
import { ArrowRight, CheckCircle2, Code2, Rocket, Shield, Sparkles, Star } from 'lucide-react'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 grid place-items-center text-white font-bold">F</div>
          <span className="font-semibold text-slate-800">Flames Vibe</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
          <a href="#testimonials" className="hover:text-slate-900 transition">Love</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
          <a href="#get-started" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition">
            Get started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
              <Sparkles size={14} /> Build faster with AI
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Launch beautiful apps in minutes, not months
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              An AI-powered workspace that designs, codes, and refines your product in real-time. Ship ideas, iterate rapidly, and focus on what matters.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition shadow">
                Start building free
                <Rocket size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-white transition">
                Explore features
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1 text-amber-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              Loved by makers and teams
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-200/60 to-blue-200/60 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div className="p-4 border-b bg-slate-50/60">
                <div className="h-3 w-3 rounded-full bg-red-400 inline-block mr-1" />
                <div className="h-3 w-3 rounded-full bg-yellow-400 inline-block mr-1" />
                <div className="h-3 w-3 rounded-full bg-green-400 inline-block" />
              </div>
              <div className="p-6 grid gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-xs font-medium text-slate-500">Prompt</div>
                  <div className="mt-1 text-slate-800">“Create a modern landing page with a hero, features, and a call to action.”</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <div className="text-xs font-medium text-slate-500">Preview</div>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500" />
                    <div className="h-16 rounded-lg bg-white border" />
                    <div className="h-16 rounded-lg bg-white border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: <Code2 className="text-indigo-600" size={22} />,
      title: 'AI-assisted coding',
      desc: 'Generate production-quality code, components, and APIs with clear structure.'
    },
    {
      icon: <Shield className="text-indigo-600" size={22} />,
      title: 'Built-in best practices',
      desc: 'Type-safe models, linted code, and sensible defaults out of the box.'
    },
    {
      icon: <Rocket className="text-indigo-600" size={22} />,
      title: 'Instant previews',
      desc: 'See changes live with hot reload and shareable preview links.'
    }
  ]

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Everything you need to launch</h2>
          <p className="mt-3 text-slate-600">
            Focus on your product. We handle the boilerplate, scaffolding, and integrations.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 grid place-items-center">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Clean architecture</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Fast and reliable</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Describe', desc: 'Tell the assistant what you want to build and your style preferences.' },
    { title: 'Generate', desc: 'It scaffolds backend APIs and a polished frontend instantly.' },
    { title: 'Iterate', desc: 'Tune copy, visuals, and flows with natural language edits.' }
  ]
  return (
    <section id="how" className="py-16 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">How it works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center font-semibold">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Ava Chen',
      role: 'Founder, Flux Labs',
      quote: 'We shipped our MVP in a weekend. The live previews and smart defaults are incredible.'
    },
    {
      name: 'Diego Martinez',
      role: 'Engineering Lead',
      quote: 'Clean code, strong patterns, and delightful UX out of the box.'
    }
  ]
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white">
              <p className="text-slate-800 text-lg leading-relaxed">“{q.quote}”</p>
              <div className="mt-4 text-sm text-slate-600">{q.name} — {q.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  const [email, setEmail] = useState('')
  return (
    <section id="get-started" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(800px 300px at 20% 20%, #6366f1 0%, transparent 60%), radial-gradient(600px 300px at 80% 40%, #22d3ee 0%, transparent 60%)'}} />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">Ready to build something great?</h2>
        <p className="mt-3 text-slate-300">Join makers shipping ambitious ideas with AI-powered workflows.</p>
        <form onSubmit={(e)=>{e.preventDefault(); alert(`Thanks! We'll reach out to ${email}`)}} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100">
            Get early access <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-600">
          <div className="h-7 w-7 rounded-md bg-slate-900 text-white grid place-items-center text-sm font-bold">F</div>
          <span>© {new Date().getFullYear()} Flames Vibe</span>
        </div>
        <div className="text-sm text-slate-500">Made with care for builders.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
