import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { WHAT_I_CAN_DO } from '../data/portfolio'
import { Reveal } from './Reveal'

export function WhatICanDo() {
  return (
    <Reveal className="mt-12 sm:mt-14 md:mt-16">
      <div className="mx-auto max-w-2xl rounded-[1.125rem] border border-white/[0.1] bg-zinc-950/50 px-5 py-6 backdrop-blur-md sm:rounded-[1.25rem] sm:px-6 sm:py-7 md:mx-0 md:max-w-none lg:max-w-2xl">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/90 md:text-left">
          What I can do
        </h3>
        <ul className="mt-5 space-y-3.5 text-left">
          {WHAT_I_CAN_DO.map((line, i) => (
            <motion.li
              key={line}
              className="flex gap-3 text-sm leading-relaxed text-zinc-200 sm:text-[15px] sm:leading-relaxed"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/35">
                <FaCheck className="h-2.5 w-2.5" aria-hidden />
              </span>
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
