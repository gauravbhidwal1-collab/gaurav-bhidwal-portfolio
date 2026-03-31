import { Navbar } from './components/Navbar'
import { BackgroundOrbs, StarfieldBackground } from './components/Background'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { FinalCta } from './components/FinalCta'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-clip bg-zinc-950 text-zinc-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <BackgroundOrbs />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-zinc-950">
        <StarfieldBackground />
      </div>

      <Navbar />

      <main id="main" className="animate-in pb-24 sm:pb-28">
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
