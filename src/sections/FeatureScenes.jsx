import React from 'react';
import {
  ArrowUpRight,
  Bell,
  Check,
  CheckCheck,
  FileText,
  MessageCircle,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';

function Mark() {
  return (
    <img className="kf-mark kf-mark-app" src="/app-icon.svg" alt="" />
  );
}

function CampaignScene() {
  return (
    <div className="kf-artwork kf-campaign">
      <div className="kf-ground-shadow" />
      <div className="kf-folder-back">
        <span />
      </div>
      <div
        className="kf-paper kf-paper-a"
        style={{ '--tilt': '-14deg', '--delay': '.1s' }}
      >
        <img src="/images/niche-fashion.jpg" alt="" />
        <span className="kf-paper-tag">
          <FileText size={13} /> THE BRIEF
        </span>
        <strong>
          Made to
          <br />
          stand out.
        </strong>
      </div>
      <div
        className="kf-paper kf-paper-b"
        style={{ '--tilt': '12deg', '--delay': '.25s' }}
      >
        <img src="/images/walkthrough-1.jpg" alt="" />
        <span className="kf-paper-tag">
          <Users size={13} /> THE CREATORS
        </span>
        <strong>
          Real people.
          <br />
          Fresh ideas.
        </strong>
      </div>
      <div
        className="kf-paper kf-paper-c"
        style={{ '--tilt': '-3deg', '--delay': '.4s' }}
      >
        <img src="/images/niche-beauty.jpg" alt="" />
        <span className="kf-paper-tag">
          <Sparkles size={13} /> THE POSSIBILITIES
        </span>
        <strong>
          A little spark.
          <br />A big story.
        </strong>
      </div>
      <div className="kf-folder-front">
        <div className="kf-folder-top">
          <div>
            <span className="kf-micro">YOUR CAMPAIGN WORKSPACE</span>
            <strong>Summer stories.</strong>
          </div>
          <Mark />
        </div>
        <div className="kf-folder-divider" />
        <div className="kf-folder-tools">
          <span>
            <FileText size={19} />
            <b>Brief</b>
            <small>Ready to go</small>
          </span>
          <span>
            <Users size={19} />
            <b>Creators</b>
            <small>All together</small>
          </span>
          <span>
            <MessageCircle size={19} />
            <b>Conversation</b>
            <small>In the loop</small>
          </span>
        </div>
        <div className="kf-folder-bottom">
          <span>Every detail. One place.</span>
          <span>
            <i /> In sync
          </span>
        </div>
      </div>
      <div className="kf-float-status kf-campaign-status">
        <span>
          <CheckCheck size={17} />
        </span>
        Ready to collaborate
      </div>
    </div>
  );
}

const creators = [
  {
    image: 'walkthrough-1.jpg',
    name: 'Food & culture',
    tag: 'A fresh perspective',
    className: 'left',
  },
  {
    image: 'niche-beauty.jpg',
    name: 'Beauty & lifestyle',
    tag: 'Your kind of creator',
    className: 'center',
  },
  {
    image: 'niche-fashion.jpg',
    name: 'Fashion & style',
    tag: 'A point of view',
    className: 'right',
  },
];

function MatchingScene() {
  return (
    <div className="kf-artwork kf-matching">
      <div className="kf-ground-shadow" />
      <div className="kf-match-brief">
        <span className="kf-feature-icon">
          <FileText size={22} />
        </span>
        <div>
          <span className="kf-micro">THE CAMPAIGN</span>
          <strong>Summer stories</strong>
          <small>Beauty · Lifestyle · Original voices</small>
        </div>
        <Sparkles size={20} />
      </div>
      <svg className="kf-connectors" viewBox="0 0 520 540" fill="none">
        <path d="M260 147 V170 C260 195 110 170 110 219 M260 147 V224 M260 147 V170 C260 195 410 170 410 219" />
      </svg>
      <div className="kf-match-orbit" />
      {creators.map((creator, i) => (
        <div
          className={`kf-creator kf-creator-${creator.className}`}
          style={{ '--delay': `${0.25 + i * 0.15}s` }}
          key={creator.name}
        >
          <div className="kf-creator-photo">
            <img src={`/images/${creator.image}`} alt="" />
            <span className="kf-creator-save">
              {i === 1 ? <Check size={16} /> : <ArrowUpRight size={16} />}
            </span>
          </div>
          <strong>{creator.name}</strong>
          <small>{creator.tag}</small>
        </div>
      ))}
      <div className="kf-fit-badge">
        <Sparkles size={16} /> A natural fit
      </div>
      <div className="kf-float-status kf-match-status">
        <span>
          <Users size={17} />
        </span>
        Your next great partnership.
      </div>
    </div>
  );
}

const updates = [
  {
    Icon: FileText,
    title: 'The brief is ready.',
    description: 'A shared vision, from the start.',
    time: 'First up',
    className: 'brief',
  },
  {
    Icon: Users,
    title: 'You found your creator.',
    description: 'The right people are in the loop.',
    time: 'Next',
    className: 'creator',
  },
  {
    Icon: MessageCircle,
    title: 'A new message just arrived.',
    description: 'Keep the good ideas moving.',
    time: 'Just now',
    className: 'message',
  },
];

function UpdatesScene() {
  return (
    <div className="kf-artwork kf-updates">
      <div className="kf-updates-title">
        <Mark />
        <div>
          <span className="kf-micro">SUMMER STORIES</span>
          <strong>Good things are happening.</strong>
        </div>
      </div>
      <div className="kf-timeline-line">
        <span />
      </div>
      {updates.map(({ Icon, title, description, time, className }, i) => (
        <div
          className={`kf-update kf-update-${className}`}
          style={{ '--delay': `${0.25 + i * 0.5}s` }}
          key={title}
        >
          <span className="kf-timeline-dot">
            <Check size={13} />
          </span>
          <span className="kf-update-icon">
            <Icon size={22} />
          </span>
          <div>
            <span className="kf-update-time">{time}</span>
            <strong>{title}</strong>
            <p>{description}</p>
          </div>
        </div>
      ))}
      <div className="kf-updates-status">
        <CheckCheck size={18} />
        <span>One shared space. Everyone up to date.</span>
      </div>
    </div>
  );
}

function AlertsScene() {
  return (
    <div className="kf-artwork kf-alerts">
      <div className="kf-bell-rings">
        <span />
        <span />
      </div>
      <div className="kf-notification-bell">
        <Bell size={43} strokeWidth={1.7} />
        <span className="kf-notification-dot" />
      </div>
      <div className="kf-pitch-notification">
        <img className="kf-app-icon" src="/app-icon.svg" alt="" width={48} height={48} />
        <div>
          <span className="kf-pitch-heading">
            TAZMIFY <small>now</small>
          </span>
          <strong>A new pitch just landed.</strong>
          <p>Your next collaboration could start here.</p>
        </div>
      </div>
      <div className="kf-preferences">
        <div className="kf-preferences-title">
          <span>Your moments that matter.</span>
          <Bell size={15} />
        </div>
        {['New applications', 'Campaign messages', 'Collaboration updates'].map(
          (label, i) => (
            <div className="kf-preference" key={label}>
              <span>{label}</span>
              <span
                className="kf-art-toggle"
                style={{ '--delay': `${0.4 + i * 0.3}s` }}
              >
                <i />
              </span>
            </div>
          ),
        )}
      </div>
      <span className="kf-alert-finish">
        <Send size={14} /> The right nudge, at the right time.
      </span>
    </div>
  );
}

export const FEATURE_SCENES = [
  CampaignScene,
  MatchingScene,
  UpdatesScene,
  AlertsScene,
];
