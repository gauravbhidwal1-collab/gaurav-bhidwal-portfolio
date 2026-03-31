import { motion, useReducedMotion } from 'framer-motion'

/** Renders copy with **highlighted** segments as bold accent text. */
function RichText({ text, className = '' }) {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-violet-200">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </p>
  )
}

export function SnapshotCard({ eyebrow, title, body, className = '' }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.article
      className={`group relative flex h-full min-w-0 flex-col ${className}`}
      whileHover={reduceMotion ? {} : { scale: 1.025, y: -6 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.125rem] bg-gradient-to-br from-violet-500/50 via-indigo-500/25 to-blue-600/40 opacity-60 blur-sm transition duration-300 group-hover:opacity-100 group-hover:blur-md sm:rounded-[1.25rem]"
        aria-hidden
      />
      <div
        className="relative flex h-full flex-col rounded-[1.125rem] border border-white/[0.12] bg-zinc-950/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_16px_40px_-28px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 group-hover:border-violet-400/35 group-hover:shadow-[0_0_44px_-10px_rgba(139,92,246,0.42),0_0_0_1px_rgba(167,139,250,0.12)_inset] sm:rounded-[1.25rem] sm:p-6"
      >
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400/90">{eyebrow}</p>
        ) : null}
        <h4 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h4>
        <RichText
          text={body}
          className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed"
        />
      </div>
    </motion.article>
  )
}
