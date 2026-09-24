import { createRoot } from 'react-dom/client';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import {
  Iphone16ProUnsplashDemo,
  iPhone16ProDemo as Iphone16ProDemo,
} from '@/components/ui/demo';
import {
  PHONE_SCREEN_NAMES,
  TazmifyScreen,
} from '@/components/tazmify/phone-screens';
import '@fontsource-variable/geist';
import '../styles.css';

function Preview() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-3 text-3xl font-semibold">
        One frame. Every Tazmify screen.
      </h1>
      <p className="mb-10 text-muted-foreground">
        iPhone 16 Pro · SVG artwork · responsive previews
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PHONE_SCREEN_NAMES.map((name) => (
          <figure
            key={name}
            className="rounded-3xl bg-[#bebeff] p-6 text-[#19152c]"
          >
            <Iphone16Pro
              width={280}
              height={560}
              className="mx-auto h-auto max-w-full"
              title={`${name} app preview`}
            >
              <TazmifyScreen name={name} />
            </Iphone16Pro>
            <figcaption className="mt-4 text-center text-sm font-medium">
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-3" data-image-demos="">
        <Iphone16ProDemo />
        <Iphone16ProUnsplashDemo />
        <Iphone16Pro
          width={160}
          height={320}
          title="Empty phone fallback"
          className="mx-auto text-[#bebeff]"
        />
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<Preview />);
