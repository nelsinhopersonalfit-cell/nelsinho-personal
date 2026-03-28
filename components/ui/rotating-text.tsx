"use client";

import { forwardRef, useImperativeHandle, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  initial?: any;
  animate?: any;
  exit?: any;
  animatePresenceMode?: "wait" | "popLayout" | "sync";
  animatePresenceInitial?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  transition?: Transition;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string | string[];
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      rotationInterval = 2000,
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      staggerDuration = 0,
      staggerFrom = "first",
      transition = { type: "spring", damping: 25, stiffness: 200 },
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...props
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const handleNext = useCallback(() => {
      const nextIndex = currentTextIndex + 1;
      if (nextIndex < texts.length) {
        setCurrentTextIndex(nextIndex);
        onNext?.(nextIndex);
      } else if (loop) {
        setCurrentTextIndex(0);
        onNext?.(0);
      }
    }, [currentTextIndex, texts.length, loop, onNext]);

    const handlePrevious = useCallback(() => {
      const prevIndex = currentTextIndex - 1;
      if (prevIndex >= 0) {
        setCurrentTextIndex(prevIndex);
        onNext?.(prevIndex);
      } else if (loop) {
        setCurrentTextIndex(texts.length - 1);
        onNext?.(texts.length - 1);
      }
    }, [currentTextIndex, texts.length, loop, onNext]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        setCurrentTextIndex(validIndex);
        onNext?.(validIndex);
      },
      [texts.length, onNext]
    );

    const reset = useCallback(() => {
      setCurrentTextIndex(0);
      onNext?.(0);
    }, [onNext]);

    useImperativeHandle(ref, () => ({
      next: handleNext,
      previous: handlePrevious,
      jumpTo,
      reset,
    }));

    useEffect(() => {
      if (!auto) return;
      const intervalId = setInterval(handleNext, rotationInterval);
      return () => clearInterval(intervalId);
    }, [auto, handleNext, rotationInterval]);

    const splitText = (text: string) => {
      if (splitBy === "characters") return text.split("");
      if (splitBy === "words") return text.split(" ");
      if (splitBy === "lines") return text.split("\n");
      return [text];
    };

    const elements = splitText(texts[currentTextIndex]);

    return (
      <div className={cn("inline-flex overflow-hidden py-2 -my-2", mainClassName)} {...props}>
        <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
          <motion.div
            key={currentTextIndex}
            className={cn("flex flex-wrap", splitLevelClassName)}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {elements.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  initial,
                  animate,
                  exit,
                }}
                transition={{
                  ...transition,
                  delay: i * staggerDuration,
                }}
                className={cn("inline-block whitespace-pre", elementLevelClassName)}
              >
                {word}
                {splitBy === "words" && i < elements.length - 1 && " "}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

RotatingText.displayName = "RotatingText";

export default RotatingText;
