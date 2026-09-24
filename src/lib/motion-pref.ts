import { useEffect, useState } from 'react';
import { useReducedMotion as useOsReducedMotion } from 'framer-motion';

// Phones (≤809px) always get the full animations, even when the device's
// "Reduce motion" setting is on (client decision). Larger screens still
// respect that setting.
const PHONE = '(max-width: 809.98px)';

export function useIsPhone(): boolean {
  const [phone, setPhone] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(PHONE).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(PHONE);
    const update = () => setPhone(mq.matches);
    update();
    // Older Safari (iOS 13 and earlier) only has addListener.
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);
  return phone;
}

export function useReducedMotion(): boolean {
  const os = useOsReducedMotion();
  const phone = useIsPhone();
  return Boolean(os) && !phone;
}
