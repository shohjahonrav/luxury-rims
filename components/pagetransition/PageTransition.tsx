"use client";

import { motion, useAnimationControls } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const DURATION = 0.7;
const EASE = [0.76, 0, 0.24, 1] as const;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const controls = useAnimationControls();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const sequence = async (): Promise<void> => {
      await controls.start({
        y: "0%",
        transition: { duration: DURATION, ease: EASE },
      });
      await controls.start({
        y: "-100%",
        transition: { duration: DURATION, ease: EASE },
      });
      controls.set({ y: "100%" });
    };

    sequence();
  }, [pathname, controls]);

  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={controls}
        className="fixed inset-0 z-40 bg-black-primary pointer-events-none"
      />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: DURATION * 0.55 }}
      >
        {children}
      </motion.div>
    </>
  );
}
