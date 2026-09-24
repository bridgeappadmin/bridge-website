import { Iphone16Pro } from '@/components/ui/iphone-16-pro';

export function iPhone16ProDemo() {
  return (
    <div className="relative">
      <Iphone16Pro
        src="https://cdn.21st.dev/assets/mirror/fd/fdb1e90d36d3a7fc0ac7549c2a2fd8b105a638e84c8b78a3d0992b13c86c68d1.jpg"
        className="h-80 w-full"
        title="iPhone 16 Pro image preview"
      />
    </div>
  );
}

export function Iphone16ProUnsplashDemo() {
  return (
    <div className="relative">
      <Iphone16Pro
        src="/images/phone-demo.jpg"
        className="h-80 w-full"
        title="Mountain wallpaper on iPhone 16 Pro"
      />
    </div>
  );
}
