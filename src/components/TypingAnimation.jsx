import { useState, useEffect } from 'react'

const TypingAnimation = ({ words, speed = 100 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    let timeout

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          } else {
            return word.slice(0, prev.length + 1)
          }
        })
      }, isDeleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed])

  return (
    <span className="text-primary-600 dark:text-primary-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingAnimation

