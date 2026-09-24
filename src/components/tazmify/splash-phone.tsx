import { useEffect, useId, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../lib/motion-pref';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';

// Ported from Tazmify/src/screens/auth/SplashScreen.tsx and components/ui/Logo.tsx.
// Same paths, liquid waves, colors and timing; navigation belongs to the app only.
const LEFT =
  'M22.6 5.7V27.2L17.7 24.4C9 19.4 3.6 10.1 3.6 0H0V24.6C0 32.6 4.6 40 11.9 43.5L22.7 48.7V27.2L22.6 5.7Z';
const RIGHT =
  'M22.7 27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.7V27.2Z';
const FILL_EASE = [0.45, 0, 0.25, 1] as const;
const TEXT_EASE = [0.22, 1, 0.36, 1] as const;

function liquidPath(level: number, phase: number, direction: 'up' | 'down') {
  const amplitude = 4.2 * (54.4 / 104) * Math.min(1, (1 - level) * 4);
  const surface = direction === 'up' ? 54.4 * (1 - level) : 54.4 * level;
  const points = Array.from({ length: 29 }, (_, i) => {
    const t = i / 28;
    const y = surface + amplitude * Math.sin(2 * Math.PI * 3.2 * t + phase);
    return (45.3 * t).toFixed(2) + ',' + y.toFixed(2);
  });
  return direction === 'up'
    ? 'M ' + points.join(' L ') + ' L 45.3,74.4 L 0,74.4 Z'
    : 'M 0,-20 L 45.3,-20 L ' + points.reverse().join(' L ') + ' Z';
}

export function SplashPhone() {
  const id = useId().replace(/:/g, '');
  const ref = useRef<SVGSVGElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  const level = useMotionValue(0);
  const phase = useMotionValue(0);
  const left = useTransform(() => liquidPath(level.get(), phase.get(), 'down'));
  const right = useTransform(() =>
    liquidPath(level.get(), phase.get() + Math.PI, 'up'),
  );
  const show = visible || reduce;

  useEffect(() => {
    if (reduce) {
      level.set(1);
      phase.set(0);
      return;
    }
    if (!visible) return;
    const fill = animate(level, 1, { duration: 1.4, ease: FILL_EASE });
    const wave = animate(phase, Math.PI * 2 * (1400 / 1100), {
      duration: 1.4,
      ease: 'linear',
    });
    return () => {
      fill.stop();
      wave.stop();
    };
  }, [visible, reduce, level, phase]);

  return (
    <Iphone16Pro
      ref={ref}
      className="mockup hero-phone-img"
      aria-hidden="true"
      focusable="false"
      data-splash-phone=""
    >
      <rect width={390} height={849} fill="#6D57FC" />
      <g className="splash-lockup">
        <svg
          x={151.7}
          y={323}
          width={86.6}
          height={104}
          viewBox="0 0 45.3 54.4"
          data-liquid-mark=""
        >
          <defs>
            <clipPath id={id + '-splash-left'}>
              <path d={LEFT} />
            </clipPath>
            <clipPath id={id + '-splash-right'}>
              <path d={RIGHT} />
            </clipPath>
          </defs>
          <g clipPath={'url(#' + id + '-splash-left)'}>
            <motion.path data-liquid-left="" d={left} fill="#fff" />
          </g>
          <g clipPath={'url(#' + id + '-splash-right)'}>
            <motion.path data-liquid-right="" d={right} fill="#C9BFFF" />
          </g>
        </svg>
        <motion.g
          className="splash-wordmark"
          initial={false}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.45, delay: 1.5, ease: TEXT_EASE }
          }
        >
          <text
            x={195}
            y={506}
            textAnchor="middle"
            fill="#fff"
            fontFamily="SplashUrbanist, sans-serif"
            fontWeight={700}
            fontSize={44}
            letterSpacing={-1.8}
          >
            Tazmify
          </text>
        </motion.g>
        <motion.g
          className="splash-tagline"
          initial={false}
          animate={{ opacity: show ? 0.72 : 0, y: show ? 0 : 8 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.45, delay: 1.9, ease: TEXT_EASE }
          }
        >
          <text
            x={195}
            y={541}
            textAnchor="middle"
            fill="#fff"
            fontFamily="SplashInter, sans-serif"
            fontSize={14}
          >
            Brands · Creators · Campaigns
          </text>
        </motion.g>
      </g>
    </Iphone16Pro>
  );
}
