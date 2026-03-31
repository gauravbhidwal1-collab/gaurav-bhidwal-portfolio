import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import profileImg from '../assets/profile.png'
import { MAILTO_HIRE, PERSON, PROFILE_MODAL } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1]
const tap = { scale: 0.97 }

export function ProfileModal({ isOpen, onClose }) {
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="profile-modal"
          className="profile-modal-root"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="profile-modal-backdrop"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="profile-modal-center">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="profile-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.38, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="profile-modal-close" onClick={onClose} aria-label="Close dialog">
                <FaTimes className="h-4 w-4" aria-hidden />
              </button>

              <div className="profile-modal-image-wrap">
                <img
                  src={profileImg}
                  alt={PERSON.name}
                  className="profile-modal-image"
                  width={320}
                  height={320}
                  decoding="async"
                />
              </div>

              <div className="profile-modal-body">
                <h2 id={titleId} className="profile-modal-name">
                  {PERSON.name}
                </h2>
                <p className="profile-modal-role">{PERSON.roleShort}</p>
                <p className="profile-modal-meta">
                  <span className="text-emerald-400/95" aria-hidden>
                    ●
                  </span>{' '}
                  Experience: {PERSON.experienceYears} years · {PERSON.location}
                </p>

                <div className="profile-modal-skills">
                  <p className="profile-modal-skills-label">Skills</p>
                  <ul className="profile-modal-skill-list">
                    {PROFILE_MODAL.skills.map((s) => (
                      <li key={s} className="profile-modal-skill-chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="profile-modal-tagline">&ldquo;{PROFILE_MODAL.tagline}&rdquo;</p>

                <div className="profile-modal-actions">
                  <motion.a
                    href={MAILTO_HIRE}
                    className="btn-premium-primary profile-modal-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={tap}
                    onClick={onClose}
                  >
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium-secondary profile-modal-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={tap}
                  >
                    View Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
