import { useId, type ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BatteryFull,
  BriefcaseBusiness,
  Camera,
  Check,
  CheckCheck,
  ChevronRight,
  House,
  Instagram,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Signal,
  Sparkles,
  UserRound,
  Users,
  Video,
  Wifi,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

// Screen-only illustrations adapted from D:/Tazmify/src/screens.
// Most UI is vector artwork; Earnings uses the saved high-resolution Figma
// screen interior, clipped independently from the shared SVG phone frame.
const C = {
  ink: '#19152c',
  muted: '#817b94',
  purple: '#7053ff',
  dark: '#33216c',
  cloud: '#f8f7fc',
  line: '#e9e5f3',
  tint: '#eeeaff',
  green: '#239869',
};

function Text({
  x = 24,
  y,
  size = 17,
  weight = 500,
  fill = C.ink,
  anchor,
  children,
}: {
  x?: number;
  y: number;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: 'start' | 'middle' | 'end';
  children: ReactNode;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      textAnchor={anchor}
    >
      {children}
    </text>
  );
}
function Icon({
  icon: Component,
  x,
  y,
  size = 22,
  color = C.purple,
}: {
  icon: LucideIcon;
  x: number;
  y: number;
  size?: number;
  color?: string;
}) {
  return (
    <Component
      x={x}
      y={y}
      width={size}
      height={size}
      color={color}
      strokeWidth={1.8}
    />
  );
}
function Panel({
  x = 20,
  y,
  w = 350,
  h,
  fill = '#fff',
  stroke = C.line,
  radius = 22,
}: {
  x?: number;
  y: number;
  w?: number;
  h: number;
  fill?: string;
  stroke?: string;
  radius?: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={radius}
      fill={fill}
      stroke={stroke}
    />
  );
}
function Pill({
  x,
  y,
  w,
  label,
  fill = C.tint,
  color = C.purple,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  fill?: string;
  color?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={30} rx={15} fill={fill} />
      <Text
        x={x + w / 2}
        y={y + 20}
        size={13}
        fill={color}
        anchor="middle"
        weight={600}
      >
        {label}
      </Text>
    </g>
  );
}
function Photo({
  x,
  y,
  w,
  h,
  src,
  radius = 18,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  src: string;
  radius?: number;
}) {
  const id = `screen-photo-${useId().replace(/:/g, '')}`;
  return (
    <g>
      <defs>
        <clipPath id={id}>
          <rect x={x} y={y} width={w} height={h} rx={radius} />
        </clipPath>
      </defs>
      <image
        href={src}
        x={x}
        y={y}
        width={w}
        height={h}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${id})`}
      />
    </g>
  );
}
function Brand({ x, y, size = 44 }: { x: number; y: number; size?: number }) {
  return (
    <g>
      <circle cx={x + size / 2} cy={y + size / 2} r={size / 2} fill="#f33894" />
      <Text
        x={x + size / 2}
        y={y + size * 0.7}
        size={size * 0.65}
        fill="#fff"
        weight={700}
        anchor="middle"
      >
        N
      </Text>
    </g>
  );
}
function Status({ dark = false }: { dark?: boolean }) {
  const color = dark ? '#fff' : C.ink;
  return (
    <g>
      <Text x={26} y={35} size={14} weight={650} fill={color}>
        9:41
      </Text>
      <Icon icon={Signal} x={294} y={22} size={17} color={color} />
      <Icon icon={Wifi} x={317} y={23} size={16} color={color} />
      <Icon icon={BatteryFull} x={340} y={21} size={22} color={color} />
    </g>
  );
}
function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <g>
      <Icon icon={ArrowLeft} x={24} y={82} color={C.ink} />
      <Text x={62} y={102} size={24} weight={650}>
        {title}
      </Text>
      <Icon icon={MoreHorizontal} x={341} y={83} color={C.ink} />
      {subtitle && (
        <Text y={142} size={15} fill={C.muted}>
          {subtitle}
        </Text>
      )}
    </g>
  );
}
function BottomNav({ active = 0 }: { active?: number }) {
  const icons = [House, Search, BriefcaseBusiness, MessageCircle, UserRound];
  return (
    <g>
      <rect x={0} y={754} width={390} height={95} fill="#fff" />
      <path d="M0 754H390" stroke={C.line} />
      {icons.map((icon, i) => (
        <g key={i}>
          <Icon
            icon={icon}
            x={29 + i * 77}
            y={777}
            size={24}
            color={active === i ? C.purple : C.muted}
          />
          {active === i && (
            <circle cx={41 + i * 77} cy={811} r={3} fill={C.purple} />
          )}
        </g>
      ))}
    </g>
  );
}
function Button({
  y,
  label,
  icon: Component = ArrowRight,
}: {
  y: number;
  label: string;
  icon?: LucideIcon;
}) {
  return (
    <g>
      <rect x={24} y={y} width={342} height={54} rx={17} fill={C.purple} />
      <Text
        x={195}
        y={y + 34}
        size={17}
        weight={600}
        fill="#fff"
        anchor="middle"
      >
        {label}
      </Text>
      <Icon icon={Component} x={331} y={y + 17} size={20} color="#fff" />
    </g>
  );
}

function BrandHome() {
  return (
    <>
      <Text y={89} fill={C.muted} size={16}>
        Hello, welcome back
      </Text>
      <Text y={118} size={24} weight={650}>
        Nykaa Beauty
      </Text>
      <Brand x={320} y={76} />
      <Text y={181} size={32} weight={700}>
        Find your next
      </Text>
      <Text y={219} size={32} weight={700} fill={C.purple}>
        great creator.
      </Text>
      <Panel y={246} h={50} radius={16} />
      <Icon icon={Search} x={35} y={260} color={C.muted} />
      <Text x={68} y={278} fill={C.muted} size={16}>
        Explore creators
      </Text>
      <Pill x={24} y={317} w={83} label="Beauty" fill={C.purple} color="#fff" />
      <Pill x={117} y={317} w={90} label="Fashion" />
      <Pill x={217} y={317} w={103} label="Lifestyle" />
      <Photo
        x={24}
        y={370}
        w={342}
        h={276}
        src="/images/niche-beauty.jpg"
        radius={24}
      />
      <Pill x={39} y={386} w={108} label="91% match" fill="#fff" />
      <Text x={24} y={682} size={24} weight={650}>
        Beauty. With a point of view.
      </Text>
      <Text y={709} size={15} fill={C.muted}>
        Skincare · Lifestyle · Original stories
      </Text>
      <BottomNav active={1} />
    </>
  );
}
function Bubble({
  y,
  outgoing = false,
  lines,
  time,
  index,
}: {
  y: number;
  outgoing?: boolean;
  lines: string[];
  time: string;
  index: number;
}) {
  const x = outgoing ? 78 : 22,
    w = outgoing ? 290 : 302,
    h = 48 + lines.length * 22;
  return (
    <g className={`phone-message phone-message-${index}`}>
      <Panel
        x={x}
        y={y}
        w={w}
        h={h}
        radius={20}
        fill={outgoing ? C.purple : '#fff'}
        stroke={outgoing ? C.purple : C.line}
      />
      {lines.map((line, i) => (
        <Text
          key={i}
          x={x + 17}
          y={y + 29 + i * 22}
          size={17}
          weight={400}
          fill={outgoing ? '#fff' : C.ink}
        >
          {line}
        </Text>
      ))}
      <Text
        x={x + w - (outgoing ? 39 : 16)}
        y={y + h - 13}
        size={11}
        fill={outgoing ? '#ffffffb3' : C.muted}
        anchor="end"
      >
        {time}
      </Text>
      {outgoing && (
        <Icon
          icon={CheckCheck}
          x={x + w - 31}
          y={y + h - 25}
          size={17}
          color="#ffffffb3"
        />
      )}
    </g>
  );
}
function Chat() {
  return (
    <>
      <path d="M0 52H390V165H0Z" fill={C.dark} />
      <Icon icon={ArrowLeft} x={23} y={89} color="#fff" />
      <Brand x={60} y={77} size={48} />
      <Text x={120} y={96} size={21} fill="#fff" weight={650}>
        Nykaa Beauty
      </Text>
      <circle cx={126} cy={120} r={3} fill="#64e1aa" />
      <Text x={137} y={124} size={13} fill="#e0d9ff">
        Active now
      </Text>
      <Icon icon={Video} x={304} y={91} color="#fff" />
      <Icon icon={MoreHorizontal} x={345} y={91} color="#fff" />
      <rect x={0} y={151} width={390} height={698} rx={28} fill={C.cloud} />
      <Text x={195} y={188} size={12} fill={C.muted} anchor="middle">
        TODAY
      </Text>
      <Bubble
        y={210}
        lines={['Hi Sujan! We loved your reels.', 'Open to a skincare collab?']}
        time="09:12"
        index={1}
      />
      <Bubble
        y={316}
        lines={[
          'The brief: 2 Reels + 3 Stories',
          'for our new vitamin C serum.',
        ]}
        time="09:13"
        index={2}
      />
      <Bubble
        y={422}
        outgoing
        lines={['Absolutely! Sending my', 'rate card and past work.']}
        time="09:18"
        index={3}
      />
      <Bubble
        y={528}
        lines={['Perfect. Let’s make', 'something great together.']}
        time="09:21"
        index={4}
      />
      <Pill x={95} y={655} w={200} label="A new collab starts here" />
      <Panel x={20} y={743} w={285} h={56} radius={28} />
      <Icon icon={Camera} x={35} y={759} color={C.muted} />
      <Text x={70} y={778} size={16} fill={C.muted}>
        Write a message...
      </Text>
      <circle cx={341} cy={771} r={28} fill={C.purple} />
      <Icon icon={Send} x={328} y={759} size={24} color="#fff" />
    </>
  );
}
function Brief() {
  return (
    <>
      <Header title="Your next collaboration" />
      <Photo x={24} y={133} w={342} h={155} src="/images/niche-beauty.jpg" />
      <Brand x={24} y={305} size={42} />
      <Text x={78} y={324} size={19} weight={650}>
        Nykaa Beauty
      </Text>
      <Text x={78} y={346} size={13} fill={C.muted}>
        Vitamin C launch campaign
      </Text>
      <Text y={392} size={27} weight={650}>
        Apply to this campaign
      </Text>
      <Text y={425} size={15} fill={C.muted}>
        Your quote
      </Text>
      <Panel y={440} h={60} stroke={C.purple} radius={14} />
      <Text x={38} y={479} size={26} weight={650}>
        ₹35,000
      </Text>
      <Text x={349} y={477} size={12} fill={C.muted} anchor="end">
        all deliverables
      </Text>
      <Text y={538} size={15} fill={C.muted}>
        Message to the brand
      </Text>
      <Panel y={552} h={108} radius={16} />
      <Text x={37} y={584} size={16} weight={400}>
        I’d love to create an honest,
      </Text>
      <Text x={37} y={608} size={16} weight={400}>
        fresh take on your skincare story.
      </Text>
      <Text x={37} y={637} size={13} fill={C.muted}>
        Let’s bring the brief to life.
      </Text>
      <Icon icon={Plus} x={25} y={684} size={18} />
      <Text x={51} y={699} size={15} fill={C.purple}>
        Attach past work
      </Text>
      <Button y={740} label="Submit application" />
    </>
  );
}
function Connected() {
  return (
    <>
      <Header title="Your connected world" />
      <Text y={151} size={15} fill={C.muted}>
        Your channels. All together.
      </Text>
      <Panel y={182} h={80} />
      <Icon icon={Instagram} x={39} y={205} size={32} color="#e93486" />
      <Text x={90} y={217} size={19} weight={600}>
        Instagram
      </Text>
      <Text x={90} y={240} size={13} fill={C.muted}>
        @sujan.creates
      </Text>
      <Icon icon={CheckCheck} x={321} y={209} size={25} color={C.green} />
      <Panel y={278} h={80} />
      <Icon icon={Youtube} x={39} y={301} size={32} color="#ee404d" />
      <Text x={90} y={313} size={19} weight={600}>
        YouTube
      </Text>
      <Text x={90} y={336} size={13} fill={C.muted}>
        Connect your channel
      </Text>
      <Icon icon={Plus} x={324} y={306} color={C.purple} />
      <Panel y={386} h={303} stroke="none" fill={C.tint} radius={28} />
      <circle cx={195} cy={440} r={31} fill="#fff" />
      <Icon icon={ShieldCheck} x={176} y={421} size={38} />
      <Text x={195} y={505} size={26} weight={650} anchor="middle">
        Instagram connected
      </Text>
      <Text x={195} y={534} size={15} fill={C.muted} anchor="middle">
        Your verified stats, ready to share.
      </Text>
      {[
        ['1,024', 'Followers'],
        ['4.8%', 'Engagement'],
        ['24K', 'Avg. views'],
      ].map(([value, label], i) => (
        <g key={label}>
          <Text x={83 + i * 112} y={587} size={24} weight={650} anchor="middle">
            {value}
          </Text>
          <Text
            x={83 + i * 112}
            y={612}
            size={12}
            fill={C.muted}
            anchor="middle"
          >
            {label}
          </Text>
        </g>
      ))}
      <Icon icon={Check} x={116} y={645} size={16} color={C.green} />
      <Text x={140} y={659} size={13} fill={C.green}>
        Verified by Tazmify
      </Text>
      <Button y={733} label="Done" icon={Check} />
    </>
  );
}
function Applications() {
  return (
    <>
      <Header
        title="My applications"
        subtitle="Every opportunity, in one place."
      />
      <Pill
        x={24}
        y={174}
        w={92}
        label="All  ·  12"
        fill={C.purple}
        color="#fff"
      />
      <Pill x={126} y={174} w={116} label="Shortlisted" />
      <Pill x={252} y={174} w={108} label="Accepted" />
      {[
        {
          y: 230,
          title: 'Vitamin C stories',
          brand: 'Nykaa Beauty',
          photo: 'niche-beauty.jpg',
          status: 'Shortlisted',
          amount: '₹35,000',
        },
        {
          y: 399,
          title: 'Everyday, elevated',
          brand: 'Lifestyle campaign',
          photo: 'niche-fashion.jpg',
          status: 'In review',
          amount: '₹22,000',
        },
        {
          y: 568,
          title: 'A taste of the city',
          brand: 'Food & culture',
          photo: 'niche-food.jpg',
          status: 'Accepted',
          amount: '₹18,000',
        },
      ].map(({ y, title, brand, photo, status, amount }) => (
        <g key={title}>
          <Panel y={y} h={149} />
          <Photo
            x={36}
            y={y + 18}
            w={64}
            h={64}
            src={`/images/${photo}`}
            radius={14}
          />
          <Text x={114} y={y + 43} size={19} weight={650}>
            {title}
          </Text>
          <Text x={114} y={y + 68} size={14} fill={C.muted}>
            {brand}
          </Text>
          <Pill x={37} y={y + 98} w={113} label={status} />
          <Text x={350} y={y + 121} size={20} weight={650} anchor="end">
            {amount}
          </Text>
        </g>
      ))}
      <BottomNav active={2} />
    </>
  );
}
function Analytics() {
  return (
    <>
      <Header title="Your impact" subtitle="Good work deserves to be seen." />
      <Pill
        x={24}
        y={170}
        w={130}
        label="Instagram"
        fill={C.purple}
        color="#fff"
      />
      <Pill x={164} y={170} w={112} label="YouTube" />
      <Panel y={225} h={208} fill={C.purple} stroke="none" radius={26} />
      <Text x={40} y={260} size={15} fill="#ddd5ff">
        TOTAL REACH
      </Text>
      <Text x={40} y={320} size={52} weight={650} fill="#fff">
        24.8K
      </Text>
      <Text x={41} y={355} size={15} fill="#eeeaff">
        Your ideas are finding their people.
      </Text>
      <Pill
        x={40}
        y={379}
        w={139}
        label="↑  18.6% this month"
        fill="#ffffff26"
        color="#fff"
      />
      <Panel y={453} h={137} w={167} />
      <Panel x={203} y={453} h={137} w={167} />
      <Icon icon={Users} x={37} y={472} />
      <Icon icon={Sparkles} x={220} y={472} />
      <Text x={37} y={529} size={31} weight={650}>
        1,024
      </Text>
      <Text x={220} y={529} size={31} weight={650}>
        4.8%
      </Text>
      <Text x={37} y={565} size={14} fill={C.muted}>
        Followers
      </Text>
      <Text x={220} y={565} size={14} fill={C.muted}>
        Engagement
      </Text>
      <Panel y={610} h={105} />
      <Text x={38} y={645} size={18} weight={650}>
        A snapshot worth sharing
      </Text>
      <Text x={38} y={673} size={14} fill={C.muted}>
        Add verified stats to your next pitch.
      </Text>
      <Icon icon={ArrowUpRight} x={329} y={640} />
      <BottomNav active={4} />
    </>
  );
}
function Earnings() {
  const id = `earnings-header-${useId().replace(/:/g, '')}`;
  return (
    <g data-earnings-design="archived-figma">
      <desc>
        Earnings: ₹84,500 available, ₹40,000 pending clearance, with payout and
        withdrawal history.
      </desc>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#262052" />
          <stop offset="0.5" stopColor="#3a2e86" />
          <stop offset="1" stopColor="#403586" />
        </linearGradient>
      </defs>
      <rect width={390} height={849} fill="#fafafe" />
      <rect width={390} height={140} fill={`url(#${id})`} />
      {/* Only the screen interior of the saved Figma export. The old bezel,
          status bar, island, home indicator and shadow are outside this crop. */}
      <svg
        x={0}
        y={40}
        width={390}
        height={716}
        viewBox="30 80 780 1432"
        overflow="hidden"
      >
        <image href="/images/mockups/earnings.webp" width={840} height={1736} />
      </svg>
      <Status dark />
    </g>
  );
}
function Welcome({ walkthrough = false }: { walkthrough?: boolean }) {
  return (
    <>
      <image href="/logo-mark.svg" x={24} y={80} width={34} height={40} />
      <Text x={69} y={109} size={27} weight={700}>
        tazmify
      </Text>
      <Text y={179} size={35} weight={700}>
        {walkthrough ? 'Your next big' : 'Great work starts'}
      </Text>
      <Text y={220} size={35} weight={700} fill={C.purple}>
        {walkthrough ? 'collab starts here.' : 'with a connection.'}
      </Text>
      <Photo
        x={24}
        y={250}
        w={342}
        h={242}
        src="/images/walkthrough-1.jpg"
        radius={24}
      />
      <Text y={529} size={16} fill={C.muted}>
        A space for creators and brands.
      </Text>
      <Panel y={554} h={79} />
      <Icon icon={Sparkles} x={41} y={581} />
      <Text x={82} y={589} size={20} weight={650}>
        I’m a creator
      </Text>
      <Text x={82} y={612} size={13} fill={C.muted}>
        Turn your creativity into opportunity
      </Text>
      <Icon icon={ChevronRight} x={331} y={583} />
      <Panel y={648} h={79} />
      <Icon icon={BriefcaseBusiness} x={41} y={675} />
      <Text x={82} y={683} size={20} weight={650}>
        I’m a brand
      </Text>
      <Text x={82} y={706} size={13} fill={C.muted}>
        Find the people who get your vision
      </Text>
      <Icon icon={ChevronRight} x={331} y={677} />
      <Text x={195} y={787} size={14} fill={C.muted} anchor="middle">
        Create. Connect. Collaborate.
      </Text>
    </>
  );
}

// "14 · Active job" (Figma 173:101): one collaboration from acceptance to payout.
function ActiveJob() {
  const glow = `active-job-glow-${useId().replace(/:/g, '')}`;
  const steps: [string, string, 'done' | 'now' | 'next'][] = [
    ['Application accepted', '26 Aug', 'done'],
    ['Product shipped', '28 Aug', 'done'],
    ['Draft submitted', 'Today', 'now'],
    ['Brand review', '', 'next'],
    ['Approved & paid', '', 'next'],
  ];
  return (
    <>
      <defs>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#6b4dff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#6b4dff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={390} height={190} fill="#2a1c63" />
      <circle cx={320} cy={50} r={170} fill={`url(#${glow})`} />
      <circle cx={46} cy={76} r={22} fill="#ffffff26" stroke="#ffffff40" />
      <Icon icon={ArrowLeft} x={36} y={65} size={20} color="#fff" />
      <Text x={84} y={84} size={21} weight={650} fill="#fff">
        Airdopes Unboxing
      </Text>
      <rect x={0} y={150} width={390} height={699} rx={32} fill={C.cloud} />

      <Panel x={32} y={174} w={326} h={64} radius={18} />
      <rect x={46} y={186} width={40} height={40} rx={10} fill="#111" />
      <path d="M58 216 L66 196 L74 216 Z M55 218 H77 L74 222 H58 Z" fill="#e5252a" />
      <Text x={98} y={202} size={15} weight={650}>
        boAt Lifestyle
      </Text>
      <Text x={98} y={222} size={12.5} fill={C.muted}>
        ₹18,000 · due 20 Sep
      </Text>
      <rect x={268} y={194} width={78} height={24} rx={12} fill="#dcf5e8" />
      <Text x={307} y={210} size={11.5} weight={650} fill={C.green} anchor="middle">
        In progress
      </Text>

      <Text x={32} y={283} size={16} weight={650}>
        Progress
      </Text>
      {steps.map(([label, date, state], i) => {
        const cy = 311 + i * 58;
        return (
          <g key={label}>
            {i < steps.length - 1 && (
              <rect
                x={44}
                y={cy + 15}
                width={2}
                height={28}
                rx={1}
                fill={state === 'done' ? C.green : C.line}
              />
            )}
            {state === 'done' && (
              <>
                <circle cx={45} cy={cy} r={13} fill={C.green} />
                <Icon icon={Check} x={38.5} y={cy - 6.5} size={13} color="#fff" />
              </>
            )}
            {state === 'now' && (
              <>
                <circle cx={45} cy={cy} r={13} fill={C.purple} />
                <circle cx={45} cy={cy} r={5} fill="#fff" />
              </>
            )}
            {state === 'next' && (
              <circle cx={45} cy={cy} r={12} fill="#fff" stroke={C.line} strokeWidth={2} />
            )}
            <Text
              x={74}
              y={cy + 5}
              size={15}
              weight={state === 'next' ? 500 : 650}
              fill={state === 'next' ? C.muted : C.ink}
            >
              {label}
            </Text>
            {date && (
              <Text x={358} y={cy + 5} size={12} fill={C.muted} anchor="end">
                {date}
              </Text>
            )}
          </g>
        );
      })}

      <Text x={32} y={619} size={16} weight={650}>
        Deliverables
      </Text>
      <Photo x={32} y={632} w={103} h={128} radius={16} src="/images/niche-fashion.jpg" />
      <rect x={38} y={728} width={90} height={22} rx={11} fill={C.green} />
      <Text x={83} y={743} size={11} weight={650} fill="#fff" anchor="middle">
        Submitted
      </Text>
      <rect x={143.5} y={632.5} width={102} height={127} rx={16} fill="#fff" stroke="#b9acff" strokeDasharray="6 5" />
      <Icon icon={Plus} x={182} y={670} size={26} />
      <Text x={194.5} y={726} size={11.5} weight={650} fill={C.purple} anchor="middle">
        Upload Reel 2
      </Text>
      <rect x={254.5} y={632.5} width={102} height={127} rx={16} fill="#fff" stroke={C.line} strokeDasharray="6 5" />
      <Text x={305.5} y={692} size={11} fill={C.muted} anchor="middle">
        3 Stories
      </Text>
      <Text x={305.5} y={706} size={11} fill={C.muted} anchor="middle">
        after approval
      </Text>

      <rect x={32} y={742} width={326} height={56} rx={18} fill={C.purple} />
      <Text x={195} y={776} size={17} weight={600} fill="#fff" anchor="middle">
        Message brand
      </Text>
    </>
  );
}

export const PHONE_SCREEN_NAMES = [
  'brand-home',
  'chat',
  'apply-sheet',
  'connected',
  'applications',
  'analytics',
  'earnings',
  'role-select',
  'walkthrough-1',
  'active-job',
] as const;
export type PhoneScreenName = (typeof PHONE_SCREEN_NAMES)[number];
const SCREENS: Record<PhoneScreenName, () => ReactNode> = {
  'brand-home': BrandHome,
  chat: Chat,
  'apply-sheet': Brief,
  connected: Connected,
  applications: Applications,
  analytics: Analytics,
  earnings: Earnings,
  'role-select': () => <Welcome />,
  'walkthrough-1': () => <Welcome walkthrough />,
  'active-job': ActiveJob,
};

export function TazmifyScreen({ name }: { name: PhoneScreenName }) {
  const Screen = SCREENS[name];
  return (
    <g
      data-phone-screen={name}
      style={{ fontFamily: 'var(--body)', letterSpacing: '-.25px' }}
    >
      <rect
        width={390}
        height={849}
        fill={name === 'chat' ? C.dark : C.cloud}
      />
      {name !== 'earnings' && (
        <Status dark={name === 'chat' || name === 'active-job'} />
      )}
      <Screen />
      <rect x={140} y={826} width={110} height={5} rx={2.5} fill={C.ink} />
    </g>
  );
}
