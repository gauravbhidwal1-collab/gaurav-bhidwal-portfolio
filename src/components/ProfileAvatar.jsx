import { useState } from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

const hoverTap = { scale: 0.98 }

/**
 * Circular profile image with initials fallback ("GSB") if load fails.
 * Optional `onOpen` + `modalOpen` for click-to-open profile modal with hover zoom.
 */
export function ProfileAvatar({
  src = profileImg,
  alt = 'Profile photo',
  onOpen,
  modalOpen = false,
}) {
  const [failed, setFailed] = useState(false)
  const interactive = typeof onOpen === 'function'

  const inner =
    failed ? (
      <div
        className="avatar-circle avatar-circle--fallback relative"
        role="img"
        aria-label={alt}
      >
        <span className="avatar-circle-initials">GSB</span>
      </div>
    ) : (
      <div className="avatar-circle avatar-circle--interactive relative">
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          width={400}
          height={400}
          onError={() => setFailed(true)}
        />
      </div>
    )

  if (!interactive) {
    return inner
  }

  return (
    <motion.button
      type="button"
      className="group cursor-pointer rounded-full border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      onClick={onOpen}
      aria-label="Open profile details"
      aria-haspopup="dialog"
      aria-expanded={modalOpen}
      whileHover={{ scale: 1.04 }}
      whileTap={hoverTap}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      {inner}
    </motion.button>
  )
}
