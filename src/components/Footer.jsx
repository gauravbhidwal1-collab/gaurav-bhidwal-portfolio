import { PERSON } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 pb-[max(2rem,env(safe-area-inset-bottom,0px)+1rem)] pt-8">
      <div className="page-gutter flex flex-col items-center justify-between gap-4 text-center text-sm leading-relaxed text-zinc-500 sm:flex-row sm:text-left">
        <p>
          © {year} {PERSON.name}. All rights reserved.
        </p>
        <p className="text-zinc-600">
          Built with React, Vite, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
