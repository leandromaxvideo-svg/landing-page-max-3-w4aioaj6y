import { useEffect, useState } from 'react'

interface TypewriterProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function Typewriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  delayBetween = 2000,
}: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < targetPhrase.length) {
            setCurrentText(targetPhrase.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(targetPhrase.slice(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [
    currentText,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ])

  return (
    <span className="gold-gradient-text font-bold inline-flex items-center">
      {currentText}
      <span className="ml-1 w-0.5 h-7 bg-[#D4AF37] animate-pulse"></span>
    </span>
  )
}
