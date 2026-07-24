import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 70,
  pauseDuration = 1800,
  deletingSpeed = 40,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1),
        );
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    pauseDuration,
    deletingSpeed,
  ]);

  return text;
}
