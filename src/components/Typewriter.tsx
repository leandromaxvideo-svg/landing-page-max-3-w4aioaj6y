import { useState, useEffect } from 'react'

interface TypewriterProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.slice(0, text.length + 1))
          if (text.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          setText(currentPhrase.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="gold-gradient-text inline-block pb-1.5 align-bottom overflow-visible border-r-2 border-[#D4AF37] animate-pulse pr-1 ml-1">
      {text}
    </span>
  )
}
