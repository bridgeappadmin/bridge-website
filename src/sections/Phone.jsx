import React from 'react';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { TazmifyScreen } from '@/components/tazmify/phone-screens';

export const image = (name) => `/images/${name}`;

// Marketing phones share one SVG device with screen-only artwork.
// Keep this wrapper so section sizing and existing motion remain consistent.
export function Mockup({
  name,
  className = '',
  alt = '',
  eager = false,
  ...rest
}) {
  return (
    <Iphone16Pro
      className={`mockup ${className}`}
      title={alt || undefined}
      aria-hidden={alt ? undefined : true}
      focusable="false"
      {...rest}
    >
      <TazmifyScreen name={name} />
    </Iphone16Pro>
  );
}
